import React from 'react';
import { Carousel } from 'react-bootstrap';
import './about.css';

export default class About extends React.Component {
  render() {
    return (
      <div>
      <Carousel className="carouselcarousel">
        <Carousel.Item>
          <img width={1100} height={500} alt="900x500" src="http://i1.wp.com/www.passionweiss.com/wp-content/uploads/2015/10/Dodger-Stadium-Sunset-1.jpg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1100} height={500} alt="900x500" src="http://speculator.com/images/COMP/ESM9_04_3M%20use.gif" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1100} height={500} alt="900x500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FQ87cdx1JlqVrrMsxuTGYPvG4_l9gNXRHAP4b69OpA9g4Rva" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
}
