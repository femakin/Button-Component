import React from "react";
export default function Button({ text, className, label, classNam, type, icon }) {
  return (
    <div className="">
     <div> <label className={classNam}>{label}</label></div>
      <button className={className} type={type} icon={icon}>
        {" "}
        {icon} {text}
      </button>
    </div>
  );
}
