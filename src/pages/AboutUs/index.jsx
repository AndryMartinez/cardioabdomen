import React from "react";
import { Card, Container } from "react-bootstrap";
import TextContentPost from "../../components/TextContentPost/TextContentPost";

const About = () => {
    return (
        <Container className='mt-5 mb-5 col-lg-12 pb-5 contentContact' >
            <Card className="Card rounded-0 p-3 shadow pb-5 mb-5">
                <Card.Title className="title mt-1" >
                    Acerca de Nosotros
                </Card.Title>
                <Card.Body>
                    <TextContentPost>
                        Somos una organización educativa dedicada a impartir métodos para mejorar y evolucionar físicamente
                        conservando las buenas prácticas y alimentación saludable, no creemos en los límites para ningún
                        tipo de cuerpo o de metabolismo solo creemos en la constancia y en una metodología correcta y sana
                        para lograr los objetivos que nos planteamos para nuestro cuerpo
                    </TextContentPost>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default About