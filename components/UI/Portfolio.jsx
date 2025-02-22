import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

import portfolioData from "../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("Web Application");  // Default filter to "Web Application"
  const [data, setData] = useState([]);

  useEffect(() => {
    // Filter data based on the selected category
    const filteredData = portfolioData.filter(
      (item) => item.category === filter
    );
    setData(filteredData);
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" Projects" />
            <h4 className="mt-4">Some of my works</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={`${
                  filter === "Web Application" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Web Application")}
              >
                Web Application
              </button>
              <button
                className={`${
                  filter === "UI/UX Design" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("UI/UX Design")}
              >
                UI/UX Design
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
