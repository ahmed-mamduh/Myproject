import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },

  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' md='4' sm='12'>
            <div className='logo footer__logo'>
              <h1>
                <Link to='/home' className='d-flex align-items-center gap-3'>
                  <i className='ri-car-line'></i>
                  <span>
                    Buy car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className='footer__logo-content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              laboriosam, ab veritatis voluptas autem consequatur qui beatae
              eveniet reiciendis neque! Dignissimos, maiores reprehenderit. Odit
              ipsa saepe delectus, nesciunt obcaecati explicabo?
            </p>
          </Col>

          <Col lg='2' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer__link-title'> Quick Links </h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer__link-title mb-4'> Head Office</h5>
              <p className='office__info'>1234 Alexandria,Egypt</p>

              <p className='office__info'>Phone: +201010961393</p>

              <p className='office__info'>Email:admin_admin@hotmail.com</p>

              <p className='office__info'>Office Time: 9am - 5pm</p>
            </div>
          </Col>

          <Col lg='3' md='4'>
            <div className='mb-4'>
              <h5 className='footer__link-title'>NewsLetter</h5>
              <p className='section__description'>Subscribe our newsletter</p>
              <div className='newsletter'>
                <input type='email' placeholder='Email' />
                <span>
                  <i className='ri-send-plane-line'></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='12'>
            <div className='footer__bottom'>
              <p className='section__description d-flex align-items-center justify-content-center gap-1 pt-4'>
                <i className='ri-copyright-line'></i> CopyRight {year} ,
                Devoloped by Ahmed mamduh. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
console.log();
