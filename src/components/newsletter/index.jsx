import React from "react";

import { Button, Col, Image, Row } from "react-bootstrap";
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'

import '../SideContent/styles.css'
import InputText from "../inputText";

const Newsletter = () => {
    return(
        <Row className="col-lg-11 align-self-center justify-content-center ps-0 mt-2 " >
            <Col className="align-self-center newsText p-0">
                Newsletter
            </Col>
            <Col>
                <Button style={{ background: '#fff' }} className='border-0'>
                    <Image src={twitter} width='40' height='40' />
                </Button>
            </Col>
            <Col>
                <Button style={{ background: '#fff' }} className='border-0'>
                    <Image src={instagram} width='40' height='40' />
                </Button>
            </Col>
            <Col >
                <Button style={{ background: '#fff' }} className='border-0'>
                    <Image src={facebook} width='40' height='40' />
                </Button>
            </Col>
            <Col lg='12' className="ps-0 row mt-3" style={{ marginLeft: '-1rem' }}>
                <InputText
                    className={'rounded-end rounded-4 w-75 me-0'}
                    placeholder="Ingrese su email"

                />
                <Button className="col bg-buttom rounded-start rounded-4 border-0" >
                    Enviar
                </Button>
            </Col>
        </Row>
    )
}

export default Newsletter