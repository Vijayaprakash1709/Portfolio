import React from "react";
import styled from "styled-components";
import html from "../Resources/Images/LanguageImages/html5.png";
import css from "../Resources/Images/LanguageImages/css3.png";
import bootstrap from "../Resources/Images/LanguageImages/bootstrap.png";
import chakraui from "../Resources/Images/LanguageImages/chakraui.png";
import materialui from "../Resources/Images/LanguageImages/materialui.png";
import json from "../Resources/Images/LanguageImages/json.png";
import java from "../Resources/Images/LanguageImages/java.png";
import linux from "../Resources/Images/LanguageImages/linux.png";
import firebase from "../Resources/Images/LanguageImages/firebase.png";
import heroku from "../Resources/Images/LanguageImages/heroku.png";
import js from "../Resources/Images/LanguageImages/js.png";
import git from "../Resources/Images/LanguageImages/git.png";
import mongodb from "../Resources/Images/LanguageImages/mongodb.png";
import nodejs from "../Resources/Images/LanguageImages/nodejs.png";
import react from "../Resources/Images/LanguageImages/react.png";
import reactredux from "../Resources/Images/LanguageImages/redux.png";
import mern from "../Resources/Images/LanguageImages/mern.png";
import postman from "../Resources/Images/LanguageImages/postman.png";
import netlify from "../Resources/Images/LanguageImages/netlify.png";
import backgroundImage from "../Resources/Images/b.avif";

const Skills = () => {
  const skills = [
    {
      img: html,
      title: "HTML",
    },
    {
      img: css,
      title: "CSS",
    },
    {
      img: bootstrap,
      title: "Bootstrap",
    },
    {
      img: js,
      title: "Javascript",
    },
    {
      img: git,
      title: "Git/Github",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1400/1*Dv3YLvmgkEwI_ZKPgw-Riw.png",
      title: "MS Office",
    },
  
    {
      img: react,
      title: "ReactJS",
    },
    {
      img: "https://editor.analyticsvidhya.com/uploads/339361_iDQvKoz7gGHc6YXqvqWWZQ.png",
      title: "Tensorflow",
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/270px-Keras_logo.svg.png",
      title: "Keras",
    },
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAA5FBMVEX///+mpqYlLz//mgCioqKtra34+PigoKCdnZ2oqKiqqqr/mAD/jgCbm5v7+/skLj/Kysq4uLjq6ur/lADDw8O8vLzPz88ADSbm5ubg4OCzs7Pa2trw8PAZJTcUITT/kgAAACAMGi4AABwAFSsrNEOeoac7Qk4ACiVpbnZ3e4OMkJaRlZt0eYAOHTAAACKFiI8AABNZXmgAAApLUFs2Pkv/+Ov/89//wHz/oTX/zpr/s2P/4b3/rVP/58j/xon/u3JcYWv/2a7/8uL/iAD/qUr/nyn/5MT/xYj/7NT/1af/pTH/q0Fb3t36AAANhElEQVR4nO1daUPazBrFmAQIkI0sZGWJCNYi7avVilprK9a2////3JlAgEkCZrJA7J3zSYQsc+bZZ6tUCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICN4TWLvTMSA6ss0f+mX2Dda2RNU8oqu1APQRo4qWzB76zfYD1lAYulqt0kch0IASmlEt+9BvWDBkkatFW48wUa0dKZ1Dv2dhkJWj1s72r3hoVf9JGniNqSUiYElDjRP/MeNgK7VqcgICGiT50O+dH2w1mQ5EWGiZ/wgLrIqjBCHUzH/BTYgZGPBZUN+7XTBobDsQBl2zDt2KLABqkJUBXxTesUIYdDY12GBBO3RbUkJpvd24uo8EJJjv0SqwzE5LwHGcqariEqpicnVu1+/po/fnJuXtloAGzQc5Io+kyzxvW5rJcdu1p/XeTKO1VQ84STS2yjXf0aRt4lBvKftsQWaIW6SgboryW9USWTO3GIiatJeXzwdKLAU0J1mJykV8R43XiapZ9JvnBjXWGnIKhlWzFSaWRqa4t84VsYERFgMQthhnGN4JCbGKYKaoichqjF2g34M6xJlDJmWYZ5nRe1XLbxitGArU1OE+q0RFoSbm+b4FQI7GBZyWZezAinqIkgdLbFQKGCPbLeWIPtRbS/PK27Yty7ZdrlQi6tCkzGkvq0a1S7YUqb4eoqkemYpmlCPBFiOBQS5FICXCQXSIBhBS5VTr4CLRiRgDJZ9hRDEqCbEARHDaYcUhIgW5JTlJSYAi0jKTReSFQAnJJ52TFEBgkAC859Ghxmc6YZ8g5dkdUZuwC3TtMCyEw/ucq18x3mE3CwcoQWohMWBytk22iVmgrdYzRib4CPmEeu7BnL2z3hiHmrpf4yiGeqmAoN5KUH9GQVf3OYTPhvxirvYwAJ5d9NHaY4IVEgOukEK4HZNKv4X9ld/CYlCQTbbCLUwwQkPTewocNZQDsyhbtHaQXJ2RVFFUNFERFdWsc9upqO1ndAbVhOKckrzwDQwjWvbmGA3LGpq0dYBmLyQYaGxQYLULxMzctul7rKFsGZlo7cE9oLaqXuATbVPb1amsJcWy0CpcEkLVI7XQZ731AyOWhWrRhhG1iPsPUUMwYl1owSEj+szDDwDwWrSmV/C4BBoc1MswZSQmmiq2JI8OKXAHL+n5ECNWoVakjkrIo8oyScCKpJl0gb1TLou4QidsFOjiHBY6tMSUQxUgIiQUFyqhnrHQ4AATERKOinoSWugr1VhgJ2QYq8X4LBatejO7g1JDHX6YnjMpir6sOJx+nA4xZ3KES0/VAjRVlkKz8ndlzdqZMBh5E3fi9S7GC3npTE5OqLX6DIUT6mqttOfg4+fFc85Gvb7jOP3R4HSI047QuASdu9eyzcic9O0po3HZcwUqgNMb+ncYCIJzubqfIwhCf7r62ANf+hwo7mR1pTC6jN58OyT0DWv5CgIfN+9oezD2wQPv73qj0chzYFsGPl2XgBY9yGcsHbKzaqIyoiiPA39on8CvHE+HADz2cNoRqkbTuUaLRtz6NG67SfzQ73uXZ5JmadKZC1nwYFOGgBk9UAb4ATQ2oGTqgh8BzWChEPQ/S1anYynTU/0/rL7UQhYhXWtjET8rn9nugc/d81X41DmF3Q+zGAP0tRtI/9gXED0w3pSwEApIzeQ8uJZXzis44NEwtpqb42Lr8WWr+o40fdNaQqn3VZ0HbAjC8r+OQJ2AHh8uPsmDZdMhNZP072qgviGv/DFm1tGSg6R3AHZAoOAfH4Cgf1o4PKNHTYangvN98RMJ8KRD0bl0KOEqw9uqSH/V8qmmGFvnpCeeQfkR9i3Ua01fGQRTp3Tru0M5fPCTRdPBvxbGIyU6iFnMJ06Km363ROJqKrB3wgT2CA+1/qP/P9BoF8rFxUJlr4SlpZgCUXG+Z6gDocUELv2NVjBa20v5iTn4ADjo+1I5Xkk6MAyXUC58f1gxgCUc+GwYF9BbeMPUdVE0WmxlV4ZtizO4uqkqb8iZNjwbj0HEK9prDvwoAKp9R4fm0J5QC4PAeCtLOIU+U+jrn4fpEnMWyZ2yL5MLj6r5oDlGNNi3pFW60vuu47huX3dOqIADFph/DxprRacGgEPgKFz4f6gZZ8srv48WwWXfOz1P04voYG1mzxCnB0ySVer8eACCAgFQ4IKQmFpxUPkMGgsNwplD6byvJQNjYSdGq6Bu6CyCS3DRJ7zwwAeaP9L4N0CgRMWAExN1zRgKtH4ynk6nHy8dd80BEHrhiofu0o+IlB7lAbNiXQDzsHYGNvfd0xc06N+x35pFrGJG7xiZdwXMYDJTpQKRF/QgreTX9qAiA0EfdSqyK/RhF9s9309wHuWMkTvY0vhChwKk40sCUuOoZir38VEhSOptYXTsrTPX4WTFAYyBdKYigujAl/0rQTj1NcSL1qTMEz/TwO5IZNA+W94UmYubeEK2DLPGjaR3Qw4q5xPY5ed9yg8YYOjQ71RgHhEjYayfaGI3wtj0DHSWMWE2HCIn357ATxA+rj/DHCDgAH7ngo5fZs0gRvYUa0AJn+NuBMRllVEkB5pBZ1kPpIYSJYyl2CEObAp2Z+BNQEQ4sFxhmT/KOkiVmD7lxb4qSCq2fLMTiGOopw+87fAMRIzADXKwoQsw/KVGQbAyhaGAS+kLcwFSSWcM5GQQe3vT28iukwNJoOn0I/FKhtkmvG/LApt4BgtG65qACPrWWdRL/G+BrQBp5enyW3Y8XMtb5wQIUB+/H3NyDGxIE/A6AzQMdOBQ5llrKEwEGCUJJ0FbLvzwJ8iPTb+c5AVKL+sgSq5rHZaVtakHrhthm4NQNYlOHS1biFPANa72CLr2fs/Te33KObGvYGOCcoNfQFqZC8Pn4CLoLOhSHK93MdIveq5fVUvx8tqmQaBTp8/ooA2HO24lDpygMnxxKVfET5TrBv0h9YDs91asQoPpnK6u/DwQ1gVpYTBOY9EQDlKXEGzUMeKPqRmXPc913P7oxDfr5/+tG8Ofgi9WmlEZjlxX38hspEtPnzgArje6SjdCoHF5cIAOK6aaiGoNp2fTYdD5iCCxyG4ILBtKQm3xHGTd47PUi+Ty0QW0GFOmodUkQGxi6toyGiaXZpZBQoh5cICWj97dDi1ojJRyHoJV2lkGiYBqcsoCAhokHnCWwZfr6y/4VyH5QtrKMiJMO4bUisSXp9m83QTozm9+YF0pI8FN2oIichMOr9h/d5fyoQh+zNrdduPYR6P7FetaYzM8SDs3i0eTT7yLZz+fX9M9dgO3P5tLdAERjTmWQiDLbNKGB2jChFuImTWb99fpHrzCzc3vu4fX6+vr17uvDcABligimpx2OUM2Dirfmu3mLLssLPGle9x4xrnARgdZUjp2dGgFvyD31Gy0u/cv6R4eQeO4/Yjze3QdFKYmr5CVg8qPOei8ZuN3Cr+2gbvn9rUvB90nnMuQCkrqeVmoLqQyrDdNoMbd7iy1MFx/mzcbP28rlZfmcROHSxsx6LW0jp1FpCmdg31od4Fba3fnjw/4F1/f/oWesTkDf39rN/7iXItO0KulHsVHitNpNQqKAvBr7WZ79oTTkQ9AAqBHbDf8SOP4uIkTcfDo1LT0owtIwM2lHbF7fW4uopxGs/v15unH20R8eb2dNZp+bNRo3vi/f2025jgPRWemZZiUhYwtZNjv52XeDGK9drc7v795et1GxPXD7ewv+FHA2v3Suf5qY4kBOuCaZRUDuqA5y5yeu68BC6BhgAgg5X/ub25/P4EQCOLh7un3t8dnmBm0G8Ev283nlRGZt2c4z0PFIMsiBnQeVrZVnC/33e7xJiAV3eYa3e669X520N4IsF6aWJqAxkeZ1ryig0xZN7n48Q3o+HEiAAs6v91Ul+cuVs4Y2kMk04ws9FbZJ7i9PC5N3a72QwJ+hWLsO6wwKzRVN9vCLrSIksvK9odfz9DkxRMB1aNxf5sxyZBDS1nSevUFUIOQ13YnX15uZ3NgCqABWAHYyWb7z+PvrR4jMVh0snLm9X2hLQ6yvt4G+Ne7379m93//zOfzP3/vH789vWTNtJcI7x6SdSfS0OyDMixnfQthClKnCgFC87FwZh8cCOENxjJNwlkgtHC09PX1yB5rreyG3ArNyCrLqt4tiOwklMtZFuF1G2U2CXZkf7UcNKES3RIt//3AckMnuvi/ms8uEOHJyvWSbvPLRvforue1JUp0qm6O20Tmh7jNQPI72CY8QxFkkKU7WC12i/Jqfgacjy5n45RSjcPHH1uQjz0MHhGzkIc58Fa2a9hW/CkeOW8IE3vCBqMYh7cLsqXGntlQwIEFUtzqTprjVMuyefYQ4FnZ0lRuCwGFbB/IbNmZrc4dccxBcMTt2ma0VkBQH13IUWoUs5Mmv+MQpdKhqF2R+N1HcJUI1dSjQW9DyuU8vsJR7KlW4fSpjKgWfcSbfFRyo0AXtBHQJvgkRxMeDHRrPyG8zZRVIeha+qOAcGFgnVu9L+z7+IWO2SqXn6zVzP3nLqxWf+MY+72BrtHmoU6lASlrvQqIOBQTNF2Fp/JIO7cdLh4829EUkwGvs2+AXM1URUsuVSWHgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4P8Z/wOkagi0k1YBxQAAAABJRU5ErkJggg==",
      title: "AWS",
    },
   
    {
      img: materialui,
      title: "Material UI",
    },
    
    {
      img: postman,
      title: "Postman",
    },
    {
      img: "https://media.licdn.com/dms/image/D5612AQEHGZUx2evvxg/article-cover_image-shrink_600_2000/0/1688275415052?e=2147483647&v=beta&t=MiibYoaOd8k3EYKJGp_zBmSoyV_tklwOItiTYILUXKI",
      title: "C",
    },
    {
      img: "data:image/png;base64,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",
      title: "C++",
    },
    {
      img: java,
      title: "Java",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
      title: "Python",
    },
    {
      img: mongodb,
      title: "MongoDB",
    },
   
    {
      img: nodejs,
      title: "NodeJS",
    },
    {
      img: linux,
      title: "Linux",
    },

    {
      img: mern,
      title: "MERN",
    },
  ];

  return (
    <Container id="skills">
      <h1>Skills</h1>
      <div className="skillsContainer">
        {skills.map((ele, index) => (
          <div key={index}>
            <img src={ele.img} alt={ele.title} width="70px" height="70px" />
            <p>{ele.title}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: auto;
  background-image: url(${backgroundImage});

  h1 {
    color: #01a479;
    text-transform: uppercase;
  }

  .skillsContainer {
    
    width: 85%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, max-content));
    justify-content: center;
    padding: 30px;
    gap: 20px;
  }

  .skillsContainer > div {
    background-color: white;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 20px 0px 10px 0px;
    border-radius: 10px;
  }

  .skillsContainer > div:hover {
    -webkit-transform: translateY(-20px);
    transform: translateY(-15px);
    -webkit-transition: all 0.3s;
    transition: all 0.4s;
  }
`;

export default Skills;
