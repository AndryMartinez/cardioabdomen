import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import TextContentPost from "../../components/TextContentPost/TextContentPost";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'


const Contact = () => {

    return (
        <Container className='mt-5 mb-5 col-lg-12 pb-5 contentContact' >
            <Card className="Card rounded-0 p-3 shadow pb-5 mb-5">
                <Card.Title className="title mt-1 text-left" >
                    Contactanos
                </Card.Title>
                <Card.Body>
                    <TextContentPost >
                        <Row>
                            <Col lg='12' className="mb-5 mt-3">
                                <h3>
                                    <FontAwesomeIcon icon={faEnvelope} className='me-4' />   ingresosadpro@gmail.com
                                </h3>
                            </Col>
                            <Col lg="12" className="mt-0">
                                <h3>
                                    <FontAwesomeIcon icon={faPhone} className='me-4' />      +58 0416 426 3355
                                </h3>
                            </Col>
                        </Row>

                    </TextContentPost>
                </Card.Body>
            </Card>

        </Container>
    )
}

export default Contact