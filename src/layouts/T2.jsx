import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, 
  TabContent, TabPane, Nav, NavItem, 
  NavLink } from 'reactstrap';
import classnames from 'classnames';
import Menu from './Menu'
import pic_pk_normal from '../assets/img/pk/pk_merge_opt.jpg'
import pic_pk_ovl from '../assets/img/pk/ovl_pk_merge.jpg'

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
              <p>Sukishi New Normal</p>
              <p>(A la carte)</p>
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              <p>Sukishi สุข Overload</p>
              <p>(All you can eat)</p>
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
            <Menu pic={pic_pk_normal} />
          </TabPane>
          <TabPane tabId="2">
           <Menu pic={pic_pk_ovl} />
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