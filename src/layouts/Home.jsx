import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, 
  NavLink, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import classnames from 'classnames';
import Menu from './Menu'

const Home = (props) => {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // function scrolled(e) {
  //   if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
  //     scrolledToBottom(e);
  //   }
  // }
  const navItemsStyle = {
    border: '2px solid brown',
    borderRadius: 5,
    margin: '2px'
  }
  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>{props.forRender.headerText}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
      <Nav tabs sticky="top"
        style={{ 
          padding: 10,
          position: 'fixed',
          backgroundColor: 'wheat',
          top: 0,
          width: '100%',
          zIndex: 100,
          cursor: 'pointer',
          display: 'block'
        }}
        >
          <NavItem style={navItemsStyle}>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              
              <p>Sukishi สุข Overload</p>
              <p>(All you can eat)</p>
          </NavLink>
          </NavItem>
          <NavItem style={navItemsStyle}>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              <p>Sukishi New Normal</p>
              <p>(A la carte)</p>
          </NavLink>
          </NavItem>
          <NavItem style={navItemsStyle}>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              Promotion
          </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Menu pic={props.forRender.pic_ovl} />
          </TabPane>
          <TabPane tabId="2">
          <Menu pic={props.forRender.pic_normal} />
          </TabPane>
          <TabPane tabId="3">
          <Menu pic={props.forRender.pic_promotion} />
          </TabPane>
        </TabContent>
      </div>
      <div
      style={{
        float: 'right',
        zIndex: 99,
        position: 'fixed',
        bottom: 0,
        right: 0,
        marginRight: 20
      }}
      >
        {/* <Button color="primary" id="gotopbtn" onClick={() => topFunction()}>Back to top</Button> */}
      </div>
    </div>
  );
}
export default Home