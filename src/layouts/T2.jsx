import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, 
  TabContent, TabPane, Nav, NavItem, 
  NavLink } from 'reactstrap';
import classnames from 'classnames';
import Menu from './Menu'
import pic_pk from '../assets/img/pk/pk_merge_opt.jpg'

const T2 = () => {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Tier 2</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div>
        <Nav tabs sticky="top"
        style={{ 
          padding: 10,
          backgroundColor: 'aliceblue',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 100,
          cursor: 'pointer'
        }}
        >
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Sukishi New Normal
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Overload Comeback
          </NavLink>
          </NavItem>
          <NavItem>
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
            <Menu pic={pic_pk} />
          </TabPane>
          <TabPane tabId="2">
           <h4>Tab 2</h4>
          </TabPane>
          <TabPane tabId="3">
           <h4>Tab 3</h4>
          </TabPane>
        </TabContent>
      </div>

    </div>
  );
}
export default T2