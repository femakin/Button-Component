import React from 'react';
import Button from "./Button";
import { MdLocalGroceryStore } from "react-icons/md";

export default function BTN() {
    return (
        <div >
        <h1 className="botton">Buttons</h1>
        <div>
          <div className="btn_div one">
            <Button className="default" label="<Button />" text="Default" />
            <Button
              className="default2"
              label=" &:hover, &:focus"
              text="Default"
            />
          </div>

          <div className="btn_div two">
            <Button
              className="default3"
              label="<Button variant=”outline” />"
              text="Default"
            />
            <Button
              className="default4"
              label=" &:hover, &:focus"
              text="Default"
            />
          </div>

          <div className="btn_div three">
            <Button
              className="default5"
              label="<Button variant=”text” />"
              text="Default"
            />
            <Button
              className="default6"
              label=" &:hover, &:focus"
              text="Default"
            />
          </div>

          <div className="btn_div four">
            <Button
              className="default7"
              label="<Button disableShadow />"
              text="Default"
            />
          </div>

          <div className="btn_div five">
            <Button
              className="default8"
              label="<Button disabled />"
              text="Default"
            />
            <Button
              className="default9"
              label="<Button variant=”text” disabled />"
              text="Desabled"
            />
          </div>

          <div className="btn_div six">
            <Button
              className="default10"
              label="<Button startIcon=”local_grocery_store” />"
              text="Default"
              icon={<MdLocalGroceryStore />}
            ></Button>
            <Button
              style={{ display: "flex" }}
              className="default11"
              label="<Button endIcon=”local_grocery_store” />"
              text="Disabled"
              icon={<MdLocalGroceryStore style={{}} />}
            ></Button>
          </div>

          <div className="btn_div six ">
            <Button
              className="default12"
              label="<Button size=”sm” />"
              text="Default"
            ></Button>
            <Button
              style={{ display: "flex" }}
              className="default13"
              label="<Button size=”md” />"
              text="Default"
            ></Button>

            <Button
              style={{ display: "flex" }}
              className="default14"
              label="<Button size=”lg” />"
              text="Default"
            ></Button>
          </div>

          <div className="btn_div seven ">
            <Button
              className="default15"
              label="<Button size=”sm” />"
              text="Default"
            />
            <Button
              style={{ display: "flex" }}
              className="default16"
              label=" <Button color=”primary” />"
              text="Default"
            />

            <Button
              style={{ display: "flex" }}
              className="default17"
              label="<Button color=”secondary” />"
              text="Secondary"
            />

            <Button
              style={{ display: "flex" }}
              className="default18"
              label="<Button color=”danger”/>"
              text="Danger"
            />
          </div>

          <div className="btn_div eight ">
            <Button
              className="default19"
              label="&:hover, &:focus"
              text="Default"
            />
            <Button
              style={{ display: "flex" }}
              className="default20"
              label=" "
              text="Default"
            />

            <Button
              style={{ display: "flex" }}
              className="default21"
              label=""
              text="Secondary"
            />

            <Button
              style={{ display: "flex" }}
              className="default22"
              label=""
              text="Danger"
            />
          </div>
          <footer style={{color: "#9E9E9E"}}> Created by <a href="https://devchallenges.io/portfolio/femakin">Femakin</a>- devchallenges.io</footer>
        </div>
        </div>
    )
}
