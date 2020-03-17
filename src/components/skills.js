import React from "react";
import JsLogo from "../logos/js.png";
import SkillsElement from "./skillsElement";
import DRFLogo from "../logos/djangoREST.png";
import DjangoLogo from "../logos/django.png";
import DjangoSvg from "../logos/django.svg";
import githubSvg from "../logos/logo-github.svg";
import jsSvg from "../logos/logo-javascript.svg";
import reactSvg from "../logos/logo-react.svg";
import pythonSvg from "../logos/logo-python.svg";
import nodeSvg from "../logos/logo-nodejs.svg";
import mongoDBSvg from "../logos/mongodb.svg";
import mongoStackSvg from "../logos/mongoDBStack.svg";
import postgreSqlSgv from "../logos/postgresql.svg";
import cssSvg from "../logos/logo-css3.svg";
import SkillsContainer from './SkillsContainer';
import SkillsRow from './skillsRow'

function Skills(props) {
  return (
    <SkillsContainer>
        <h2 className="skillTitle">Technologies</h2>

        <SkillsRow>
          <SkillsElement name="JavaScript" logo={jsSvg} />
          <SkillsElement name="CSS" logo={cssSvg} />
          <SkillsElement name="React & React Native" logo={reactSvg} />
          <SkillsElement name="Nodejs" logo={nodeSvg} />
      
        </SkillsRow>

        <SkillsRow>
          <SkillsElement name="Python" logo={pythonSvg} />
          <SkillsElement name="Django" logo={DjangoSvg} />
          <SkillsElement name="MongoDB" logo={mongoStackSvg} />
          <SkillsElement name="PostgreSQL" logo={postgreSqlSgv} />
      
        </SkillsRow>
        

    </SkillsContainer>
  );
}

export default Skills;