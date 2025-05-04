import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

import img01 from "../../public/images/img-01.png";
import img02 from "../../public/images/img-02.png";
import img03 from "../../public/images/img-03.png";
import img04 from "../../public/images/img-04.png";

import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          {/* Content Section */}
          <Col lg="6" className={classes.about__content}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">Thrisha S</h3>

            <p>
              I'm a passionate Full-Stack Developer with a strong foundation in
              both front-end and back-end technologies. With a keen eye for
              detail and a love for creating seamless user experiences, I strive
              to bridge the gap between design and functionality.
            </p>

            <div className="mt-4">
              <h5>Education</h5>

              <h6 className="mt-3">Kongu Engineering College</h6>
              <p>Bachelor of Engineering in Computer Science and Engineering</p>
              <p>GRAD: 2026, CGPA: 7.97</p>

              <Row className="mt-3">
                <Col md="6">
                  <h6>Green Park Educational Institution</h6>
                  <p>Higher Secondary Education (HSC)</p>
                  <p>GRAD: 2022, CGPA: 77.00%</p>
                </Col>
                <Col md="6">
                  <h6>Green Park Educational Institution</h6>
                  <p>Secondary School Leaving Certificate (SSLC)</p>
                  <p>GRAD: 2020, CGPA: 97.80%</p>
                </Col>
              </Row>

              <h5 className="mt-1">Achievements</h5>
              <p>
                - Achieved 1st prize in a 24-hour hackathon HackBuzz'24, conducted by the Department of CSE, KEC.
              </p>
              <p>
                - Secured 2nd Place in the Coding Event at Renaissance’23, conducted by the Department of CSE, KEC.
              </p>
              <p>
                - Presented paper on Large Vehicle Proximity Sensor at Government College of Technology, Coimbatore.
              </p>
            </div>
          </Col>

          {/* Image Column - Vertical Stack */}
          <Col lg="6">
            <div className={classes.about__img__gallery}>
              <div className={classes.about__img__box}>
                <Image src={img01} alt="about-img-1" layout="responsive" />
              </div>
              <div className={classes.about__img__box}>
                <Image src={img02} alt="about-img-2" layout="responsive" />
              </div>
              <div className={classes.about__img__box}>
                <Image src={img03} alt="about-img-3" layout="responsive" />
              </div>
              {/* <div className={classes.about__img__box}>
                <Image src={img04} alt="about-img-4" layout="responsive" />
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
