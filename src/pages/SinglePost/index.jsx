import React, { useEffect } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import TextContentPost from "../../components/TextContentPost/TextContentPost";
import './SinglePost.css'
import Twitter from '../../assets/icons/twitter-gray.svg'
import Facebook from '../../assets/icons/facebook-gray.svg'
import Instagram from '../../assets/icons/instagram-gray.svg'
import { useParams } from "react-router-dom";
import useStrappi from '../../hooks/useStrappi'
import useGetPicture from "../../hooks/useGetPicture";
const HtmlToReactParser = require('html-to-react').Parser;

const SinglePost = ({ post }) => {
    const htmlToReactParser = new HtmlToReactParser();
    const { postId } = useParams()
    const { data } = useStrappi('posts/' + postId + '?populate=*')
    const { Source } = useGetPicture(data)


    useEffect(() => {
      console.log(data);
    }, [Source])


    

    return (
        <Container className='mt-5 col-lg-12'>
            <Card className="Card rounded-0 shadow">
                <div className="imageContainer">
                    <Image src={Source} className="image" />
                </div>
                <Card.Title className="titleSinglePost ps-3 mt-3">
                    { data?.attributes?.Title}
                </Card.Title>
                <Card.Body>
                    <TextContentPost>
                    { htmlToReactParser.parse(data?.attributes?.Content)}
                    </TextContentPost>
                </Card.Body>
                <Card.Footer className="postFooter p-4 pe-0">
                    <Row className=" pe-0">

                        <Col lg='6' className="align-self-center">
                            Compartir este post
                        </Col>
                        <Col lg='2'>
                            <Image src={Twitter} className='socialIconsFooterPost' />
                        </Col>
                        <Col lg='2'>
                            <Image src={Facebook} className='socialIconsFooterPost' />
                        </Col>
                        <Col lg='2'>
                            <Image src={Instagram} className='socialIconsFooterPost' />
                        </Col>
                    </Row>

                </Card.Footer>
            </Card>
        </Container>
    )
}

export default SinglePost;