import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ian Alpha &nbsp;</span>
            from <span className="purple"> Kenya </span>
            <br />
            <br />
            I am a <span className="purple"> Fullstack Software Developer </span> with a focus on Backend development
            <br />
            <br />
            I am currently in my final year of pursuing a Bachelors Degree in Computer Science at <span className="purple">The University of Nairobi</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball 🏀
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Board games 🀄
            </li>
            <li className="about-activity">
              <ImPointRight /> Bird watching 🐦🦜
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
