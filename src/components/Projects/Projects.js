import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import MusicPlayer from "../../Assets/Projects/music-player.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ marginTop: "-15px"}}>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={MusicPlayer}
              isBlog={false}
              title="Spo2yt"
              description="A web app that converts Spotify Playlists to Youtube Music Playlists 🎶. Allowing users to see music videos for their favourite playlist songs 🤩. 
              Built with Flask, Youtube Data API, and Spotipy python library"
              ghLink="https://github.com/Omwamii/Spotify_to_Youtube_playlists"
              demoLink="https://youtu.be/Kcdp6nVLiqA?si=BhEtj2fVZDKnMQu6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Google Classroom Assignments Manager"
              description="A platform to help students to easily manage their assignments including viewing grading statistics. Built with Django, React, Bootstrap, Google Classroom API and Google Drive API"
              ghLink="https://github.com/Omwamii/Google-Assignments-Manager"
              demoLink="https://youtu.be/LD90tDF5B9Y?si=47JHRDLYp94s7gFD"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Social Networking Site"
              description="Built a Twitter-like networking site, where users can follow, like and comment on each other's posts. Built with React.Js and Django"
              ghLink="https://github.com/Omwamii/CS50-Web-projects/tree/main/project4"
              demoLink="https://youtu.be/GB9u3o0CfLI?si=wo0UQkwlL0HLEDGj"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Web Business Reviewing Platform"
              description="A platform for users to review business services by leaving their feedback on business pages. Users can then search for businesses based on their locations and chose on what business to patronize based on their ratings."
              ghLink="https://github.com/Omwamii/Yelp-clone"
              demoLink="https://youtu.be/9d8feCUF2ec?si=AWsRqQl71haZwmGt"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="Auction Site"
              description="A site for users to bid on items and make listings for other users to bid on. Built with Django, Bootstrap, HTML & CSS, JavaScript."
              ghLink="https://github.com/Omwamii/CS50-Web-projects/tree/main/commerce"
              demoLink="https://youtu.be/5tBj9MFe67E?si=Sib0EiNKjNm3KBRZ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="Files Manager"
              description="A files manager built from scratch using Node.js, Redis and MongoDB"
              ghLink="https://github.com/Omwamii/alx-files_manager"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
