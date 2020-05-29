import React from 'react'
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import pic from '../assets/img/s.jpg'
import CustomNav from '../components/Navbars/CustomNav'

  const Menu = () => {

    return (
      <div>
        <CustomNav/>
        <div>
            <PinchZoomPan
            style={{ zIndex: -1 }}
            zoomButtons={false}
            position='center'
            maxScale= {3}
            doubleTapBehavior='reset'
            >
                <img alt='Test' src={pic} />
            </PinchZoomPan>
        </div>
    </div>
    );
}
export default Menu