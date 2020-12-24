import { Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';

import "react-image-gallery/styles/css/image-gallery.css";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Page404 from './Page404';

const Menu = (props) => {
  const [currentPic, setCurrentPic] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [pic, setPic] = useState('');
  const brandid = props.brandid

  function importAll(r) {
    return r.keys().map(r);
  }

  useEffect(() => {
    let lists = []
    switch (brandid) {
      case 'bq_ovl':
        lists = importAll(require.context(`./../../public/img/bq_ovl/`, true, /\.(png|jpe?g|svg)$/));
        break;
      case 'bf':
        lists = importAll(require.context(`./../../public/img/bf/`, true, /\.(png|jpe?g|svg)$/));
        break;
      case 'sg':
        lists = importAll(require.context(`./../../public/img/sg/`, true, /\.(png|jpe?g|svg)$/));
        break;
      case 'delivery':
        lists = importAll(require.context(`./../../public/img/delivery/`, true, /\.(png|jpe?g|svg)$/));
        break;
      default:
        lists = false
        break;
    }
    setPic(lists)
  }, [brandid])

  if (!pic) return <Page404 />

  const renderPic = (pic) => {
    return (
      <div style={{ textAlign: '-webkit-center' }}>
        {pic ?
          pic.map((pic, idx) =>
            <img key={idx} src={pic.default} alt="img"
              style={{ maxWidth: '100%', height: 'auto' }}
              onClick={() => {
                setIsOpen(true)
                setCurrentPic(pic.default)
              }}
            />)
          :
          <Typography>Now loading...</Typography>
        }
      </div>
    )
  }

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={currentPic}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
      {renderPic(pic)}
    </>
  );
}
export default Menu
