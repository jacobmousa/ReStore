import { Button, Container, Divider, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export default function NotFound() {
    return(
        <Container component={Paper} sx={{hegith:20}}>
            <Typography gutterBottom variant="h5">Oops - we could not find you are looking for</Typography>
            <Divider></Divider>
            <Button fullWidth component={Link} to='/catalog'>Go back to shop</Button>
        </Container>
    )
}