import React, { Component } from 'react';
import { Container, Row, Badge } from 'reactstrap';
import Zoom from 'react-reveal/Zoom';
import './projets.css';
import CardProjets from './CardProjets';

class Projets extends Component {
    render() {
        return(
            <div className='pl-5 pr-5' id='idProjets'>
              <div className='ecartScroll'></div>
                <Container fluid className='containerProjets'>
                    <h1 className='display-4 text-white titleCategorie mb-5'><i className="fas fa-wrench pr-3 iconTitle"></i>Projets</h1>

                    <Zoom>
                        <Row className='d-flex justify-content-center'>
                          <CardProjets
                            image='ressources/projet1-react.png'
                            title='Multi-App in React'
                            description="Développement d'une application web à titre personnel mettant en oeuvre plusieurs principes de programmation sur différentes petites applications."
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                                <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                                <Badge className='mr-3 badgeCard'>Bootstrap</Badge>
                                <Badge className='mr-3 badgeCard'>JavaScript</Badge>
                                <Badge className='mr-3 badgeCard'>ReactJS</Badge>
                              </div>
                            }
                            link='http://multi-app.thomasbulle.fr/'
                          />

                          <CardProjets
                            image='ressources/la-tipik.png'
                            title='La Tipik'
                            description="Développement d'un site web pour un projet fictif au sein de la Wild Code School. Projet réalisé en équipe de 5 développeurs sur une durée de 5 semaines. Travail en agile (Scrum)."
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                                <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                                <Badge className='mr-3 badgeCard'>Bootstrap</Badge>
                                <Badge className='mr-3 badgeCard'>JavaScript</Badge>
                                <Badge className='mr-3 badgeCard'>ReactJS</Badge>
                              </div>
                            }
                            link='http://latipik.thomasbulle.fr/'
                          />

                          <CardProjets
                            image='ressources/cerf-tete.png'
                            title='Wild Cerf-tête'
                            description="Développement d'un site web vitrine pour un projet fictif au sein de la Wild Code School. Projet réalisé en équipe de 5 développeurs sur une durée d'un mois. Travail en agile (Scrum)."
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                                <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                                <Badge className='mr-3 badgeCard'>Bootstrap</Badge>
                              </div>
                            }
                            link='http://cerf-tete.thomasbulle.fr/'
                          />

                          <CardProjets
                            image='ressources/wild-circus.JPG'
                            title='Wild Circus'
                            description="Création d'un site fictif destiné à une troupe de cirque. Projet effectué dans le cadre de la candidature à la Wild Code School."
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                                <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                              </div>
                            }
                            link='http://wild-circus.thomasbulle.fr/'
                          />

                          <CardProjets
                            image='ressources/chocolate-box.jpg'
                            title='Chocolate box'
                            description='Composez votre boîte de chocolat ! Une petit application développée en React / Redux.'
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                                <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                                <Badge className='mr-3 badgeCard'>Bootstrap</Badge>
                                <Badge className='mr-3 badgeCard'>ReactStrap</Badge>
                                <Badge className='mr-3 badgeCard'>JavaScript</Badge>
                                <Badge className='mr-3 badgeCard'>ReactJS</Badge>
                                <Badge className='mr-3 badgeCard'>Redux</Badge>
                              </div>
                            }
                            link='http://chocolate-box.thomasbulle.fr/'
                          />

                          <CardProjets
                            image='ressources/react-fetch.jpg'
                            title='Random fetch'
                            description="Une petite application qui utilise une API et génère aléatoirement des employés ou des citations des Simpsons."
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                                <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                                <Badge className='mr-3 badgeCard'>JavaScript</Badge>
                                <Badge className='mr-3 badgeCard'>ReactJS</Badge>
                              </div>
                            }
                            link='http://random-fetch.thomasbulle.fr/'
                          />

                          <CardProjets
                            image='ressources/simpson-quotes.jpg'
                            title='Lumière !'
                            description="Petite application pour mettre en pratique React. Appuyez sur les interrupteurs pour allumer ou éteindre les lampes."
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                                <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                                <Badge className='mr-3 badgeCard'>JavaScript</Badge>
                                <Badge className='mr-3 badgeCard'>ReactJS</Badge>
                              </div>
                            }
                            link='http://lumiere.thomasbulle.fr/'
                          />

                          <CardProjets
                            image='ressources/fruits-salad.jpg'
                            title='Fruits Salad'
                            description="Création d'une page web en HTML5 et CSS3 à partir d'une maquette."
                            techno={
                              <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                                <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                                <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                              </div>
                            }
                            link='http://fruits-salad.thomasbulle.fr/'
                          />
                        </Row>
                    </Zoom>
                </Container>
            </div>
        )
    }
}

export default Projets;