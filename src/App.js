import "./App.css";
import Fellowships from "./components/portfolioData";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import Testimonial from "./components/testimonials";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <div className="intro">
        <span className="name">
          HI, MY NAME IS <span> Erica Wanja</span>
        </span>

        <span className="title">Frontend dev, Technical Writer</span>
        <span className="desc">
          I like to build amazing UI/Ux experiences, grow and build communities
          and continously learn, sift and organize technical documentations for
          a user
        </span>

        <div className="callWork">
          <div>
            <button>
              <a
                href="https://www.linkedin.com/in/erica-wanja/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Me
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="socials"></div>
      <div className="moreIntro">
        <div className="img">
          <img src="./images/portfolio.jpg" alt="Erica" />
        </div>

        <div className="moreDesc">
          <span className="title">
            Software Dev, Technical writer, Community Engineer
          </span>
          <div>
            <p>
              I'm a computer science student and i've been coding for two years
              now. I am glad to be building frontend solutions, and helping many
              others learn to code through community voluteers and technical
              writing.
            </p>
            <br></br>
            <p>
              If you do not find me on my working table probably I might be
              hiking or in a tech-meetup
            </p>{" "}
            <br></br>
          </div>
          <div className="techStack">
            <p>Constantly learning, But these are my current weapons</p>
            <br></br>
            <div className="techStackIcons">
              <span>
                <AiOutlineCaretRight style={{ fill: "rgba(90,93,94,0.4)" }} />
                Javascript
              </span>
              <span>
                <AiOutlineCaretRight style={{ fill: "rgba(90,93,94,0.4)" }} />{" "}
                React
              </span>
              <span>
                {" "}
                <AiOutlineCaretRight
                  style={{ fill: "rgba(90,93,94,0.4)" }}
                />{" "}
                Firebase
              </span>
              <span>
                <AiOutlineCaretRight style={{ fill: "rgba(90,93,94,0.4)" }} />{" "}
                NextJs
              </span>
            </div>
            <button>
              <a
                href="https://github.com/Ericawanja"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        <div>
          <h3>Frontend Developer intern</h3>
          <p>Oluadepe (Aug 2022- Present)</p>
          <span>
            Building user-interfaces and systems that are meant to serve fish
            farmers.
          </span>

          <p> Tools: Jira, Git, ReactJs, NextJs, Javascript</p>
        </div>
        <div>
          <h3>Voluteer Developer advocate</h3>
          <p>Lux-Tech Academy (october 2021 - present)</p>
          <span>
            In the spirit of building an online coding school that is good as
            MIT and cheap as Gym membership, I help in organizing bootcamps,
            curriculum, facilitate the sessions with an aim to reach more
            people.
          </span>
        </div>
        <div>
          <h3>Intern Software Developer</h3>
          <p>Netpap Global Company (Sep 2021-Dec 2021)</p>
          <span>
            Helped redesign the companies landing page which reduced the bounce
            rate by 30% Built a report generating system that reduced report
            creating time from 1 hour manually to less than 4 minutes.
          </span>
          <p>Tools: Javascript, Jquery, CanvasJs, ReactJs, Python</p>
        </div>
      </div>
      <div className="personalProjects">
        <h2>Personal projects</h2>
        <div>
          {Projects.map((project, index) => {
            const { name, desc, github, tools, demo, image } = project;
            return (
              <div className="projects">
                <h3>{name}</h3>
                <div className="projectContainer">
                  <div className="cont2">
                    <img src={image} alt="Project" />
                  </div>
                  <div className="cont1">
                    <span className="desc">{desc}</span>
                    <div className="tools">
                      {tools.map((tool, index) => {
                        return <span className="tools">Tools: {tool}</span>;
                      })}
                    </div>
                    <div className="btns">
                      <button>
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source Code
                        </a>
                      </button>
                      <button>
                        <a
                          href={demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="fellowships">
        <h2>Fellowships & Communities</h2>
        <div className="fcContainer">
          {Fellowships.map((item, index) => {
            const { name, role, desc, socials } = item;
            return (
              <div className="containerItem">
                <span className="name">{name}</span>
                <p>{role}</p>
                <span className="desc"> {desc}</span>
                {socials.map((socialItem, index) => {
                  const { twitter, linkedin } = socialItem;
                  return (
                    <div className="socials">
                      <span>
                        <a
                          href={twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter />
                        </a>
                      </span>
                      <span>
                        <a
                          href={linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin />
                        </a>
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="education">
        <h2>Education</h2>
        <div className="eduContainer">
          <div>
            <h3>Bsc Mathematics and Computer science (2018 - 2022)</h3>
            <p>Murang'a University of Technology</p>

            <p> </p>
          </div>
          <div>
            <h3>Kenya Certificate of Secondary Education </h3>
            <p>Maua Girls High School: ( 2014 - 2017)</p>
            <p></p>
          </div>
        </div>
      </div>
      {/*<div className="testimonial">
        <h2>Testimonials</h2>
        {Testimonial.map((testimonyitem, index) => {
          const { img, name, career, company, testimony } = testimonyitem;
          return (
            <div className="testimonyWrapper">
              <div>
                <img src={img} alt="" />
                <div>{name}: XYZ company</div>
              </div>
              <div>{testimony}</div>
            </div>
          );
        })}
      </div>*/}
    </div>
  );
}

export default App;
