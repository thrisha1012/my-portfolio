import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

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
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">Thrisha S</h3>
            
            <p>
              I'm a passionate Full-Stack Developer with a strong foundation in both front-end and back-end technologies. With a keen eye for detail and a love for creating seamless user experiences, I strive to bridge the gap between design and functionality.
            </p>

            <div className="mt-4">
              <h5>Education</h5>
              <h6 className="mt-3">Kongu Engineering College</h6>
              <p>Bachelor of Engineering in Computer Science and Engineering </p>
              <h6 className="mt-3">Green Park Educational Institution</h6>
              <p>Higher Secondary Education</p>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">Download Resume</Link>
              </button>

            </div>
          </Col>

          <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img01} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img02} alt="about-img" />
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img03} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img04} alt="about-img" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;