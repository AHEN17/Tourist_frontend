import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your custom CSS file for styling
import culturalImage from '../pages/cultural.jpeg';
import beachesImage from '../pages/beach.jpeg';
import templesImage from '../pages/temples.jpeg';
import naturalBeautyImage from '../pages/naturalbeauty.jpeg';
import localCuisineImage from '../pages/cuisines.jpeg';

const Home = () => (
  <Container fluid className="mt-5 home-container">
    <Row>
      <Col>
        <h1 className="home-title">Welcome to Namma Kudla</h1>
        <p className="home-description">
          Discover the charm of Mangaluru, Karnataka, India, through "Namma Kudla." Explore its rich cultural heritage, stunning beaches, ancient temples, natural beauty, and local cuisine.
        </p>
        <div className="button-group">
          <Link to="/destinations" className="explore-btn">
            <Button variant="primary">
              Explore Destinations
            </Button>
          </Link>
          <Link to="/login" className="explore-btn">
            <Button variant="primary">
              Login
            </Button>
          </Link>
          <Link to="/guideprofile" className="explore-btn">
            <Button variant="primary">
              Explore Guides
            </Button>
          </Link>
        </div>
      </Col>
    </Row>

    <Row className="mt-5">
      <Col>
        <Carousel indicators={false} interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={culturalImage}
              alt="Cultural Heritage"
            />
            <Carousel.Caption>
              <h3>Cultural Heritage</h3>
              <p>Mangaluru is steeped in cultural richness with influences from Hindu, Christian, and Muslim communities.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={beachesImage}
              alt="Beaches"
            />
            <Carousel.Caption>
              <h3>Beaches</h3>
              <p>Experience picturesque beaches like Panambur Beach and Tannirbhavi Beach.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={templesImage}
              alt="Temples"
            />
            <Carousel.Caption>
              <h3>Temples</h3>
              <p>Visit ancient temples such as Kudroli Gokarnath Temple and Mangaladevi Temple.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={naturalBeautyImage}
              alt="Natural Beauty"
            />
            <Carousel.Caption>
              <h3>Natural Beauty</h3>
              <p>Explore the natural beauty of Mangaluru surrounded by the Western Ghats and the Arabian Sea.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={localCuisineImage}
              alt="Local Cuisine"
            />
            <Carousel.Caption>
              <h3>Local Cuisine</h3>
              <p>Indulge in delicious local cuisine blending flavors from various communities.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>
);

export default Home;
