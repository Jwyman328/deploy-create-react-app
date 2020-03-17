import React from "react";
import smallMainPhoto from "../../images/smallMainSide.png";

function About(props) {
  return (
    <div className="aboutContainer">
      <div>
        <img className="aboutPhoto" src={smallMainPhoto} />
      </div>
      <div className="aboutTextContainer">
        <h2>Joseph Wyman</h2>
        <h3>Full Stack Web Developer</h3>
        <p>
          Hi, I'm Joe a passionate self-taught web developer on a journey to
          never stop learning. My passion for learning isn't only seen in 
          my development but throughout many aspects of my life,
          including foreign language (spanish), and music (guitar,
          keyboard).
        </p>
        <p>Main Focuses: Web Applications, REST APIs</p>
        <div className="aboutEducation">
          <h4>Education</h4>
          <p>Masters: Economics </p>
          <li className="university">
            University of Rey Juan Carlos, Madrid, Spain{" "}
          </li>
          <p>Bachelors: Economics & Entrepreneurial Studies</p>
          <li className="university">
            Framingham State University, Massachusets, USA
          </li>

        </div>
        <div className="aboutEducation">
          <h4>Langauges</h4>
          <p>English: Native Speaker </p>
          <p>Spanish: Fluent</p>
        </div>
      </div>
    </div>
  );
}

export default About;
