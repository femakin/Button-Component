import React from "react";
import Button from "./Button";
import { MdLocalGroceryStore } from "react-icons/md";

export default function Home() {
  return (
    <div className="full">
      <div className="left_content">
        <div className="mx-auto">
          <h1 className="left_content_title">
            <span>Dev</span>challenges.io
          </h1>
          <ul>
            <li>Colors</li>
            <li>Typography</li>
            <li>Spaces</li>
            <li>Buttons</li>
            <li>Inputs</li>
            <li>Grid</li>
          </ul>
        </div>
      </div>

      <div className="right_content">
        <h1 className="botton">Buttons</h1>
        <div>
          <div className="btn-div one">
            <Button className="default" figure="<Button />" text="Default" />
            <Button
              className="default2"
              figure=" &:hover, &:focus"
              text="Default"
            />
          </div>

          <div className="btn-div two">
            <Button
              className="default3"
              figure="<Button variant=”outline” />"
              text="Default"
            />
            <Button
              className="default4"
              figure=" &:hover, &:focus"
              text="Default"
            />
          </div>

          <div className="btn-div three">
            <Button
              className="default5"
              figure="<Button variant=”text” />"
              text="Default"
            />
            <Button
              className="default6"
              figure=" &:hover, &:focus"
              text="Default"
            />
          </div>

          <div className="btn-div four">
            <Button
              className="default7"
              figure="<Button disableShadow />"
              text="Default"
            />
          </div>

          <div className="btn-div five">
            <Button
              className="default8"
              figure="<Button disabled />"
              text="Default"
            />
            <Button
              className="default9"
              figure="<Button variant=”text” disabled />"
              text="Desabled"
            />
          </div>

          <div className="btn-div six">
            <Button
              className="default10"
              figure="<Button startIcon=”local_grocery_store” />"
              text="Default"
              icon={<MdLocalGroceryStore />}
            ></Button>
            <Button
              style={{ display: "flex" }}
              className="default11"
              figure="<Button endIcon=”local_grocery_store” />"
              text="Disabled"
              icon={<MdLocalGroceryStore style={{}} />}
            ></Button>
          </div>

          <div className="btn-div six ">
            <Button
              className="default12"
              figure="<Button size=”sm” />"
              text="Default"
            ></Button>
            <Button
              style={{ display: "flex" }}
              className="default13"
              figure="<Button size=”md” />"
              text="Default"
            ></Button>

            <Button
              style={{ display: "flex" }}
              className="default14"
              figure="<Button size=”lg” />"
              text="Default"
            ></Button>
          </div>

          <div className="btn-div seven ">
            <Button
              className="default15"
              figure="<Button size=”sm” />"
              text="Default"
            />
            <Button
              style={{ display: "flex" }}
              className="default16"
              figure=" <Button color=”primary” />"
              text="Default"
            />

            <Button
              style={{ display: "flex" }}
              className="default17"
              figure="<Button color=”secondary” />"
              text="Secondary"
            />

            <Button
              style={{ display: "flex" }}
              className="default18"
              figure="<Button color=”danger”/>"
              text="Danger"
            />
          </div>

          <div className="btn-div eight ">
            <Button
              className="default19"
              figure="&:hover, &:focus"
              text="Default"
            />
            <Button
              style={{ display: "flex" }}
              className="default20"
              figure=" "
              text="Default"
            />

            <Button
              style={{ display: "flex" }}
              className="default21"
              figure=""
              text="Secondary"
            />

            <Button
              style={{ display: "flex" }}
              className="default22"
              figure=""
              text="Danger"
            />
          </div>
        </div>
     <h6 style={{textAlign: "center", color: "purple"}}>Created by <a href="https://devchallenges.io/portfolio/femakin" >Femakin</a>- devchallenges</h6>
      </div>
     
    </div>
  );
}
