import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid , Row, Col, Image, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './gallery.css';

export default class Gallery extends React.Component {
  render() {
    return (
        <Grid>
          <Row className="show-grid make-horizontal">
            <Col xs={12} md={4} className="person-wrapper">
              <Image src="#"/>
              <p>Here is project number one. I like it a lot. It took me a while to make and I am proud of it.</p>
            </Col>
            <Col xs={12} md={4}>
              <Image src="#"/>
              <p>Here is project number one. I like it a lot. It took me a while to make and I am proud of it.</p>
            </Col>
            <Col xs={12} md={4}>
              <Image src="#"/>
              <p>Here is project number one. I like it a lot. It took me a while to make and I am proud of it.</p>
            </Col>
          </Row>
        </Grid>
    );
  }
}
