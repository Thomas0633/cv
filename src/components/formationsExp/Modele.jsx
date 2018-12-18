import React from 'react';
import { Row, Col } from 'reactstrap';
import './formaExp.css';
import Fade from 'react-reveal/Fade';


const Modele = (props) => {
  return(
    <Row className='h-100 mb-5 rowFormations'>
      <Col md='4' className='p-0'>
        <Fade left>
          <div className='h-100 d-flex flex-column justify-content-center align-items-center nameFormations'>
            <div className='display-4 pl-2 pr-2 schoolFormations'>
              {props.name}
            </div>
            <div className='pl-2 pr-2 locationSchoolFormation'>
              <i class="fas fa-map-marker-alt"></i> {props.location}
            </div>
            <div className='pt-4 pl-2 pr-2 d-flex align-items-center justify-content-center diplomeFormations'>
              {props.diplome}
            </div>
          </div>
        </Fade>
      </Col>

      <Col md='2' className='d-flex justify-content-center align-items-center dateFormations'>
        <div className='pointDateLeft'></div>
          {props.dateDebut} -<br />{props.dateFin}
        <div className='pointDateRight'></div>
      </Col>

      <Col md='6' className='p-0'>
        <Fade right>
          <div className='h-100 text-justify d-flex align-items-center txtFormations'>
            <div className='p-3 w-100'>
              {props.description}
              <a href={props.link} target='_blank' rel='noreferrer noopener' className='d-block w-100'>{props.link}</a>
            </div>
          </div>
          </Fade>
      </Col>
    </Row>
  )
}

export default Modele;