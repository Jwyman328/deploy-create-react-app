import React from "react";

//logos
import DjangoSvg from "../../logos/django.svg";
import githubSvg from "../../logos/logo-github.svg";
import jsSvg from "../../logos/logo-javascript.svg";
import reactSvg from "../../logos/logo-react.svg";
import pythonSvg from "../../logos/logo-python.svg";
import nodeSvg from "../../logos/logo-nodejs.svg";
import mongoDBSvg from "../../logos/mongodb.svg";
import mongoStackSvg from "../../logos/mongoDBStack.svg";
import postgreSqlSgv from "../../logos/postgresql.svg";
import cssSvg from "../../logos/logo-css3.svg";
import sassSvg from "../../logos/logo-sass.svg";
import typeSciptyLogo from '../../logos/typescriptLogo.svg';
import angularLogo from '../../logos/angularLogo.svg'

import SkillsElement from "../skillsComponents/skillsElement";
import SkillsContainer from "../skillsComponents/SkillsContainer";
import SkillsRow from "../skillsComponents/skillsRow";

function Skills(props) {
  return (
    <SkillsContainer>
      <h1 className="skillTitle">Technologies</h1>

      <SkillsRow>
        <SkillsElement name="JavaScript" logo={jsSvg} />
        <SkillsElement name="TypeScript" logo={typeSciptyLogo} />
        <SkillsElement name="CSS" logo={cssSvg} />
        <SkillsElement name="Sass" logo={sassSvg} />
        <SkillsElement name="React & React Native" logo={reactSvg} />
        <SkillsElement name="Angular" logo={angularLogo} />


      </SkillsRow>

      <SkillsRow>
      <SkillsElement name="Nodejs" logo={nodeSvg} />
        <SkillsElement name="Python" logo={pythonSvg} />
        <SkillsElement name="Django" logo={DjangoSvg} />
        <SkillsElement name="MongoDB" logo={mongoStackSvg} />
        <SkillsElement name="PostgreSQL" logo={postgreSqlSgv} />
      </SkillsRow>
    </SkillsContainer>
  );
}

export default Skills;
