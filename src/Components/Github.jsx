import React from "react";
import styled from "styled-components";
import github from"../Resources/github.png";
import leet from"../Resources/leet.png";
import hack from"../Resources/image.png";
import GithubCalendar from "react-github-calendar";
const Github = () => {
  return (
    <MainContainer style={{ marginTop: "-20px" }}>
    
      
      <h1 style={{ color: "#01a479", textTransform: "uppercase" }}>
        My Statistics
      </h1>
      <div className="stats" style={{display:'flex',flexDirection:'column'}}>
        <h1>Github</h1>
        
        <img
          align="center"
          src={github}
          alt="vijayaprakash1709"
        />
         <h1>Leetcode</h1>
        <img
          align="center"
          src={leet}
          alt="vijay1709"
        />
        <h1>Hackerrank</h1>
        <img
          align="center"
          alt="hackerrank"
          src={hack}
        />
      </div>
    </MainContainer>
  );
};

const Container = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  flex-direction: column;
  border: 10px solid #01a479;
  border-radius: 50px 5px 50px 5px;
  padding: 30px 10px 30px 10px;
`;

const MainContainer = styled.div`
  .stats {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    border-radius: 50px;
    margin-bottom: 50px;
  }

  .stats > img {
    padding: 20px 10px 20px 10px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1110px) {
    .stats {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .stats {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .stats {
      width: 90%;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 319px) {
    .stats {
      width: 90%;
      flex-direction: column;
    }
  }
`;

export default Github;
