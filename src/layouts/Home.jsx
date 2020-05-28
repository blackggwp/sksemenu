import React from "react";
import { List } from 'antd-mobile';
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Home = () => {

  const Item = List.Item;
const Brief = Item.Brief;

    

    return (
      <>
        <div className="content">
          <Row>
            <Col>
          <Link to="/menu">
            <div>
      <List className="my-list">
        <Item arrow="horizontal" multipleLine onClick={() => {}}>
          Sukishi New Normal 
          <Brief>
          <p></p>
          <p></p>
          <p></p>
          </Brief>
        </Item>
      </List>
    </div>
    </Link>
            </Col>
          </Row>
          <Row>
            <Col>
          <Link to="/pdf">
            <div>
      <List className="my-list">
        <Item arrow="horizontal" multipleLine onClick={() => {}}>
          Overload Comeback
          <Brief>
          <p></p>
          <p></p>
          <p></p>
          </Brief>
        </Item>
      </List>
    </div>
    </Link>
            </Col>
          </Row>

          <Row>
            <Col>
            <div>
      <List className="my-list">
        <Item arrow="horizontal" multipleLine onClick={() => {}}>
          Promotion
          <Brief>
          <p></p>
          <p></p>
          <p></p>
          </Brief>
        </Item>
      </List>
    </div>
            </Col>
          </Row>
          
        </div>
      </>
    );
  }
export default Home