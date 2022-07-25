import React from "react";
import SkillTech from "./SkillTech";

function Tools({title, tech}){
  return (
 <>
      <div className="container min-h-[450px] mx-auto mb-10">
        <div>
          <h2 className="text-center text-[40px] font-bold">{title}</h2>
        </div>
        <div className="grid grid-cols-4 sm:flex-row align-center justify-center max-w-xl mx-auto mt-10">
      {tech.map((skills, index) => {
        return (
          <SkillTech 
          key={index}
          shref={skills.skillLink} 
          sname={skills.skillName} 
          sicon={skills.skillIcon}
          />
        );
      })}
    </div>
      </div>
  </>
  );
}

export default Tools;