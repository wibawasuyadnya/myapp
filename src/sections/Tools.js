import React from "react";
import SkillTech from "./SkillTech";

function Tools({title, tech}){
  return (
        <>
      <div className="container min-h-[400px] mx-auto">
        <div>
          <h2 className="text-center text-[40px] font-bold">{title}</h2>
        </div>
        <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
      {tech.map((skill) => {
        return (
          <SkillTech skillName={skill.skillName} skillIcon={skill.skillIcon} ></SkillTech>
        );
      })}
    </div>
      </div>
  
  
  </>
  );
}

export default Tools;