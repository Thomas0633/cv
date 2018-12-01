import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import Zoom from 'react-reveal/Zoom';
import './projets.css';

const CardProjets = (props) => {
  return(
    <Col xs='12' md='6' lg='4' className='mb-5'>
      <Zoom>
        <Card className='cardContainer'>
          <div className='pb-1 text-right divBarreWindows'>
            <span className='pl-2 pr-2'><i className="fas fa-minus"></i></span>
            <span className='pl-2 pr-2'><i className="far fa-clone iconReduceCard"></i></span>
            <span className='pl-2 pr-2'><i className="fas fa-times"></i></span>
          </div>
          <a href={props.link} target='_blank' rel='noreferrer noopener'>
            <div className='divImageCard'>
              <CardImg top width="100%" src={props.image} alt={props.title} className='imageCard' />
              {props.techno}
            </div>
          </a>
          <CardBody className='bodyCard'>
            <CardTitle>{props.title}</CardTitle>
            <CardText>
              {props.description}
            </CardText>
            <div className='w-100 float-bottom'>
              <a href={props.link} target='_blank' rel='noreferrer noopener'><Button className='btnCardProjet'>Découvrir <i className="fas fa-angle-right"></i></Button></a>
            </div>
          </CardBody>
        </Card>
      </Zoom>
    </Col>
  )
}

export default CardProjets;