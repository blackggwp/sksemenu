import React from "react";
import { NavBar, Icon } from "antd-mobile";
import { withRouter, Link } from "react-router-dom";

const CustomNav = (props) => {
  return (
    <div
      style={{
        marginBottom: 40,
      }}
    >
      <NavBar
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
        mode="light"
        icon={<Icon type="left" style={{ cursor: "pointer" }} />}
        onLeftClick={() => props.history.goBack()}
        // rightContent={[
        //   <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        //   <Icon key="1" type="ellipsis" />,
        // ]}
      >
        <Link to={`${process.env.PUBLIC_URL}/`}>
          {/* <Link to="/"> */}
          Home
        </Link>
      </NavBar>
    </div>
  );
};
export default withRouter(CustomNav);
