import "./projects.scss";
import "../images/readEasy.jpg";
import readEasy from "../images/readEasy.jpg";
import findSparks from "../images/findSparks.jpg";
import svgAnimation from "../images/svgAnimation.jpg";

const Projects = () => {
  return (
    <>
      <div className="project">
        <div className="container-left">
          <div className="tech">React | Node | Redux | SQL | SCSS</div>
          <div className="name">
            <h2>Find Sparks Dating App </h2>
          </div>
          <div className="three">
            <p>
              A live dating app! Cool features include: login and registration,
              bespoke matching and sorting algorithm, messaging functionality,
              and capturing a user selfie on sign-up.
            </p>
            {/* <p>
              Security features included to prevent SQL injection, supports
              multi-device login and more! Created as a group of 4 in six weeks.
            </p> */}
          </div>
        </div>
        <div className="container-2 four">
          <img src={findSparks} alt="" />
        </div>
        <div className="container-3 five">
          <a
            href="https://find-sparks.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            view the project
          </a>
        </div>
      </div>

      <div className="project">
        <div className="container-left">
          <div className="tech">React | GSAP | HTML | SCSS</div>
          <div className="name">
            <h2>Read Easy - Learn to Read </h2>
          </div>
          <div className="three">
            <p>
              A hackathon challenge with the brief to help children learning to
              read. Features text-to-speech functionality.
            </p>
          </div>
        </div>
        <div className="container-2 four">
          <img src={readEasy} alt="" />
        </div>
        <div className="container-3 five">
          <a
            href="https://read-easy.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            view the project
          </a>
        </div>
      </div>

      <div className="project">
        <div className="container-left">
          <div className="tech">
            <h4>Vanilla JS | DOM Manipulation</h4>
          </div>
          <div className="name">
            <h2>Weather App </h2>
          </div>
          <div className="three">
            <p>
              A weather forecasting application that uses the Geolocator in the
              browser navigation and API data to returns weather and sunset data
              based on either a users location or on a location inputted by the
              user.
            </p>
          </div>
        </div>
        <div className="container-2 four">
          {/* <img src={weatherApp;} alt="" /> */}
        </div>
        <div className="container-3 five">
          <a
            href="https://weather-app.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            view the project
          </a>
        </div>
      </div>

      <div className="project">
        <div className="container-left">
          <div className="tech">
            <h4>React | Redux | HTML | SCSS</h4>
          </div>
          <div className="name">
            <h2>Simpsons API </h2>
          </div>
          <div className="three">
            <p>
              An app retreiving characters and their quotes form an API with the
              functionality built in to like and delete characters, with an
              up-to date count.
            </p>
          </div>
        </div>
        <div className="container-2 four">
          {/* <img src={weatherApp;} alt="" /> */}
        </div>
        <div className="container-3 five">
          <a
            href="https://simpsons-api.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            view the project
          </a>
        </div>
      </div>

      <div className="project">
        <div className="container-left">
          <div className="tech">
            <h4>HTML | SCSS</h4>
          </div>
          <div className="name">
            <h2>Nowness Homage Piece </h2>
          </div>
          <div className="three">
            <p>
              A replica web page built in HTML and to professional standard.
              Includes drop-down menu created in SCSS.
            </p>
          </div>
        </div>
        <div className="container-2 four">
          {/* <img src={weatherApp;} alt="" /> */}
        </div>
        <div className="container-3 five">
          <a
            href="https://nowness.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            view the project
          </a>
        </div>
      </div>

      <div className="project">
        <div className="container-left">
          <div className="tech">
            <h4>HTML | SVG | CSS</h4>
          </div>
          <div className="name">
            <h2>SVG Animation </h2>
          </div>
          <div className="three">
            <p>
              A short challenge set to produce an animation using only SVG's and
              keyframe animations in CSS.
            </p>
          </div>
        </div>
        <div className="container-2 four">
          <img src={svgAnimation} alt="" />
        </div>
        <div className="container-3 five">
          <a
            href="https://svg-animation.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            view the project
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
