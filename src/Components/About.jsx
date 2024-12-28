import DownloadIcon from "@mui/icons-material/Download";
import React from "react";
import styled from "styled-components";
import myImage from "../Resources/Images/profilePic.jpg";
import backgroundImage from "../Resources/Images/backgroundHome.jpg";
import signature from "../Resources/Images/signature.png";

const About = () => {
  return (
    <div id="about" >
      
      <Container style={{width:'100%',minHeight:'300px',height:'auto'}}>
        <div className="aboutBox" style={{marginTop:'10px'}}>
          <div className="about_leftBox" style={{width:'100%',marginTop:'50px'}}>
            <h1 style={{color:'Yellow'}}>Hi, I'm Vijayaprakash M.</h1>
            {/* <p>
              An enthusiastic Computer Science and Engineer with a strong set of
              technical  as well as non-technical skills and a dedication towards
              creating useful and interactive web applications.
            </p> */}
            <p style={{color:'white'}}>
            A B.E graduate in the field of Computer Science and Engineering interested in programming and problem solving .And quite interested in playing chess . Proficient at problem solving in C++ . Knowledge about Data structures and Competitive programming. 

And I have secured global rank 1 for two times in Codechef long challenge (Jun and jul 2022) . solved about 250 + problems in leetcode and 100 + problems in Codechef . 1571 rating(max) in Codechef , 1518 rating (max ) in leetcode and 5 star in hackerrank .

Looking forward for SDE intern roles and open to new challenging experience and learning new skills.
            </p>
            <a href="https://drive.google.com/file/d/1L9LB6GWE7l5IPemPcwPM9DLvVYKEjpvA/view?usp=sharing">
              <button>
                Download CV
                <DownloadIcon />
              </button>
            </a>
          </div>
          <div style={{height:'10px',marginTop:'10px'}}></div>
          <div className="about_rightBox" style={{marginTop:'150px'}}>
            
            <div style={{marginBottom:'30px',border:'2px solid white'}} >
             
              <img  src={myImage} alt="" width="100%" />
            </div>
          </div>
        </div>
      </Container>
      <AboutMeWrapper>
        <div className="aboutSection">
          <div className="left">
            <h3>Personal Details</h3>
            <p></p>
            <p>
              Email: <span>vijayaprakash885@gmail.com</span>
            </p>
            <p>
              Language: <span>English, Tamil</span>
            </p>
            <p>
              Nationality: <span>Indian</span>
            </p>
          </div>
          <div className="right">
            <h2>
              Hi, I am <span>Vijayaprakash M</span>
            </h2>
            <p>
              I am from <span>Salem ,TamilNadu (India)</span>. I have completed
              my bachelor's in{" "}
              <span>Computer Science and Engineering</span> from  &nbsp;
              <span>
                Muthayammal Engineering College ,Rasipuram
              </span>
              <br></br>
              <b> EDUCATION :</b>
              
                <br>

               </br>
               <li>
 BACHELOR OF ENGINEERING IN COMPUTER SCIENCE AND ENGINEERING
MUTHAYAMMAL ENGINEERING COLLEGE, RASIPURAM (AUTONOMOUS )	2021 - 2025
                              	9.3 CGPA (Pursuing)
                                </li>
                                <br></br> 
                                <li>
HSC 
RASI MATRIC HIGHER SECONDARY SCHOOL, MALLIAKARAI. 
         .                                                                  (92%)     2019 – 2021
         </li><br></br> 
         <li> 
         SSLC 
RASI MATRIC HIGHER SECONDARY SCHOOL, MALLIAKARAI.	.                                                                 (90.4%)   2018 – 2019 
</li>
            </p>
            
            <div>
              <img src={signature} alt="Vijay_Signature" width="200px" />
            </div>
          </div>
        </div>
      </AboutMeWrapper>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${backgroundImage});
  a {
    text-decoration: none;
  }
  .aboutBox {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about_leftBox {
    width: 50%;
    text-align: left;
    padding: 10px;
  }

  .about_leftBox > h1 {
    font-size: 30px;
    line-height: 10px;
  }

  .about_leftBox > p {
    color: #8492a6;
    font-size: 17px;
    font-weight: 500;
  }

  .about_leftBox button {
    padding: 12px 20px 12px 20px;
    border-radius: 10px;
    border: 2px solid #01a479;
    background:rgb(132, 9, 48);
    color: white;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    font-size: 15px;
  }

  .about_leftBox button:hover {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .about_rightBox {
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
  }

  .about_rightBox > div {
    width: 250px;
    height: 250px;
    margin: auto;
    border-radius: 100%;
    background-color: white;
    overflow: hidden;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    height: 450px;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
      gap: 0px;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 17px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 60%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 200px;
      height: 200px;
      margin: auto;
      border-radius: 100%;
      background-color: white;
      overflow: hidden;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    height: 450px;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 17px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 200px;
      height: 200px;
    }
  }

  @media only screen and (max-width: 320px) {
    height: 450px;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 15px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 150px;
      height: 150px;
    }
  }

  @media only screen and (max-width: 319px) {
    height: 450px;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 15px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 150px;
      height: 150px;
    }
  }
`;
const AboutMeWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
  .aboutSection {
    width: 80%;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    gap: 10px;
  }
  .left {
    width: 30%;
    text-align: left;
    background-color: #f8f9fa;
    padding: 5px 15px 5px 15px;
    border-radius: 10px;
  }

  .left > p {
    font-size: small;
    font-weight: bold;
  }

  .left > p > span {
    color: #707070;
  }

  .left > h3 + p {
    margin-top: 0px;
    border-top: 1.5px dashed #d4dae1;
  }

  .right {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 10px 0px 10px;
  }

  .right > h2 {
    width: 100%;
    margin-bottom: 0px;
    font-size: 20px;
    text-align: left;
  }
  .right > h2 > span {
    color: #01a479;
  }
  .right > p > span {
    color: #01a479;
  }

  .right > p {
    text-align: left;
    margin-top: 5px;
  }

  .right > div {
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    margin-top: -10px;
  }

  .right > div > img {
    margin-left: -15px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1110px) {
    .left {
      width: 35%;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
    }

    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }
    .right > p {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
    }

    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }

    .right > h2 {
      font-size: 17px;
    }

    .right > p {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 320px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
    }

    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }
    .right > h2 {
      font-size: 16px;
    }

    .right > p {
      font-size: 13px;
    }
  }
`;
export default About;
