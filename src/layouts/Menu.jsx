import React from 'react'
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import pic from '../assets/img/s.jpg'
import Nav from '../components/Navbars/Nav'

  const Menu = () => {

    return (
      <div>
        <Nav/>
        <div>
            <PinchZoomPan
            style={{ zIndex: -1 }}
            zoomButtons={false}
            position='center'
            maxScale= {3}
            doubleTapBehavior='reset'
            >
                <img alt='Test Image' src={pic} />
            </PinchZoomPan>
        </div>
    </div>
    );
}
export default Menu