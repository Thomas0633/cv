import React, { Component } from 'react';
import { Container, Row, Badge } from 'reactstrap';
import './projets.css';
import CardProjets from './CardProjets';

class Projets extends Component {
    render() {
        return(
            <div className='pl-5 pr-5' id='idProjets'>
              <div className='ecartScroll'></div>
                <Container fluid className='containerProjets'>
                    <h1 className='display-4 text-white titleCategorie mb-5'><i className="fas fa-wrench pr-3 iconTitle"></i>Projets</h1>

                    <Row className='d-flex justify-content-center'>
                      <CardProjets
                        image='ressources/purevoyance.jpg'
                        title='Purevoyance'
                        description="Site de voyance en ligne permettant de consulter des voyants directement depuis l'interface du site."
                        techno={
                          <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                            <Badge className='mr-3 badgeCard'>ReactJS</Badge>
                            <Badge className='mr-3 badgeCard'>NextJS</Badge>
                            <Badge className='mr-3 badgeCard'>Redux</Badge>
                            <Badge className='mr-3 badgeCard'>JavaScript</Badge>
                            <Badge className='mr-3 badgeCard'>Sass</Badge>
                            <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                            <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                          </div>
                        }
                        link='https://www.purevoyance.com/'
                      />

                      <CardProjets
                        image='ressources/winespace.jpg'
                        title='Winespace'
                        description="Développement d'un site dans l'univers du vin pour la start-up Winespace. Travail en équipe de 5 développeurs et mise en place de la méthode SCRUM."
                        techno={
                          <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                            <Badge className='mr-3 badgeCard'>ReactJS</Badge>
                            <Badge className='mr-3 badgeCard'>JavaScript</Badge>
                            <Badge className='mr-3 badgeCard'>NodeJS</Badge>
                            <Badge className='mr-3 badgeCard'>MySQL</Badge>
                            <Badge className='mr-3 badgeCard'>PhpMyAdmin</Badge>
                            <Badge className='mr-3 badgeCard'>Bootstrap</Badge>
                            <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                            <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                          </div>
                        }
                        link='http://winespace.campus-bordeaux.ovh/'
                        propsCard={{ title: 'En maintenance' }}
                      />

                      <CardProjets
                        image='ressources/la-tipik.png'
                        title='La Tipik'
                        description="Développement d'un site web pour un projet fictif au sein de la Wild Code School. Projet réalisé en équipe de 5 développeurs sur une durée de 5 semaines. Travail en agile (Scrum)."
                        techno={
                          <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                            <Badge className='mr-3 badgeCard'>ReactJS</Badge>
                            <Badge className='mr-3 badgeCard'>JavaScript</Badge>
                            <Badge className='mr-3 badgeCard'>Bootstrap</Badge>
                            <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                            <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                          </div>
                        }
                        link='http://latipik.thomasbulle.fr/'
                      />

                      <CardProjets
                        image='ressources/dashboard.jpg'
                        title='Dashboard'
                        description="Développement d'une application web basé sur le localStorage du navigateur, représentant un dashboard administrateur et client. Identifiants administrateur : admin - admin321. Identifiants client : user - user123."
                        techno={
                          <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                            <Badge className='mr-3 badgeCard'>ReactJS</Badge>
                            <Badge className='mr-3 badgeCard'>JavaScript</Badge>
                            <Badge className='mr-3 badgeCard'>Bootstrap</Badge>
                            <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                            <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                          </div>
                        }
                        link='http://dashboard.thomasbulle.fr/'
                      />

                      <CardProjets
                        image='ressources/projet1-react.png'
                        title='Multi-App in React'
                        description="Développement d'une application web à titre personnel mettant en oeuvre plusieurs principes de programmation sur différentes petites applications."
                        techno={
                          <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                            <Badge className='mr-3 badgeCard'>ReactJS</Badge>
                            <Badge className='mr-3 badgeCard'>JavaScript</Badge>
                            <Badge className='mr-3 badgeCard'>Bootstrap</Badge>
                            <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                            <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                          </div>
                        }
                        link='http://multi-app.thomasbulle.fr/'
                      />

                      <CardProjets
                        image='ressources/cerf-tete.png'
                        title='Wild Cerf-tête'
                        description="Développement d'un site web vitrine pour un projet fictif au sein de la Wild Code School. Projet réalisé en équipe de 5 développeurs sur une durée d'un mois. Travail en agile (Scrum)."
                        techno={
                          <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                            <Badge className='mr-3 badgeCard'>Bootstrap</Badge>
                            <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                            <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                          </div>
                        }
                        link='http://cerf-tete.thomasbulle.fr/'
                      />

                      <CardProjets
                        image='ressources/chocolate-box.jpg'
                        title='Chocolate box'
                        description='Composez votre boîte de chocolat ! Une petit application développée en React / Redux.'
                        techno={
                          <div className='h-100 w-100 d-flex justify-content-center align-items-center flex-wrap containerBadge'>
                            <Badge className='mr-3 badgeCard'>ReactJS</Badge>
                            <Badge className='mr-3 badgeCard'>Redux</Badge>
                            <Badge className='mr-3 badgeCard'>JavaScript</Badge>
                            <Badge className='mr-3 badgeCard'>Bootstrap</Badge>
                            <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                            <Badge className='mr-3 badgeCard'>HTML 5</Badge>
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
                            <Badge className='mr-3 badgeCard'>ReactJS</Badge>
                            <Badge className='mr-3 badgeCard'>JavaScript</Badge>
                            <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                            <Badge className='mr-3 badgeCard'>HTML 5</Badge>
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
                            <Badge className='mr-3 badgeCard'>ReactJS</Badge>
                            <Badge className='mr-3 badgeCard'>JavaScript</Badge>
                            <Badge className='mr-3 badgeCard'>CSS 3</Badge>
                            <Badge className='mr-3 badgeCard'>HTML 5</Badge>
                          </div>
                        }
                        link='http://lumiere.thomasbulle.fr/'
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
                </Container>
            </div>
        )
    }
}

export default Projets;