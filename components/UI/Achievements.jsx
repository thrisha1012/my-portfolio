import React from "react";
import { Container } from "reactstrap";
import classes from "../../styles/achievements.module.css";
import Head from "next/head";
import SectionSubtitle from "../../components/UI/SectionSubtitle"; // ✅ import it

const Achievements = () => {
  return (
    <>
      <Head>
        <title>Achievements | Thrisha S</title>
      </Head>

      <section id="achievements" className={classes.achievements}>
        <Container>
          {/* ✅ Replace h2 with SectionSubtitle */}
          <SectionSubtitle subtitle="Achievements" />
          <br></br>
          <ul className={classes.list}>
            <li>
              🏆 Achieved 1st prize in a 24-hour hackathon HackBuzz'24,
              conducted by the Department of CSE, KEC.
            </li>
            <li>
              🥈 Secured 2nd Place in the Coding Event at Renaissance’23,
              conducted by the Department of CSE, KEC.
            </li>
            <li>
              🥉 Won 3rd Prize in the Project Expo organized by the Computer
              Society of India, KEC.
            </li>
            <li>
              📄 Presented paper on Large Vehicle Proximity Sensor at
              Government College of Technology, Coimbatore.
            </li>
            <li>
              💡 Presented a project in Ehorizon'24 – Bus Fees Management
              System Project.
            </li>
            <li>
              📑 Presented a paper in MINTRA (Mechanical Symposium) –
              Anti-HIV treatment using Nanorobots.
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default Achievements;
