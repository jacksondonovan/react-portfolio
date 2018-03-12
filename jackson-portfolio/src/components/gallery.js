import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid , Row, Col, Image, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './gallery.css';

export default class Gallery extends React.Component {
  render() {
    return (
        <div className="outter-wrapper">
        <Jumbotron className="jumbo">
          <h1>Projects to Inspect!</h1>
          <p className="herotext">
            You'll find a wide range of applications here, from single-player games to meet-up apps.
            This portfolio will always be 1% done. I'm never done learning.
          </p>
          <p>
            <Button className="herobutton" bsStyle="primary"><Link className="texttowhite" to="/about">Get to know me</Link></Button>
          </p>
        </Jumbotron>
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
        </div>
    );
  }
}
