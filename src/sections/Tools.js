import React from "react";

function Tools({title}){
  return (
        <>
      <div className="container min-h-[400px] mx-auto">
        <div>
          <h2 className="text-center text-[40px] font-bold">{title}</h2>
        </div>
        <div className="inline-grid grid-cols-[200px_minmax(150px,_1fr)_100px] gap-5 py-[50px]">
          <div className=" flex items-center justify-center bg-slate-600 w-[120px] h-[120px] rounded-lg text-white py-8">
              adobe
          </div>
          <div className=" flex items-center justify-center bg-slate-600 w-[120px] h-[120px] rounded-lg text-white py-8">
              adobe
          </div>
          <div className=" flex items-center justify-center bg-slate-600 w-[120px] h-[120px] rounded-lg text-white py-8">
              adobe
          </div>
          <div className=" flex items-center justify-center bg-slate-600 w-[120px] h-[120px] rounded-lg text-white py-8">
              adobe
          </div>
          <div className=" flex items-center justify-center bg-slate-600 w-[120px] h-[120px] rounded-lg text-white py-8">
              adobe
          </div>
          <div className=" flex items-center justify-center bg-slate-600 w-[120px] h-[120px] rounded-lg text-white py-8">
              adobe
          </div>
          <div className=" flex items-center justify-center bg-slate-600 w-[120px] h-[120px] rounded-lg text-white py-8">
              adobe
          </div>
          <div className=" flex items-center justify-center bg-slate-600 w-[120px] h-[120px] rounded-lg text-white py-8">
              adobe
          </div>
        </div>
      </div>
  
  
  </>
  );
}

export default Tools;