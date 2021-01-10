import React from "react";
import { List } from 'antd-mobile';
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const HomeOld = (props) => {

  const Item = List.Item;
  const Brief = Item.Brief;

  return (
    <>
      <div className="content">
        <Row>
          <Col>
            <Link to={{
              pathname: "/menu",
              pic: props.forRender.pic_ovl,
              headerText: props.forRender.headerText
            }}>
              <div>
                <List className="my-list">
                  <Item arrow="horizontal" multipleLine onClick={() => { }}>
                  <Brief>
                  <p>Sukishi สุข Overload</p>
                  <p>(All you can eat)</p>
                  </Brief>
                  </Item>
                </List>
              </div>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to={{
              pathname: "/menu",
              pic: props.forRender.pic_normal,
              headerText: props.forRender.headerText
            }}>
              <div>
                <List className="my-list">
                  <Item arrow="horizontal" multipleLine onClick={() => { }}>
                  <Brief>
                    <p>Sukishi New Normal</p>
                    <p>(A la carte)</p>
                  </Brief>
                  </Item>
                </List>
              </div>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col>
          <Link to={{
              pathname: "/menu",
              pic: props.forRender.pic_promotion,
              headerText: props.forRender.headerText
            }}>
            <div>
              <List className="my-list">
                <Item arrow="horizontal" multipleLine onClick={() => { }}>
                <Brief>
                  <p>Promotion</p>
                </Brief>
                </Item>
              </List>
            </div>
            </Link>
          </Col>
        </Row>

      </div>
    </>
  );
}
export default HomeOld