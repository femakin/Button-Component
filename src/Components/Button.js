import React from "react";
export default function Button(props) {
  const { text, className, figure, classNam, type, icon } = props;
  return (
    <div className="btn-container">
      <figure className={classNam}>{figure}</figure>
      <button className={className} type={type} icon={icon}>
        {" "}
        {icon} {text}
      </button>
    </div>
  );
}
