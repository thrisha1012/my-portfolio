import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
     
      <Container>
      <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle=" Skills" />
              
              </div><br></br>
        <Row>
          {/* App, Web, Full-Stack Development */}
          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="App Development" icon="ri-apps-line" />
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="Web Development" icon="ri-computer-line" />
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="Full-Stack Development" icon="ri-code-s-slash-line" />
            </div>
          </Col>

          {/* Individual Programming Languages */}
          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="C Programming" icon="ri-code-line" />
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="C++ Programming" icon="ri-code-line" />
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="Java Programming" icon="ri-code-line" />
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="SQL" icon="ri-database-2-line" />
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="JavaScript" icon="ri-code-s-slash-line" />
            </div>
          </Col>

          {/* React, Node.js, Next.js */}
          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="React" icon="ri-stack-line" />
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="Node.js" icon="ri-stack-line" />
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="Next.js" icon="ri-stack-line" />
            </div>
          </Col>

          {/* MySQL, MongoDB */}
          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="MySQL" icon="ri-database-2-line" />
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="MongoDB" icon="ri-database-2-line" />
            </div>
          </Col>

          {/* Bootstrap, Figma */}
          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="Bootstrap" icon="ri-brush-line" />
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className={`${classes.service__box}`}>
              <ServicesItem title="Figma" icon="ri-brush-line" />
            </div>
          </Col>
        </Row>

        
      </Container>
    </section>
  );
};

export default Services;
