import { Box, Container, Typography } from "@mui/material";
import "../App.css"
import ImageCollage from "../components/ImageCollage";
import Accordian from "../components/Accordian";
import {Paper, BottomNavigation} from "@mui/material"
import Modal from "../components/Modal";


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
            <Box>
            <Typography variant="h6" component="h3" marginTop={3}>
                Explore the world in Vegas
            </Typography>
            <Typography variant="paragraph" component="h4" marginTop={3}>
                Fugiat est eu aliqua voluptate eiusmod veniam pariatur ipsum. Magna excepteur eiusmod occaecat aliquip do ut laboris aute ullamco ullamco tempor duis aliqua. Amet cupidatat fugiat nulla excepteur qui do ullamco dolor enim veniam labore officia. Et aliqua magna fugiat labore eu et tempor elit aliqua occaecat. Excepteur mollit quis qui do esse in ea irure do. Ut proident ipsum cupidatat tempor dolore. Cupidatat ea qui enim ut ex do commodo laborum velit.
                Lorem ex officia sit anim esse voluptate tempor tempor non amet commodo duis commodo. Cillum cillum ea duis eiusmod laboris elit adipisicing laboris ea veniam non. Magna proident sit qui quis ea laborum occaecat ut adipisicing. Labore quis id cillum consectetur dolore cupidatat.
            </Typography>
            </Box>
            <Box>
            <Typography variant="h6" component="h3" marginTop={3 } marginBottom={2}>
                Frequently asked questions
            </Typography>
            <Accordian/>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
        showLabels
        >
            <Modal/>
        </BottomNavigation>
      </Paper>
            </Box>
        </Container>
    )
}
export default Tour;