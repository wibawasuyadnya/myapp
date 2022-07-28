import React from "react";

const SkillTech = ({ sname, sicon, shref}) => {
   return (
   <>
   <a href={shref} target="_blank">
   <div className="m-2 w-[140px] flex-none mx-auto text-center p-5 rounded-[15px] hover:shadow-[0_0_30px_1px_rgba(0,0,0,0.3)] transition-all duration-150">
      {sicon}
      <p className="text-xl font-semibold mt-4">{sname}</p>
    </div> 
    </a>
    </>
   );
};


export default SkillTech;