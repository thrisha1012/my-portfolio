import React, { useState, useEffect } from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.png";
import classes from "../../styles/hero.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

const Hero = () => {
  const fullText = "I'm THRISHA";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className={classes.hero}>
      <Container>
        <Row>
          {/* LEFT SIDE CONTENT */}
          <Col lg="6" md="6">
            <div className={classes.hero__content}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className={classes.bounceText}>
                {"THRISHA".split("").map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </h2>

              <h5 className="mb-4">Fullstack Developer</h5>
              <p>
                I'm a passionate Fullstack Developer who enjoys building responsive websites and scalable backend systems. I love solving real-world problems through clean and efficient code.
              </p>

              <div className="mt-5">
              <a 
                href="/resume.pdf"
                download="Thrisha-Resume.pdf"
                className="primary__btn"
              >
                Resume
              </a>
            </div>



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
            </div>
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width={380} height={500} priority />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
