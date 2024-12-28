import React from "react";
import styled from "styled-components";
import firstpost from "../Resources/Images/Project/Automated report.png";
import ZAPPOS from "../Resources/Images/Project/PrilimProbe.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import StreamIcon from "@mui/icons-material/Stream";

const Projects = () => {
  const projects = [
    {
      id: 2,
      title: "Prelim Probe",
      img: ZAPPOS,
      desc: "Cloud based Web app for Preliminary Test of Skin Diseases,Pneumonia and Brain Tumor",
      worked:
        "Developed and established a robust cloud-based AI model leveraging Python and TensorFlow, empowering medical professionals with a user-friendly web application for timely severity detection; reduced diagnostic errors by 30% and improved patient outcomes",
      features: [
        "Strategically hosted the application on the Streamlit Community Cloud, resulting in a 40% reduction in processing time due to access to higher computation power and GPU resources", 
        "effectively improving efficiency and enabling faster diagnosis",
        
        "Tech Stack:  Python, Pandas, Numpy, Tensorflow, Streamlit and Keras.",
      ],
      keyPoint1: "E",
      keyPoint2: "",
      githubLink: "https://github.com/Vijayaprakash1709/preliminary_test_analyser",
      deployedLink: "https://preliminarytestanalyser.streamlit.app/",
      tags: ["Python", "Tensorflow", "Pytorch", "Keras", "Streamlit"],
    },
    {
      id: 1,
      title: "Automated Report Generator",
      img: firstpost,
      desc: "Project For Muthayammal Engineering College, Rasipuram, Tamil Nadu, India",
      worked:
      "Initiated and  led a team of 8 developers to create a specialized college website focused on automating report generation and integrating a separate dashboard. Effectively addressed a challenging issue within the college related to event report creation.",
      features: [
        "Whole website responsive.",
        "Implemented website hosting on the college server, ensuring streamlined access for all faculty members and resulting in a 50% reduction in work load, thus enhancing efficiency and productivity across departments.",
        "Languages Used: React, Express, Node, My SQL, JavaScript Pdf.",
      ],
      keyPoint2: "",
      keyPoint1: "",
      githubLink: "https://github.com/Vijayaprakash1709/Updated-MEC-RMS/tree/mec",
      // deployedLink: "https://firstpost-clone.netlify.app/",
      tags: ["HTML", "CSS", "Javascript", "React", "Node.js", "Express.js", "My SQL", "JavaScript Pdf"],
    },
    
  ];

  return (
    <Container id="projects" >
      <h1>Projects</h1>
      <div className="projectsContainer">
        {projects.map((ele, index) => (
          <div key={index} className="box" style={{minHeight:'600px',justifyContent:'center',alignItems:'center'}}>
            <div className="imgBox">
              <img src={ele.img} alt={ele.title} width="100%" />
            </div>
            <div className="ContentBox">
              <h2>{ele.title}</h2>
              <p>{ele.desc}</p>

              <div className="featureBox">
                <h4>Features</h4>
                <ul>
                  {ele.features.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </ul>
              </div>
              <p style={{ fontWeight: "bold" }}>{ele.worked}</p>

              <div className="tagsBox">
                {ele.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              {/* <p style={{ fontWeight: "bold" }}>Code | See this Live</p> */}
              <div className="linkSection">
                <a href={ele.githubLink} target="_blank">
                  <button>
                    <GitHubIcon />
                    Github
                  </button>
                </a>
                <a href={ele.deployedLink} target="_blank">
                  <button>
                    <StreamIcon />
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: #01a479;
    text-transform: uppercase;
  }

  .projectsContainer {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .box {
    position: relative;
    width: 100%;
    height: 450px;
    display: flex;
    gap: 10px;
    margin-bottom: 80px;
    border: 10px solid #e9e9e9;
    border-radius: 20px;
    overflow: hidden;
  }

  .imgBox {
    width: 50%;
    overflow: hidden;
  }

  .imgBox > img {
    display: block;
    transition: transform 0.4s;
  }

  .imgBox > img:hover {
    position: absolute;
    width: 80%;
    margin-top: -25%;
    transform: scale(1.3);
    transform-origin: 0% 0%;
  }

  .ContentBox {
    width: 50%;
    text-align: left;
    padding: 0px 20px 20px 20px;
  }

  .ContentBox > h2 {
    color: #01a479;
  }

  .ContentBox > p {
    width: 100%;
    font-size: large;
    margin-top: -10px;
  }
  .featureBox {
    margin-top: -10px;
  }
  .featureBox > h4 {
    color: #01a479;
  }
  .featureBox > ul {
    margin-top: -15px;
    text-align: left;
    font-size: 1em;
  }
  .featureBox + p {
    color: #01a479;
  }
  .tagsBox + p {
    color: #01a479;
  }
  .tagsBox {
    width: 80%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    line-height: 20px;
    gap: 5px;
    margin-bottom: 20px;
  }
  .tagsBox > h4 {
    color: #01a479;
  }
  .tagsBox > span {
    color: white;
    background-color: #01a479;
    padding: 2px 15px 2px 15px;
    border-radius: 10px;
    font-size: 13px;
  }

  .linkSection {
    display: flex;
    gap: 20px;
  }

  .linkSection > a {
    text-decoration: none;
  }
  .linkSection > a:first-child > button {
    background-color: black;
    color: White;
    padding: 8px 20px 8px 20px;
    border-radius: 8px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  button:hover {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .linkSection > a:last-child > button {
    background-color: #44a4be;
    color: White;
    padding: 8px 20px 8px 20px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1120px) {
    .box {
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    .projectsContainer {
      width: 80%;
      margin: auto;
    }

    .imgBox {
      width: 100%;
      height: 400px;
    }

    .imgBox > img {
      width: 100%;
    }

    .ContentBox {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .ContentBox > h1 {
      font-size: x-large;
    }

    .ContentBox > p {
      font-size: 15px;
    }

    .tagsBox {
      width: 100%;
      justify-content: center;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .box {
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    .projectsContainer {
      width: 80%;
      margin: auto;
    }

    .imgBox {
      width: 100%;
      height: 280px;
    }

    .imgBox > img {
      width: 100%;
    }

    .ContentBox {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }

    .ContentBox > h1 {
      font-size: x-large;
    }

    .ContentBox > p {
      font-size: 15px;
    }

    .tagsBox {
      width: 100%;
      justify-content: center;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .box {
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    .projectsContainer {
      width: 90%;
      margin: auto;
    }

    .imgBox {
      width: 100%;
      height: 200px;
    }

    .imgBox > img {
      width: 100%;
    }

    .ContentBox {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }

    .ContentBox > h1 {
      font-size: large;
    }

    .ContentBox > p {
      font-size: 13px;
    }

    .tagsBox {
      width: 100%;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 319px) {
    .box {
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    .projectsContainer {
      width: 90%;
      margin: auto;
    }

    .imgBox {
      width: 100%;
      height: 150px;
    }

    .imgBox > img {
      width: 100%;
    }

    .ContentBox {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }

    .ContentBox > h1 {
      font-size: large;
    }

    .ContentBox > p {
      font-size: 13px;
    }

    .tagsBox {
      width: 100%;
      justify-content: center;
    }
  }
`;
export default Projects;
