import React, { Component } from 'react';
import './contact.css';

class InfoContact extends Component {
    render() {
        return(
            <div className='w-100 infoContact'>
                <h3 className='m-0 font-weight-light titleFollow'><i class="fas fa-map-marker-alt"></i> Localisation</h3>
                <div className='containerMap'>
                    <iframe
                      title='Map'
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23124.287829285313!2d6.98351985398254!3d43.57455115538994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc2a093c5c0e03%3A0xaf0ada0e43c1e15d!2s06110+Le+Cannet!5e0!3m2!1sfr!2sfr!4v1563628228380!5m2!1sfr!2sfr'
                      frameborder="0"
                      style={{ border:0 }}
                      allowfullscreen
                      className='mapInfoContact'
                    >
                    </iframe>
                </div>
                <h4 className='font-weight-light pt-4 pb-4'><i className="fas fa-location-arrow"></i> Le Cannet, Alpes-Maritimes</h4>
            </div>
        )
    }
}

export default InfoContact;