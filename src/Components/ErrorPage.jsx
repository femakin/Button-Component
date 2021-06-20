import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <p>
        This Page Does Not Exist At The Moment. <br />
        click any of the buttons below
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "15%",
        }}
      >
        <Link to="/input">
          {" "}
          <Button className="default12" text="Buttons" />
        </Link>
        <Link to="/input">
          {" "}
          <Button className="default4" text="Input" />
        </Link>
      </div>
    </div>
  );
}
