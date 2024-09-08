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
            from <span className="purple"> Kenya </span>,
            a <span className="purple"> Fullstack Software Developer </span> with a focus on Backend development. 
            currently in my final year of pursuing a Bachelors Degree in Computer Science at <span className="purple">The University of Nairobi.</span>
            <br />
            <hr/>
            <p>
            I began coding two years ago and have since created some cool projects with the skills I have acquired. 😎
              <br />
              <br />I am fluent in
                <b className="purple"> Python, C, Javascript, HTML, CSS and AL. </b> and I'm currently learning the <b className="purple">Go</b> programming language 🙌
              <br />
              <br />
              My field of Interest's are &nbsp;
                <b className="purple">building custom web applications </b>
                and &nbsp;
                <b className="purple">
                  web hacking
                </b>
              <br />
            </p>
            <hr />
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
