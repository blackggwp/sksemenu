import React, { useState } from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { global } from '../config';

const Menu: React.FC<ImageProps> = ({ imgUrl }) => {
  const [currentPic, setCurrentPic] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const renderPic = (pic: Array<string>) => {
    return (
      <div style={{ textAlign: 'center' }}>
        {pic ?
          pic.map((pic, idx) =>
            <img key={idx}

              src={`${global.apiServer}${pic}`}
              alt={pic}
              style={{ maxWidth: '100%', height: 'auto' }}
              onClick={() => {
                setIsOpen(true)
                setCurrentPic(pic)
              }}
            />
          )
          :
          <div>Now loading...</div>
        }
      </div>
    )
  }

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={`${global.apiServer}${currentPic}`}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
      {renderPic(imgUrl)}
    </>
  );

}

export default Menu