import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { AccessTime, ReadMore  } from "@mui/icons-material";
import Rating from '@mui/material/Rating';
import {Button, createTheme, ThemeProvider} from "@mui/material"
import { Navigate, useNavigate } from 'react-router-dom';


const theme = createTheme({
  components: {
    MuiTypography : {
      variants : [
        {
          props: {
            variant : "body2",
          },
          style : {
            fontSize: 11,
          },
        },
        {
          props: {
            variant : "body3",
          },
          style : {
            fontSize: 9,
          },
        },

      ]
    }
  }
})

const TourCard = ({tour}) => {
    const navigate = useNavigate();

    return(
      <Grid item xs={3}>
        <ThemeProvider theme={theme}>
        <Paper elevation={3}  >
          <img className='w-full h-20' src={tour.image} />
          <Box className="px-3" >
              <Typography variant='subtitle1'>
                {tour.name}
              </Typography>
              <Box className="flex items-center">
                <AccessTime sx={{width: 12.5}}/>                
                <Typography variant='body2' marginLeft={0.5}>{tour.duration} hours</Typography>
              </Box>
              <Box className="flex items-center mt-3">
                  <Rating name="read-only" value={tour.rating} precision={0.5} readOnly size='small'>
                  </Rating>
                  <Typography variant='body2' component="p" marginLeft={0.5}>
                    {tour.rating}
                  </Typography>                   
                  <Typography variant='body3' component="p" marginLeft={1.5}>
                    {
                      `(${tour.numberOfReviews} reviews) `
                    }
                  </Typography>     
              </Box>
              <Box>
                <Typography variant='h6' component="h3" marginTop={0}>
                  From ${tour.price}
                </Typography>
              </Box>
              <Box>
                <Button onClick={() => (navigate(`/${tour.id}`))}>Read More</Button>
              </Box>
          </Box>
          
        </Paper>
        </ThemeProvider>
      </Grid>
    )
}

export default TourCard;