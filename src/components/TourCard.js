import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { AccessTime  } from "@mui/icons-material";
import Rating from '@mui/material/Rating';
import {createTheme, ThemeProvider} from "@mui/material"

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

const TourCard = () => {
    return(
      <Grid item xs={3}>
        <ThemeProvider theme={theme}>
        <Paper elevation={3}  >
          <img className='w-full h-20' src='https://images.unsplash.com/photo-1566022357960-7cc01956a37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' />
          <Box className="px-3" >
              <Typography variant='subtitle1'>
                  Immerse Into the Falls
              </Typography>
              <Box className="flex items-center">
                <AccessTime sx={{width: 12.5}}/>                
                <Typography variant='body2' marginLeft={0.5}>5 hours</Typography>
              </Box>
              <Box className="flex items-center mt-3">
                  <Rating name="read-only" value={4.5} precision={0.5} readOnly size='small'>
                  </Rating>
                  <Typography variant='body2' component="p" marginLeft={0.5}>
                    4.5
                  </Typography>                   
                  <Typography variant='body3' component="p" marginLeft={1.5}>
                    (655 reviews )
                  </Typography>     
              </Box>
              <Box>
                <Typography variant='h6' component="h3" marginTop={0}>
                  From $124
                </Typography>
              </Box>
          </Box>
          
        </Paper>
        </ThemeProvider>
      </Grid>
    )
}

export default TourCard;