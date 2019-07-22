import React, { Component } from 'react';
import './competences.css';

import { Container, Row, Col, Button } from 'reactstrap';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import MoreCompetences from './MoreCompetences';

class Competences extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      show: !this.state.show,
    });
  }

    render() {
        return (
            <div className='pb-5 competences' id='idCompetences'>
              <div className='ecartScroll'></div>
                <Container>
                    <h1 className='mb-5 display-4 text-white titleCompetences'><i className="fas fa-cogs pr-3 iconTitle"></i>Compétences</h1>

                    <Zoom>
                        <Row className='rowCompetences'>
                            <Col lg='4' className='mt-4 mb-4 pr-5 pl-5 d-flex justify-content-center'>
                                <div className='pt-2 w-50 h-100 d-flex flex-column align-items-center justify-content-center backgroundCompetences'>
                                    <img src='ressources\react.png' className='w-75 img-fluid' alt='React JS' />
                                    <span className='nameCompetence mt-2 mb-2'>React JS</span>
                                </div>
                            </Col>
                            <Col lg='4' className='mt-4 mb-4 pr-5 pl-5 d-flex justify-content-center'>
                                <div className='pt-2 w-50 h-100 d-flex flex-column align-items-center justify-content-center backgroundCompetences'>
                                    <img src='ressources\nextjs.png' className='w-75 img-fluid' alt='NextJS' />
                                    <span className='nameCompetence mt-2 mb-2'>NextJS</span>
                                </div>
                            </Col>
                            <Col lg='4' className='mt-4 mb-4 pr-5 pl-5 d-flex justify-content-center'>
                                <div className='pt-2 w-50 h-100 d-flex flex-column align-items-center justify-content-center backgroundCompetences'>
                                    <img src='ressources\js.png' className='w-75 img-fluid' alt='JavaScript' />
                                    <span className='nameCompetence mt-2 mb-2'>JavaScript</span>
                                </div>
                            </Col>
                        </Row>
                        
                        <Row className='rowCompetences'>
                            <Col lg='4' className='mt-4 mb-4 pr-5 pl-5 d-flex justify-content-center'>
                                <div className='pt-2 w-50 h-100 d-flex flex-column align-items-center justify-content-center backgroundCompetences'>
                                    <img src='ressources\node.png' className='w-75 img-fluid' alt='Node JS' />
                                    <span className='nameCompetence mt-2 mb-2'>Node JS</span>
                                </div>
                            </Col>
                            <Col lg='4' className='mt-4 mb-4 pr-5 pl-5 d-flex justify-content-center'>
                                <div className='pt-2 w-50 h-100 d-flex flex-column align-items-center justify-content-center backgroundCompetences'>
                                    <img src='ressources\css.png' className='w-75 img-fluid' alt='CSS 3' />
                                    <span className='nameCompetence mt-2 mb-2'>CSS 3</span>
                                </div>
                            </Col>
                            <Col lg='4' className='w-100 mt-4 mb-4 pr-5 pl-5 d-flex justify-content-center'>
                                <div className='pt-2 w-50 h-100 d-flex flex-column align-items-center justify-content-center backgroundCompetences'>
                                    <img src='ressources\html.png' className='w-75 img-fluid' alt='HTML 5' />
                                    <span className='nameCompetence mt-2 mb-2'>HTML 5</span>
                                </div>
                            </Col>
                        </Row>
                    </Zoom>

                    <Button size='lg' className='buttonCompetences' onClick={this.handleClick}>En savoir plus</Button>

                    <Fade top collapse when={this.state.show}>
                      <MoreCompetences />
                    </Fade>
                </Container>
            </div>
        )
    }
}

export default Competences;