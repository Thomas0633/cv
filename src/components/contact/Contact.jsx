import React, { Component } from 'react';
import './contact.css';
import FollowContact from './FollowContact';
import InfoContact from './InfoContact';
import Copyright from './Copyright';

class Contact extends Component {
    render() {
        return(
          <div id='idContact'>
            <div className='ecartScroll' style={{ backgroundColor: '#fff' }}></div>
            <div className='text-white contact'>
              <InfoContact />
              <FollowContact />
              <Copyright />
            </div>
          </div>
        )
    }
}

export default Contact;