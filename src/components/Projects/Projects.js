import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import currency from "../../Assets/Projects/currency.png";
import restaurant from "../../Assets/Projects/restaurant.png";
import movie from "../../Assets/Projects/movie.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="ME AND YOU"
              description="A restaurant concept is the overall idea or theme that defines the restaurant. Concepts include your menu's design, service style, dining room decor, and — of course — the style of food. Many restaurants are conceived based on a chef's personal experiences or interests."
              ghLink="https://github.com/Aadityabandhane/MEANDYOU_RESTAURANT"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie app"
              description="A film, also known as a movie or motion picture, is a work of visual art that simulates experiences and otherwise communicates ideas, stories, perceptions, emotions, or atmosphere through the use of moving images that are generally, since the 1930s, synchronized with sound and (less commonly) other sensory stimulations "
              ghLink="https://github.com/Aadityabandhane/movie_project"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="currency converter app"
              description="A universal currency converter is a software application or website that provides for the easy conversion of currency values based on present-day exchange rates."
              ghLink="https://github.com/Aadityabandhane/Curency_converter"
                           
            />
          </Col>

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
