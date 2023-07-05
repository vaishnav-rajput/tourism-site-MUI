import { Box, Container, Typography } from "@mui/material";
import "../App.css"
import ImageCollage from "../components/ImageCollage";

const Tour = () => {
    return(
        <Container sx={{width: 900}}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Explore the world in Vegas
            </Typography>
            <Box marginTop={3} className="flex">
                <img className="w-3/4" src="https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg" alt="" />
                <ImageCollage></ImageCollage>
            </Box>
        </Container>
    )
}
export default Tour;