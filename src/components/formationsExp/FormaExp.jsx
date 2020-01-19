import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './formaExp.css';
import Modele from './Modele';


class FormaExp extends Component {
    render() {
        return(
          <div className='formations' id='idFormations'>
            <div className='ecartScroll'></div>
            <div>
                <Container fluid className='containerFormations'>
                    <h1 className='display-4 titleCategorie mb-5'><i className="fas fa-graduation-cap pr-3 iconTitle"></i>Formations</h1>
                    
                    <Modele
                      name='Wild Code School'
                      location='Bordeaux, Gironde'
                      diplome='Formation développeur web - Full stack'
                      dateDebut='DECEMBRE 2017'
                      dateFin='FEVRIER 2019'
                      description="Formation d'une durée de 5 mois dans laquelle j'ai pu me former au métier de développeur web. J'ai pu découvrir différentes technologies front-end mais également back-end, ce qui m'a permis de devenir full-stack. Durant toute cette formation, j'ai appliqué la méthode agile, plus précisément en Scrum. Cela m'a permis d'accroître mon sens du travaille en équipe."
                    />

                    <Modele
                      name='Openclassroom'
                      location='France'
                      diplome='Certificat "Apprenez à coder avec JavaScript"'
                      dateDebut='DECEMBRE 2017'
                      dateFin='JANVIER 2018'
                      description="Formation aux bases du language JavaScript."
                      link='/certificat-js.pdf'
                      txtLink='Voir le certificat'
                    />

                    <Modele
                      name='Openclassroom'
                      location='France'
                      diplome='Certificat "Apprenez à créer vos sites web avec HTML5 et CSS3"'
                      dateDebut='DECEMBRE'
                      dateFin='2017'
                      description="Formation aux bases de la programmation web. Apprentissage des languages HTML5 et CSS3."
                      link='/certificat-html.pdf'
                      txtLink='Voir le certificat'
                    />
                    
                    <Modele
                      name='Lycée Grand Air'
                      location='Arcachon, Gironde'
                      diplome='Baccalauréat STMG'
                      dateDebut='JUIN 2014'
                      dateFin='SEPTEMBRE 2011'
                      description="Baccalauréat Sciences et Technologies du Management et de la Gestion, spécialité Ressources Humaines obtenue en juin 2014 au lycée Grand Air à Arcachon (33)."
                    />
                </Container>
            </div>
            
            <div className='ecartScroll' id='idExperiences'></div>
            <div className='experiences'>
              <Container fluid className='containerFormations'>
                <h1 className='display-4 titleCategorie mb-5'><i className="fas fa-suitcase pr-3 iconTitle"></i>Expériences</h1>

                <Modele
                  name='Cleeven'
                  location='Sophia Antipolis, Alpes-Maritimes'
                  diplome='Développeur web'
                  dateDebut='SEPTEMBRE'
                  dateFin='2019'
                  description="Développeur web, en poste actuellement, je travaille avec des technologies axées principalement sur JavaScript comme ReactJS, Redux, mais aussi des technologies back-end comme NodeJS. Je m'occupe principalement du développement front-end de ce projet mais j'intervient également dans l'architecture du projet et du choix des technologies."
                />

                <Modele
                  name='Télémaque'
                  location='Sophia Antipolis, Alpes-Maritimes'
                  diplome='Développeur web'
                  dateDebut='FEVRIER 2019'
                  dateFin='SEPTEMBRE 2019'
                  description="Développeur web, j'ai travaillé avec des technologies axées principalement sur JavaScript comme ReactJS, NextJS, Redux, mais aussi des technologies back-end comme PHP, Laravel ou encore Strapi. Mon activité principale était le développement des interfaces des sites grand public de la société."
                />
                
                <Modele
                  name='Winespace'
                  location='Bordeaux, France'
                  diplome='ReactJS - NodeJS - MySQL - JavaScript - Bootstrap - CSS3 - HTML5'
                  dateDebut='EN'
                  dateFin='COURS'
                  description="Développement d'un site dans l'univers du vin pour la start-up Winespace. Travail en équipe de 5 développeurs et mise en place de la méthode SCRUM."
                  link='http://winespace.campus-bordeaux.ovh/'
                  txtLink='winespace.campus-bordeaux.ovh'
                />

                <Modele
                  name='Dashboard'
                  location='Bordeaux, France'
                  diplome='ReactJS - JavaScript - API Rest - Bootstrap - CSS3 - HTML5'
                  dateDebut='JANVIER'
                  dateFin='2019'
                  description="Développement d'une application web basé sur le localStorage du navigateur, représentant un dashboard administrateur et client. Identifiants administrateur : admin - admin321. Identifiants client : user - user123."
                  link='http://dashboard.thomasbulle.fr/'
                  txtLink='dashboard.thomasbulle.fr'
                />

                <Modele
                  name='Hackathon'
                  location='Bordeaux, France'
                  diplome='Pour une sobriété numérique'
                  dateDebut='DECEMBRE'
                  dateFin='2018'
                  description="Hackathon du 21 au 22 décembre 2018 sur la problématique de l'impact environnemental de la Transition Numérique, en partenariat avec The Shift Project."
                  link=''
                  txtLink=''
                />

                <Modele
                  name='thomasbulle.fr'
                  location='Bordeaux, France'
                  diplome='ReactJS - JavaScript - Bootstrap - CSS3 - HTML5'
                  dateDebut='NOVEMBRE'
                  dateFin='2018'
                  description='Développement de mon site personnel.'
                  link='http://www.thomasbulle.fr/'
                  txtLink='www.thomasbulle.fr'
                />

                <Modele
                  name='Hackathon'
                  location='Bordeaux, France'
                  diplome='B-Boost : modèle ouvert et cancérologie'
                  dateDebut='NOVEMBRE'
                  dateFin='2018'
                  description="Hackathon du 06 au 07 novembre 2018 sur le thème de la cancérologie et l'open data, en partenariat avec Epidemium."
                  link='https://b-boost.fr/'
                  txtLink='https://b-boost.fr/'
                />

                <Modele
                  name='Chocolate box'
                  location='Bordeaux, France'
                  diplome='ReactJS - Redux - JavaScript - Bootstrap - CSS3 - HTML5'
                  dateDebut='NOVEMBRE'
                  dateFin='2018'
                  description='Composez votre boîte de chocolat ! Développement d&apos;une application développée en React/Redux.'
                  link='http://chocolate-box.thomasbulle.fr/'
                  txtLink='chocolate-box.thomasbulle.fr'
                />

                <Modele
                  name='Multi-app in React'
                  location='Bordeaux, France'
                  diplome='ReactJS - JavaScript - Bootstrap - CSS3 - HTML5'
                  dateDebut='OCTOBRE 2018'
                  dateFin='NOVEMBRE 2018'
                  description='Développement d&apos;une application web à titre personnel mettant en oeuvre plusieurs principes de programmation sur différentes petites applications.'
                  link='http://multi-app.thomasbulle.fr/'
                  txtLink='multi-app.thomasbulle.fr'
                />

                <Modele
                  name='La Tipik'
                  location='Bordeaux, France'
                  diplome='ReactJS - JavaScript - Bootstrap - CSS3 - HTML5'
                  dateDebut='OCTOBRE 2018'
                  dateFin='OCTOBRE 2018'
                  description='Développement d&apos;un site web pour un projet fictif au sein de la Wild Code School. Projet réalisé en équipe de 5 développeurs. Travail en agile (Scrum).'
                  link='http://latipik.thomasbulle.fr/'
                  txtLink='latipik.thomasbulle.fr'
                />

                <Modele
                  name='Wild Cerf-tête'
                  location='Bordeaux, France'
                  diplome='Bootstrap - CSS3 - HTML5'
                  dateDebut='SEPTEMBRE 2018'
                  dateFin='SEPTEMBRE 2018'
                  description='Développement d&apos;un site web vitrine pour un projet fictif au sein de la Wild Code School. Projet réalisé en équipe de 5 développeurs sur une durée d&apos;un mois. Travail en agile (Scrum).'
                  link='http://cerf-tete.thomasbulle.fr/'
                  txtLink='cerf-tete.thomasbulle.fr'
                />

                <Modele
                  name='Fruits salad'
                  location='Bordeaux, France'
                  diplome='CSS3 - HTML5'
                  dateDebut='SEPTEMBRE 2018'
                  dateFin='SEPTEMBRE 2018'
                  description='Intégration d&apos;une maquette en HTML5 et CSS3.'
                  link='http://fruits-salad.thomasbulle.fr/'
                  txtLink='fruits-salad.thomasbulle.fr'
                />

                <Modele
                  name='Gendarmerie Nationale'
                  location='France'
                  diplome='Gendarme Adjoint Volontaire - Brigadier-Chef'
                  dateDebut='SEPTEMBRE 2014'
                  dateFin='SEPTEMBRE 2018'
                  description="Poste de gendarme adjoint volontaire en brigade territoriale, occupé durant 4 années. Cette forte expérience m'a permis de découvrir les valeurs militaires comme le respect de la hiérarchie, la ponctualité et la disponibilité. De nombreuses responsabilités m'ont été confiées, pour cela, j'ai du acquérir une grande maturité. J'ai également travaillé en équipe au quotidien et développé mon leadership grâce à mon grade de Brigadier-Chef."
                />
              </Container>
            </div>
          </div>
        )
    }
}

export default FormaExp;