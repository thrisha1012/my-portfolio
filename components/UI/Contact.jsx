import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Form from "./Form"; // Importing the Form Component

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

import classes from "../../styles/contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4" style={{ color: "white" }}>
              Contact with me
            </h3>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Namakkal , Tamil Nadu</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>thrishamani2004@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+91 81481 56744</p>
              </li>
            </ul>

            <div className={`${classes.social__links} mt-4`}>
                <Link href="https://github.com/thrisha1012" target="_blank">
                  <FaGithub size={24} />
                </Link>

                <Link href="https://www.linkedin.com/in/thrisha-subramanian-a00471259/" target="_blank">
                  <FaLinkedin size={24} />
                </Link>

                <Link href="https://www.hackerrank.com/profile/22CSR226ST" target="_blank">
                  <SiHackerrank size={24} />
                </Link>

                <Link href="https://leetcode.com/u/22CSR226ST/" target="_blank">
                  <SiLeetcode size={24} />
                </Link>
              </div>
          </Col>

          <Col lg="6" md="6">
            <Form /> {/* Keep your form here */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
