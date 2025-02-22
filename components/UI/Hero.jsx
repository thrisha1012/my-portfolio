import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // GitHub and LinkedIn icons
import { SiHackerrank } from "react-icons/si"; // HackerRank icon
import { SiLeetcode } from "react-icons/si"; // LeetCode icon

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m THRISHA</h2>
              <h5 className="mb-4">Fullstack Developer</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit rem sint ipsa cumque. Atque rem vel iusto impedit omnis
                quos!
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#">Resume</Link>
                </button>
              </div>

              {/* ========== Social Media Links ============= */}
              <div className={`${classes.social__links} mt-4`}>
                <Link href="https://github.com/yourusername">
                  <FaGithub size={24} />
                </Link>

                <Link href="https://www.linkedin.com/in/yourusername">
                  <FaLinkedin size={24} />
                </Link>

                <Link href="https://www.hackerrank.com/yourusername">
                  <SiHackerrank size={24} />
                </Link>

                <Link href="https://leetcode.com/yourusername">
                  <SiLeetcode size={24} />
                </Link>
              </div>
            </div>
          </Col>
          

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="350" height="400" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
