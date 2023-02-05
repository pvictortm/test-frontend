import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import style from './HeroCard.module.css';
import { Link } from 'react-router-dom';

const HeroCard = ({ id, avatar, name, addToMyTeam }) => {
    const defaultImage = 'https://preview.redd.it/7z6qt753qe031.jpg?width=640&crop=smart&auto=webp&s=91ec806f18889e2983e505d3a442bf52477a43ae';
    const addHero = (id) => {
        addToMyTeam(id)
    }
    return (
        <Col lg={4} md={6} sm={12} className={style.crdMargin}>
            <Card className={style.cardAbs}>
                <Card.Img variant="top" src={avatar || defaultImage} />
                <Card.Title className={`text-center ${style.abs}`}>{name}</Card.Title>
                <Card.Body className={style.back}>

                    <Col className="text-center">
                        <Link to={`/infopage/${id}`}><Button variant="danger" className={style.btnMargin}>Info</Button></Link>
                        {/* <Button variant="danger" onClick={() => { addHero(id) }}>Add</Button> */}
                    </Col>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { HeroCard };