import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

import './styles.css'
import Newsletter from "../newsletter";

const SideContent = () => {

    return (
        <div className="flex-column">
            <Col lg='12' md='12' sm='12' className="rounded-4 shadow card mt-5 pb-4 mb-5 p-0">
                <Newsletter />
            </Col>
            <Col lg='12' md='12' sm='12' className="rounded-4 shadow card mt-5 pb-4 mb-5 p-4">
                <h4>Lo más visto<hr /></h4>
                <ListGroup>
                    <ListGroup.Item action onClick={() => { }}>
                        This one is a button
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => { }}>
                        This one is a button
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => { }}>
                        This one is a button
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => { }}>
                        This one is a button
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </div>
    )
}

export default SideContent