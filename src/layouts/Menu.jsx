import React from 'react'
import PinchZoomPan from "react-responsive-pinch-zoom-pan";

  const Menu = (props) => {

    const renderPic = () => {
      return (
        <div key="menu-pk1">
        <PinchZoomPan
            style={{ zIndex: -1 }}
            zoomButtons={false}
            position='center'
            maxScale= {3}
            doubleTapBehavior='zoom'
            >
                <img alt="menu-pk1" src={props.pic} />
            </PinchZoomPan>
        </div>
      )
    }

    return (
      <div
      style={{ marginTop: 100 }}
      >
        {renderPic()}
    </div>
    );
}
export default Menu