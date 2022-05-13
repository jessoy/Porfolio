import React from "react";
// import Pdf from "../";
import "./cv.scss"

const CV = () => {
  return (
    <div className="cv">
      <div>
        <h2>Jessica Clements CV</h2> <h3>Web Developer</h3>
        <p>07875 202818 | jessie_clements@hotmail.com | linkedIn | London</p>
        <p>
          <span>Developer Portfolio:</span> jessieclements.co.uk{" "}
        </p>
        <p>
          <span>Objective:</span> Actively seeking a Junior Full-Stack Developer
          role.
        </p>
        <p>
          I combine professional-grade software engineering with the detail
          oriented, rigorous and technical approach of an architect.
        </p>
      </div>

      <div>
        <h3>Technical Knowledge</h3>
        <p>
          Developing and deploying <span>full-stack web applications </span>and
          websites using:
        </p>
        <ul>
          <li>
            <p>
              <span>HTML5:</span><br /> including accessibility best practices.
            </p>
          </li>
          <li>
            <p>
              <span>CSS 3: </span><br />Responsive design, Flexbox & CSS Grid, SASS,
              CSS Modules and CSS frameworks.
            </p>
          </li>
          <li>
            <p>
              <span>JavaScript:</span><br /> ES6+, AJAX, API’s - REST and GraphQL,
              Animation (Greensock & Three.js), Graphing (d3.js) & Realtime
              (websockets and socket.io), TypeScript, Cypress, Jest, Webpack,
              OAuth.
            </p>
          </li>
          <li>
            <p>
              <span>React:</span><br /> hooks, context, Material UI.
            </p>
          </li>
          <li>
            <p>
              <span>Node.js:</span><br /> Vanilla & Express.
            </p>
          </li>
          <li>
            <p>
              <span>Databases: </span><br />SQL - Postgres, NoSQL - MongoDB with
              Mongoose.js, Redis, Firebase.
            </p>
          </li>
          <li>
            <p>
              <span>DevOps: </span><br />Docker & Kubernetes, Heroku (inc. pipelines),
              serverless (inc. Netlify).
            </p>
          </li>
          <li>
            <p>
              <span>Design & Manufacturing:</span><br /> Adobe Creative, 2 & 3d
              drawing software, CAD/CAM, laser cutters, 3D printer, CNC
              machining
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3>EDUCATION </h3>
        <ul>
          <li>
            <p>
              <span>Full-Stack Software Engineering Training</span> <br />
              The Jump
              Digital School, London Jan 2022 - Apr 2022
            </p>
          </li>
          <li>
            <p>
              <span>University of Westminster,</span> London <br />RIBA Part III
              Professional Practice Sept 2019 - Sept 2020
            </p>
          </li>
          <li>
            <p><span>University of Westminster,</span> London <br />MArch Architecture (Distinction) Sept 2016 - June 2018</p>
          </li>
          <li>
            <p>
              <span>Bartlett School of Architecture,</span> UCL, London <br />BSc
              Architecture Sept 2010 - June 2014
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3>PROFESSIONAL EXPERIENCE</h3>
        <ul>
          <li>
            <p>
              <span>Piercy and Company Architects</span> Apr 2021 - Sept 2021<br />
              Architect, London
            </p>
          </li>
          <li>
            <p>
              <span>Guys and St Thomas Hospital</span> Dec 2020 - Mar 2021<br />
              Vaccinator, London
            </p>
          </li>
          <li>
            <p>
              <span>Holland Harvey Architects</span> (HH) Aug 2018 - Dec 2020<br />
              Architectural Assistant, London
            </p>
          </li>
          <li>
            <p>
              <span>ECOstudio XV </span>Sept 2015 - Apr 2016 <br />Sustainable Design
              Consultant, Mexico City
            </p>
          </li>
          <li>
            <p>
              <span> Penoyre & Prasad Architects</span> Jun 2014 - Sept 2015<br />
              Architectural Trainee, London
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3>ADDITIONAL INFORMATION</h3>
        <p> I have the right to work in the UK</p>{" "}
        <p>Immediately available for interview</p>{" "}
        <p>References available on request</p>
        <p> GB representative at 2022 Ultimate Frisbee World Championships</p>
      </div>
    </div>
  );
};

export default CV;
