import "../App.css";
import ButtonAppBar from "../components/AppBar";
import TourCard from "../components/TourCard";
import Container from '@mui/material/Container';
// import {Container, Grid} from "@mui/material";
import Grid from '@mui/material/Grid';
import cities from "../data.json"
import { Typography } from "@mui/material";



const Home = () => {
    return(
        <div>
  <Container sx={{marginY: 5}}>
    {
      cities.map((city) => (
        <div key={city.id}>
         <Typography  variant="h4" component="h2" marginTop={5}>
      Top {city.name} places
     </Typography>
     <Grid container spacing={5}>
        {
          city.tours.map((tour, index) => (
            <TourCard key={index} tour={tour} />
            ))
        }
    </Grid>
        </div>
           
      ))
    }

    
  </Container>
 </div>
    )
}

export default Home;