import { Button, Card, Container } from "react-bootstrap";

 export const ButtonLocal = (() => {
    window.location.href = 'http://localhost:3001';

    return (
        <Container>
            <Card>
                <Button onClick={ButtonLocal} className="mt-3" variant="Danger">
                    Ir a localhost:3000
                </Button>
            </Card>
        </Container>
    );
});