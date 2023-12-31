import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";

export default function AboutPage() {
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    function getValidaionError(){
        agent.TestErrors.getValidaionError()
        .then(()=> console.log('should not see this'))
        .catch(error=> setValidationErrors(error) );
    }

    return (
        <Container>
            <Typography gutterBottom variant="h2">Error for testing peuposes</Typography>
            <ButtonGroup fullWidth>
                <Button variant='contained' onClick={() => agent.TestErrors.get400error().catch(error => console.log(error))}>Test 400</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.get401error().catch(error => console.log(error))}>Test 401</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.get404error().catch(error => console.log(error))}>Test 404</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.get500error().catch(error => console.log(error))}>Test 500</Button>
                <Button variant='contained' onClick={getValidaionError}>Test Validation Error</Button>
            </ButtonGroup>
            
        </Container>
    )
}