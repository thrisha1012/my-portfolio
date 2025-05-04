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
          <SectionSubtitle subtitle="Skills" />
        </div>
        <br />

        <Row>
          <Col lg="3" md="4" sm="6">
            <ServicesItem title="Java" icon="ri-code-line" />
          </Col>
          <Col lg="3" md="4" sm="6">
            <ServicesItem title="C" icon="ri-code-line" />
          </Col>
          <Col lg="3" md="4" sm="6">
            <ServicesItem title="Python" icon="ri-code-line" />
          </Col>

          <Col lg="3" md="4" sm="6">
            <ServicesItem title="HTML" icon="ri-html5-line" />
          </Col>
          <Col lg="3" md="4" sm="6">
            <ServicesItem title="CSS" icon="ri-css3-line" />
          </Col>
          <Col lg="3" md="4" sm="6">
            <ServicesItem title="JavaScript" icon="ri-code-s-slash-line" />
          </Col>

          <Col lg="3" md="4" sm="6">
            <ServicesItem title="React" icon="ri-reactjs-line" />
          </Col>
          <Col lg="3" md="4" sm="6">
            <ServicesItem title="Vite" icon="ri-flashlight-line" />
          </Col>
          <Col lg="3" md="4" sm="6">
            <ServicesItem title="Tailwind CSS" icon="ri-brush-line" />
          </Col>
          <Col lg="3" md="4" sm="6">
            <ServicesItem title="Node.js" icon="ri-node-tree" />
          </Col>

          <Col lg="3" md="4" sm="6">
            <ServicesItem title="MySQL" icon="ri-database-2-line" />
          </Col>
          <Col lg="3" md="4" sm="6">
            <ServicesItem title="MongoDB" icon="ri-database-line" />
          </Col>

          <Col lg="3" md="4" sm="6">
            <ServicesItem title="Git" icon="ri-git-branch-line" />
          </Col>
          <Col lg="3" md="4" sm="6">
            <ServicesItem title="Figma" icon="ri-brush-line" />
          </Col>
          <Col lg="3" md="4" sm="6">
            <ServicesItem title="VS Code" icon="ri-code-box-line" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
