import React from "react";

const SkillTech = ({ sname, sicon }) => {
   return (
   <>
   <div className="m-2 w-[130px] flex-none mx-auto text-center p-5 rounded-[20px] hover:shadow-[0_0_20px_1px_rgba(222,222,222,1)] shadow-[0_0_50px_0px_rgba(222,222,222,1)]">
      {sicon}
      <p className="text-xl font-semibold mt-4">{sname}</p>
    </div>
    </>
   );
};


export default SkillTech;