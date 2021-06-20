import React from "react";
import NewInput from "./NewInput";
import {
  Title,
  Wrapper,
  Input,
  InputDiv,
  InputBody,
  Span,
  Spann,
  Pre,
  style,
} from "./Styles";

import { GiPadlock } from "react-icons/gi";

export default function InputCom() {
  return (
    <div>
      <Title>Input</Title>
      <Wrapper width="60%">
        <InputBody>
          <Span>{"<Input />"}</Span>
          <InputDiv>
            <span>Label</span>
            <Input placeholder="Placeholder" padding="8px" radius="8px" />
          </InputDiv>
        </InputBody>

        <InputBody>
          <Span>&:hover</Span>
          <InputDiv hover>
            <span>Label</span>
            <Input placeholder="Placeholder" padding="8px" radius="8px" hover />
          </InputDiv>
        </InputBody>

        <InputBody>
          <Span>&:focus</Span>
          <InputDiv focus>
            <span>Label</span>
            <Input placeholder="Placeholder" padding="8px" radius="8px" focus />
            <pre>code</pre>
          </InputDiv>
        </InputBody>
      </Wrapper>

      <Wrapper width="60%">
        <InputBody>
          <Span>{"<Input error />"}</Span>
          <InputDiv error className="error">
            <Spann color="#D32F2F">Label</Spann>
            <Input
              placeholder="Placeholder"
              padding="8px"
              border="#D32F2F"
              radius="8px"
              error
              className="error"
            />
          </InputDiv>
        </InputBody>

        <InputBody>
          <Span>&:hover</Span>
          <InputDiv>
            <Spann>Label</Spann>
            <Input placeholder="Placeholder" padding="8px" radius="8px" />
          </InputDiv>
        </InputBody>

        <InputBody>
          <Span>&:focus</Span>
          <InputDiv errorfocus>
            <span>Label</span>
            <Input placeholder="Placeholder" padding="8px" radius="8px" focus />
          </InputDiv>
        </InputBody>
      </Wrapper>

      <Wrapper>
        <InputBody>
          <Span>{"<Input disabled />"}</Span>
          <InputDiv disabled>
            <span>Label</span>
            <Input
              placeholder="Placeholder"
              padding="8px"
              radius="8px"
              disabled={true}
            />
          </InputDiv>
        </InputBody>
      </Wrapper>

      <Wrapper width="50%">
        <InputBody>
          <Span>{"<Input helperText=”Some interesting text” />"}</Span>
          <InputDiv>
            <span>Label</span>
            <Input placeholder="Placeholder" padding="8px" radius="8px" />
            <Pre>Some interesting text</Pre>
          </InputDiv>
        </InputBody>

        <InputBody>
          <Span>{"<Input helperText=”Some interesting text” error />"}</Span>
          <InputDiv>
            <Spann color="#D32F2F">Label</Spann>
            <Input
              placeholder="Placeholder"
              padding="8px"
              radius="8px"
              focus
              border="#D32F2F"
            />
            <Pre color="#D32F2F">Some interesting text</Pre>
          </InputDiv>
        </InputBody>
      </Wrapper>

      <Wrapper width="43%">
        <NewInput
          style={style}
          span="<Input startIcon />"
          label="Label"
          className="input1"
          radius="8px"
          placeholder="Placeholder"
        />
        <div width="50%">
          <span className="span">{"<Input EndIcon />"}</span>
          <div>
            <label htmlFor="" className="label">
              Label
            </label>
          </div>
          <div
            className="search"
            style={{
              position: "relative",
              display: "inline-block",
              width: "100%",
            }}
          >
            <span className="fa fa-search"></span>
            <GiPadlock
              style={{
                position: "absolute",
                right: "15px",
                top: "28px",
                zIndex: 10,
              }}
              className="fa fa-search"
            />
            <input className="input1" style={style} placeholder="Placeholder" />
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <InputBody>
          <Span>{"<Input value=”text” />"}</Span>
          <InputDiv>
            <span>Label</span>
            <Input placeholder="Placeholder" padding="8px" radius="8px" />
          </InputDiv>
        </InputBody>
      </Wrapper>

      <Wrapper width="42%">
        <InputBody>
          <Span>{"<Input size=”sm” />"}</Span>
          <InputDiv>
            <span>Label</span>
            <Input placeholder="Placeholder" padding="8px" radius="8px" />
          </InputDiv>
        </InputBody>

        <InputBody>
          <Span>{"<Input size=”md” />"}</Span>
          <InputDiv>
            <span>Label</span>
            <Input placeholder="Placeholder" padding="8px" radius="8px" />
          </InputDiv>
        </InputBody>
      </Wrapper>

      <Wrapper>
        <InputBody>
          <Span>{"<Input size=”md” />"}</Span>
          <InputDiv>
            <span>Label</span>
            <Input
              placeholder="Placeholder"
              padding="8px"
              radius="8px"
              width="1034px"
              full
              className="full"
            />
          </InputDiv>
        </InputBody>
      </Wrapper>

      <Wrapper>
        <InputBody>
          <Span>{"<Input multiline row=”4” />"}</Span>
          <InputDiv>
            <span>Label</span>
            <Input
              placeholder="Placeholder"
              width="200px"
              radius="8px"
              height="150px"
            />
          </InputDiv>
        </InputBody>
      </Wrapper>

      <footer style={{ color: "#9E9E9E" }}>
        {" "}
        Created by{" "}
        <a href="https://devchallenges.io/portfolio/femakin">Femakin</a>-
        devchallenges.io
      </footer>
    </div>
  );
}
