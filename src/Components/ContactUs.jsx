import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";


const LeetCodeLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 30 30"><path fill="currentColor" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/></svg>
  );
};
const CodeChefLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 30 30"><path fill="black" d="M11.257.004c-.37.01-.735.04-1.1.095c-.54.054-1.08.325-1.675.595c-.757.324-1.515.649-2.218.703c-1.19.378-1.568.919-1.892 1.351c0 .054-.054.108-.054.108c-.433.865-.487 1.73-.325 2.595c.162.541.378 1.029.54 1.515c.38 1.028.758 2 .92 3.136c.163.325.324.757.432 1.19c.27.865.542 1.838 1.353 2.595l.006-.003c.017.019.03.04.048.057l.021-.01l-.02-.584c.648-.974 1.566-1.623 2.864-1.893c.52-.11 1.081-.15 1.663-.128a8.773 8.773 0 0 1 1.798.236c1.46.378 2.595 1.136 2.65 1.785c.027.354.04.695.032 1.036c0 .064-.004.128-.007.193l.136.068a.639.639 0 0 0 .206-.19l.003-.003l.006-.008c.04-.054.075-.124.11-.194c.02-.037.038-.086.056-.129c.205-.462.362-1.153.538-1.963c.054-.27.11-.487.163-.703c.433-.973 1.027-1.838 1.622-2.65c.973-1.35 1.892-2.595 1.784-4.055c-1.784-3.461-4.272-4.002-5.57-4.272c-.216-.054-.323-.054-.485-.108c-1.338-.244-2.494-.396-3.605-.365M16.3 14.383a9.86 9.86 0 0 0-.032-.983c-.054-.703-1.19-1.46-2.704-1.838a9.536 9.536 0 0 0-1.744-.236a6.761 6.761 0 0 0-1.555.128c-1.244.27-2.216.92-2.811 1.892l.051 1.431c.667-.355 1.733-.874 3.14-1c.065-.005.136-.005.204-.009c.117-.013.266-.044.444-.044c1.607 0 3.268.534 4.877 1.648c.039-.274.06-.549.07-.823l.045.023c.002-.063.014-.127.015-.19zM11.256.058c.124-.004.254.01.379.011c-.23-.002-.459.003-.687.016c.103-.006.205-.024.308-.027M10.44.13c-.076.009-.153.013-.229.024c-.817.117-1.774.701-2.75 1.045c.355-.132.714-.296 1.075-.45c.54-.27 1.135-.541 1.621-.595c.094-.014.189-.013.283-.024m-.229.24c.162 0 .379 0 .541.054a.995.995 0 0 0-.37-.014a1.174 1.174 0 0 1 .316.068c.58 1-.426 5.279-.679 8.149a57.37 57.37 0 0 0 .463 2.72c-.703-1.784-1.406-4.921-1.515-7.354c-.054-.973.001-1.839.218-2.487C9.4.855 9.725.423 10.21.369zm3.136.27c-.81 2.11-.918 6.11-.972 7.354c-.054.54 0 1.73.054 2.595c0 .216.054.432.054.649c0-.217-.054-.379-.054-.595c-.433-3.244-.974-7.136.918-10.002m3.352.379c-.27 2.162-1.405 3.19-1.783 5.3c-.108 1.676-.325 3.622-.379 5.298c-.054-1.676 0-3.46.27-5.245c.27-1.838.865-3.677 1.892-5.353m-10.17.63a.856.856 0 0 1 .6.236l-.014-.007c.133.092.266.209.393.384c-.204.968.255 3.032.04 4.67c.076 1.548.071 3.18.849 4.459c-.98-1.51-1.176-3.437-1.322-5.236c-.113-1.09-.204-2.097-.464-2.903c-.144-.305-.269-.575-.384-.822c-.024-.037-.044-.079-.07-.114a.582.582 0 0 1-.162-.377c0-.054.053-.162.108-.162c.054-.054.161-.056.215-.11a1.013 1.013 0 0 1 .21-.018m-1.347.613c-.06.02-.092.041-.14.061c.177-.034.362.034.52.318c-.188.892.436 3.369.428 5.104c.313 1.848.55 3.85 1.572 5.115c-1.19-1.351-1.676-3.73-2.054-5.731c-.325-1.568-.596-2.92-1.136-3.352c-.054-.108-.108-.163-.108-.271c0-.162 0-.379.108-.595c-.277.634-.405 1.267-.37 1.901a3.844 3.844 0 0 1 .37-1.901c0-.054.054-.054.054-.108c.012-.016.031-.035.044-.051a.878.878 0 0 1 .226-.257c.055-.061.096-.12.159-.182c-.053.056-.088.11-.134.165c.027-.018.052-.037.084-.052a.49.49 0 0 1 .377-.164m-.377.164c-.004.007-.008.01-.012.018l.037-.03zm14.76 1.134l-.005.015c.038-.005.075-.017.113-.015c-.037-.002-.076.01-.115.02c-.863 2.642-1.887 5.284-2.911 7.926a.018.018 0 0 1-.002.003c-.087.465-.234.884-.54 1.19c.433-.487.486-1.191.54-2.056c.054-.811.054-1.676.487-2.542c0-.053.001-.105.053-.159l.001-.002c.097-.353.202-.689.317-1.018c.418-1.29 1.14-3.166 2.013-3.34c.016-.006.034-.019.05-.022M8.374 16.21l-.324.108c.162.217.27.38.378.433a.784.784 0 0 0 .379.108c.054 0 .161 0 .215-.054l.812-.27c.054 0 .108-.054.162-.054c.108 0 .162 0 .27.054l.271.27l.27-.054c-.108-.162-.27-.323-.378-.377c-.108-.054-.217-.11-.379-.11h-.108l-.866.325h-.161c-.109 0-.216 0-.27-.054c-.054-.054-.163-.162-.271-.325m-2.596.541c-.27.162-.649.433-1.19.649c-.54.216-.973.433-1.19.649c-.215.216-.323.432-.323.649c0 .108.054.163.162.217c.054.054.163.054.217.108a27.9 27.9 0 0 1 2.216 1.08c.109.054.217.163.272.217c.054.054.107.054.161.054c.109 0 .27-.053.378-.162c.108-.108.163-.217.163-.325c0-.108-.055-.161-.163-.215c0 0-.433-.217-1.19-.541a11.967 11.967 0 0 1-1.188-.595c.162-.27.486-.487.973-.703c.54-.216.92-.433 1.081-.595c.054-.054.054-.108.054-.162a.412.412 0 0 0-.108-.217a.415.415 0 0 0-.27-.108zm11.247 0a.408.408 0 0 0-.216.108c-.054.108-.109.163-.109.217v.054c.162.162.38.27.704.378c.27.054.54.163.811.217c.324.108.54.27.649.486v.055c0 .054-.109.162-.325.27c-.108.054-.325.217-.595.433c-.27.162-.433.323-.595.377c-.216.109-.378.217-.432.326c-.054.054-.054.107-.054.161c0 .108.054.108.108.216s.162.11.216.11c.054 0 .108-.056.162-.056c.27-.162.65-.378 1.082-.757c.486-.378.865-.648 1.082-.81c.216-.108.323-.217.323-.38c0-.053 0-.161-.108-.215c-.378-.433-.918-.702-1.567-.919c-.108-.054-.27-.109-.595-.163c-.162-.054-.325-.108-.433-.108zm-2.974.81c-.27 0-.487.056-.649.218c-.216.162-.27.432-.216.757c0 .27.108.486.27.703c.162.216.379.325.595.325c.162 0 .27-.056.433-.11c.27-.162.379-.432.379-.918c0-.379-.109-.649-.271-.81a.915.915 0 0 0-.541-.164zm-4.488.055c-.27 0-.486.055-.648.217c-.217.162-.27.432-.216.757c0 .27.107.486.27.702s.378.326.594.326c.163 0 .271-.056.433-.11c.27-.162.378-.432.378-.918c0-.433-.108-.703-.27-.81a.915.915 0 0 0-.54-.164zm0 .65c.163 0 .271.108.271.27c0 .162-.163.27-.27.27c-.163 0-.27-.108-.27-.27s.107-.27.27-.27m4.38.054c.162 0 .271.107.271.27c0 .108-.109.27-.27.27c-.163 0-.27-.108-.27-.27c0-.163.107-.27.27-.27m-2.703 2.108l.162.324a.947.947 0 0 0 .216.271c.054.054.163.162.27.162h.109c.108 0 .161 0 .215-.054c.054-.054.164-.054.218-.108l.161-.162c.054-.054.108-.109.108-.163c.054-.054.054-.108.108-.162c0-.054.054-.108.054-.108c-.054.108-.162.216-.216.324c-.108.054-.161.163-.27.163c-.107.054-.216.054-.324.054s-.216 0-.27-.054c-.108 0-.163-.054-.217-.108l-.162-.163c-.054-.054-.108-.162-.162-.216m-.866 1.028c-1.136 0-1.838 1.514-3.46.162c-.432 2.65 2.758 2.866 4.11 1.73c.92-.81.648-1.946-.65-1.892m2.866 0c-1.297-.054-1.568 1.082-.648 1.893c1.351 1.135 4.54.918 4.108-1.731c-1.622 1.352-2.27-.162-3.46-.162"/></svg>
  );
};
const HackerRank=()=> {
  return (
<svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 0c1.714 0 13 6.516 13.854 8 0.859 1.484 0.859 14.516 0 16s-12.141 8-13.854 8c-1.714 0-13-6.516-13.859-8-0.854-1.484-0.854-14.516 0-16 0.859-1.484 12.146-8 13.859-8zM19.063 9.068c-0.193 0-0.349 0.151-0.349 0.344v5.167h-5.427v-5.37h0.932c0.188 0 0.339-0.151 0.339-0.344 0-0.125-0.068-0.234-0.161-0.292l-2.099-2.010c-0.063-0.089-0.188-0.146-0.302-0.146-0.109 0-0.214 0.057-0.276 0.141l-2.24 2.016c-0.094 0.063-0.161 0.167-0.161 0.292 0 0.188 0.151 0.344 0.344 0.344h0.938l0.010 13.38c0 0.193 0.146 0.344 0.339 0.344h1.99c0.188 0 0.344-0.151 0.344-0.344v-5.339h5.432v5.536h-0.932c-0.193 0-0.344 0.156-0.344 0.344 0 0.125 0.068 0.234 0.161 0.292l2.104 2.016c0.057 0.083 0.188 0.146 0.302 0.146s0.208-0.063 0.276-0.146l2.24-2.016c0.094-0.057 0.161-0.167 0.161-0.292 0-0.188-0.156-0.344-0.344-0.344h-0.938l-0.010-13.375c0-0.198-0.151-0.349-0.339-0.349h-1.99z"/>
</svg>
  );
};




const ContactUs = () => {
  const [submit, setSubmit] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmission = (e) => {
    e.preventDefault();
    if (data.name && data.email && data.subject && data.message) {
      emailjs
        .send("service_ghjulgj", "template_ol3g9zi", data, "XtibhTvyaBmdId37N")
        .then((response) => {
          setSubmit(true);
        })
        .catch((error) => {
          setSubmit(false);
          setData({
            ...data,
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        });
    }
  };

  useEffect(() => {
    let id = setInterval(() => {
      setSubmit(false);
    }, 5000);

    if (!submit) {
      setData({
        ...data,
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Container id="contact">
      <div className="contact">
        <div className="contactText">
          <div>
            <h1>Contact Me</h1>
          </div>
          <div className="middleSection">
            <div>
              <LinkedInIcon fontSize="large" />
              <h1>LinkedIn</h1>
              <p>You can contact me on LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/vijayaprakash-m-3a51a21b4/"
                rel="noreferrer"
                target="_blank"
              >
                <p>Vijayaprakash M</p>
              </a>
            </div>
            <div>
              <GitHub fontSize="large" />
              <h1>GitHub</h1>
              <p>You can collaborate me on GitHub</p>
              <a
                href="https://github.com/Vijayaprakash1709"
                rel="noreferrer"
                target="_blank"
              >
                <p>Vijayaprakash1709</p>
              </a>
            </div>
            <div>
            <LeetCodeLogo fontSize="large" />
            
              <h1>Leetcode</h1>
              <p>View my Leetcode Profile</p>
              <a
                href="https://github.com/Vijayaprakash1709"
                rel="noreferrer"
                target="_blank"
              >
                <p>Vijay1709</p>
              </a>
            </div>

           
            
            <div>
              <PhoneIcon fontSize="large" />
              <h1>Phone</h1>
              <p>My Phone Number</p>
              <a href="tel:+919597996275" rel="noreferrer" target="_blank">
                <p>+919597996275</p>
              </a>
            </div>
            <div>
              <CodeChefLogo fontSize="large" />
              <h1>Codechef</h1>
              <p>View my Profile</p>
              <a href="https://www.codechef.com/users/vijay_m_2003" rel="noreferrer" target="_blank">
                <p>vijay_m_2003</p>
              </a>
            </div>

            <div>
              <HackerRank fontSize="large" />
              <h1>Hackerrank</h1>
              <p>View my Profile</p>
              <a href="https://www.hackerrank.com/profile/vijayaprakash885" rel="noreferrer" target="_blank">
                <p>vijayaprakash885</p>
              </a>
            </div>

            <div>
              <EmailIcon fontSize="large" />
              <h1>Email</h1>
              <p>You can Simply mail me just by clicking on my email</p>
              <a
                href="mailto:vijayaprakash885@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <p>vijayaprakash885@gmail.com</p>
              </a>
            </div>
            <div>
              <LocationOnIcon fontSize="large" />
              <h1>Location</h1>
              <p>Attur,  Tamlinadu</p>
              <a
                href="https://maps.app.goo.gl/LPrp6McS6yGGxpBw8"
                rel="noreferrer"
                target="_blank"
              >
                <p>View on Google map</p>
              </a>
            </div>
          </div>
        </div>
        {submit && (
          <>
            <div className="emailSent">
              <h1 style={{ color: "#01a479" }}>Email Sent Successfully.</h1>
              <p>
                Thank you{" "}
                <span style={{ fontWeight: "bold" }}>{data.name}</span>, your
                message has been submitted to us.
              </p>
            </div>
          </>
        )}
        <div className="contactForm">
          <form action="" onSubmit={handleSubmission}>
            <div>
              <input
                value={submit ? "" : data.name}
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <input
                value={submit ? "" : data.email}
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <input
                value={submit ? "" : data.subject}
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={(e) => setData({ ...data, subject: e.target.value })}
              />
            </div>
            <div>
              <textarea
                value={submit ? "" : data.message}
                type="text"
                name="message"
                placeholder="Your Message"
                onChange={(e) => setData({ ...data, message: e.target.value })}
              />
              <div>
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="endSection">
        <p>
          © 2024 Vijay. Design by Me with{" "}
          <FavoriteIcon sx={{ color: "#01a479" }} />
        </p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background-color: white;
  .contact {
    width: 85%;
    margin: auto;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .middleSection {
    display: flex;
    justify-content: space-around;
  }

  .middleSection > div {
    padding: 10px;
  }

  .middleSection > div > h1 {
    font-size: x-large;
    margin-top: 0px;
  }
  .middleSection > div p {
    margin-top: 0px;
  }

  .middleSection > div a {
    text-decoration: none;
    color: #01a479;
  }

  .contactForm > form {
    display: flex;
    gap: 10px;
  }
  .contactForm > form > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
  .contactForm > form > div > input {
    width: 95%;
    padding: 5px 5px 5px 15px;
    border: 1px solid #e9ecef;
    border-radius: 8px;
  }

  .contactForm > form > div:first-child > input {
    height: 30px;
    margin-bottom: 30px;
  }

  .contactForm > form > div:last-child > textarea {
    width: 95%;
    height: 175px;
    margin-bottom: 30px;
    position: relative;
    padding: 5px 5px 5px 10px;
    border: 1px solid #e9ecef;
    border-radius: 8px;
  }

  .contactForm > form > div:last-child > input::placeholder {
    position: absolute;
    top: 15px;
  }

  .contactForm > form > div:last-child > div {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: right;
  }

  .contactForm > form > div:last-child > div > button {
    background-color: #01a479;
    color: white;
    border: none;
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    cursor: pointer;
  }

  button:hover {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .endSection {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    background-color: black;
    color: white;
    margin-top: 20px;
  }
  .endSection > p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .emailSent {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .emailSent > h1,
  .emailSent > p {
    margin-top: 0px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1120px) {
    .middleSection {
      flex-direction: column;
    }

    .contactForm > form {
      flex-direction: column;
    }

    .contactForm > form > div {
      width: 70%;
    }

    .contactForm > form {
      align-items: center;
    }

    .contactForm > form > div:last-child > div {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 10px;
    }

    .contactForm > form > div:last-child > div > button {
      width: 100%;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .middleSection {
      flex-direction: column;
    }

    .contactForm > form {
      flex-direction: column;
    }

    .contactForm > form > div {
      width: 80%;
    }

    .contactForm > form {
      align-items: center;
    }

    .contactForm > form > div:last-child > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 10px;
    }

    .contactForm > form > div:last-child > div > button {
      width: 100%;
    }

    .emailSent > h1 {
      font-size: x-large;
    }

    .emailSent > p {
      width: 80%;
      font-size: small;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .middleSection {
      flex-direction: column;
    }

    .contactForm > form {
      flex-direction: column;
    }

    .contactForm > form > div {
      width: 80%;
    }

    .contactForm > form {
      align-items: center;
    }

    .contactForm > form > div:last-child > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 10px;
    }

    .contactForm > form > div:last-child > div > button {
      width: 100%;
    }

    .endSection > p {
      font-size: 15px;
    }

    .emailSent > h1 {
      font-size: large;
    }

    .emailSent > p {
      width: 70%;
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 320px) {
    .middleSection {
      flex-direction: column;
    }

    .contactForm > form {
      flex-direction: column;
    }

    .contactForm > form > div {
      width: 70%;
    }

    .contactForm > form {
      align-items: center;
    }

    .contactForm > form > div:last-child > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 10px;
    }

    .contactForm > form > div:last-child > div > button {
      width: 100%;
    }

    .endSection > p {
      font-size: 10px;
    }

    .emailSent > h1 {
      font-size: small;
    }

    .emailSent > p {
      width: 70%;
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 319px) {
    .middleSection {
      flex-direction: column;
    }

    .contactForm > form {
      flex-direction: column;
    }

    .contactForm > form > div {
      width: 80%;
    }

    .contactForm > form > div:last-child > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 10px;
    }

    .contactForm > form > div:last-child > div > button {
      width: 100%;
    }

    .endSection > p {
      font-size: 8px;
    }
  }
`;
export default ContactUs;
