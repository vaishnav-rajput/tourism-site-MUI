import "./App.css";
import ButtonAppBar from "./components/AppBar";
import TourCard from "./components/TourCard";
import Container from '@mui/material/Container';
// import {Container, Grid} from "@mui/material";
import Grid from '@mui/material/Grid';
import AppBar from "./components/AppBar"

function App() {
  return (
 <div>
  <AppBar />
  <Container sx={{marginY: 5}}>
    <Grid container spacing={5}>
      <TourCard/>
      <TourCard/>
      <TourCard/> 
      <TourCard/>
    </Grid>
  </Container>
 </div>
  );
}

export default App;
