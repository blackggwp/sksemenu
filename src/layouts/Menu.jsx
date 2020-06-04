import React from 'react'
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import CustomNav from '../components/Navbars/CustomNav'
import { Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from 'react-image-gallery';

  const Menu = (props) => {

    // const renderPic = () => {
    //   return (
    //     <div key="menu-pk1">
    //     <PinchZoomPan
    //         style={{ zIndex: -1 }}
    //         zoomButtons={false}
    //         position='center'
    //         maxScale= {3}
    //         doubleTapBehavior='zoom'
    //         >
    //             <img alt="menu-pk1" src={props.location.pic} />
    //         </PinchZoomPan>
    //     </div>
    //   )
    // }

    return (
      <div>
          <CustomNav/>
          <div>
        <Breadcrumb>
          <BreadcrumbItem active>{props.location.headerText}</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <ImageGallery items={props.location.pic} 
      lazyLoad={true}
      showFullscreenButton={false}
      showPlayButton={false}
      slideDuration={100}
      showIndex={true}
      />

        {/* {renderPic()} */}
        <Button color="primary" size="lg" onClick={() => props.history.goBack()} block>Back</Button>
    </div>
    );
}
export default Menu