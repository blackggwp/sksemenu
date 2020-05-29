import React, { useState } from "react";
import { List } from 'antd-mobile';
import { Breadcrumb, BreadcrumbItem, 
  TabContent, TabPane, Nav, NavItem, 
  NavLink } from 'reactstrap';
import classnames from 'classnames';
import Menu from './Menu'
import PdfView from './PdfView'

const T2 = () => {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <hr/>
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Tier 2</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div>
        <Nav tabs>
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
            <Menu/>
          </TabPane>
          <TabPane tabId="2">
           <PdfView/>
          </TabPane>
          <TabPane tabId="3">
            <Menu/>
          </TabPane>
        </TabContent>
      </div>

    </div>
  );
}
export default T2