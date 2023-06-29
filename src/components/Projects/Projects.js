import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import resume from "../../Assets/Projects/resume.JPG";
import emotion from "../../Assets/Projects/emotion.png";
import stackoverflow from "../../Assets/Projects/stackoverflow.JPG";
import edublog from "../../Assets/Projects/edublog.png";
import pointcloud from "../../Assets/Projects/3d.png";

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
              imgPath={edublog}
              isBlog={false}
              title="EduBlog"
              description="Similar to Blog to share resources and hangout with students by faculty build with python, django. Have features which allows user for performing CRUD operation on posts, like and save post as well as supports comments."
              ghLink="https://github.com/anushanagula/Edublog"
              demoLink="https://edublog1.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stackoverflow}
              isBlog={false}
              title="StackStats"
              description="A simple website which shows the brief overview of stackoverflow user build with React.js, REST APIs. analyzes the activity of a
              ‘stack overflow’ user and provides the statistics. "
              ghLink="https://github.com/anushanagula/StackStats"
              demoLink="https://stackstats.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Resume Builder"
              description="An easy to use Resume Builder using React.js and Redux. Features include Add the details, Preview, Downoad Resume."
              ghLink="https://github.com/anushanagula/resume-builder"
              demoLink="https://enhance-resume.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emoji Recognition from facial expression"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. 
              And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person and map it to respective emoji."
              ghLink="https://github.com/anushanagula/emoji_recognitionn"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pointcloud}
              isBlog={false}
              title="3D point cloud processing"
              description="Classification and segmentation of 3D objects using point clouds directly with transforming into other forms like voxel grids etc using ModelNet40 dataset."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
