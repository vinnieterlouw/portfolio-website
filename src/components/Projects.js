import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/moneymanage.png";
import projImg2 from "../assets/img/portfolio.png";
import projImg3 from "../assets/img/vin.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "Own project to show some of my skills",
      imgUrl: projImg2,
    },
    {
      title: "50/30/20 Manager",
      description: "Project for school",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I don't have that much projects yet since i am a junior and
                    still getting more and more experienced. I will add the
                    projects i will do here so there will be more coming soon!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">FINISHED PROJECTS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">CURRENT PROJECTS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">ABOUT ME</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>NONE AT THE MOMENT</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          <p>
                            <img
                              src={projImg3}
                              style={{ height: "20" }}
                              alt="me"
                            />
                          </p>
                          I am a junior developer that is always positive and
                          always wants to deliver the best work possible. I love
                          working on projects and making a website look amazing
                          is always my goal. I love to travel the world and i
                          would love to work abroad on day, after i've gained
                          lots of experience first!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
