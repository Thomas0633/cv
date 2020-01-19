import React, { Component } from 'react';
import './photoshop.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const imagesNames = [
  'mer-perspective',
  'dog-under-snow',
  'arbre-lac',
  'new-york-in-head',
  'logo-inlight'
];

class Photoshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenImage: false,
      indexPhotoOpened: -1,
    };
  }

  render() {
    const { isOpenImage, indexPhotoOpened } = this.state;
    return (
      <div className='photoshop-wrapper'>
        <div className='ecartScroll'></div>
        <h1 className='display-4 titleCategorie'><i className="fas fa-file-image pr-3 iconTitle"></i>Réalisations photoshop</h1>

        <div className='images-wrapper'>
          {imagesNames.map((image, index) => (
            <span key={index} className='img-container' onClick={() => this.setState({ isOpenImage: true, indexPhotoOpened: index })}>
              <img src='../../ressources/zoom-in.svg' alt='Zoom in' className='img-zoom-in' />
              <img
                src={`../../ressources/photoshop/${image}.png`}
                alt={image}
                title={image.replace('-', ' ')}
                className='img-photoshop' />
            </span>
          ))}

          {isOpenImage && <Lightbox mainSrc={`../../ressources/photoshop/${imagesNames[indexPhotoOpened]}.png`} onCloseRequest={() => this.setState({ isOpenImage: false, indexPhotoOpened: -1 })} />}
        </div>
      </div>
    )
  }
}

export default Photoshop;
