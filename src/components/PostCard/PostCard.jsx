import moment from "moment/moment";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import removeSpaces from "../../utils/removeSpaces";
import DateText from "../DateText/DateText";
import TextContentPost from '../TextContentPost/TextContentPost'
import './PostCard.css'
const HtmlToReactParser = require('html-to-react').Parser;



const PostCard = ({ title , content , date, id}) => {
    const htmlToReactParser = new HtmlToReactParser();


    return (
        <Card className="Card rounded-0 p-3 shadow">
            <Link to={'/singlePost/' + id + '/' + removeSpaces(title)} className="title">
                <Card.Title className="title mt-1" >
                    { title }
                </Card.Title>
            </Link>
            <Card.Body>
                <DateText className={'my-1'}>
                    { moment(date).format('MMM D, YYYY ') }
                </DateText>
                <TextContentPost>
                    { content?.slice(0, 228) }
                </TextContentPost>
            </Card.Body>
        </Card >
    )

}

export default PostCard