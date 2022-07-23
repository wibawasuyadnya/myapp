import React from "react";

const SkillTech = ({ sname, sicon }) => {
   return (
   <>
   <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
      {sicon}
      <p className="text-xl font-semibold mt-4">{sname}</p>
    </div>
    </>
   );
};


export default SkillTech;