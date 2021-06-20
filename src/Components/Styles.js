import styled, { css } from "styled-components";

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #4f4f4f;
  margin: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  flex-wrap: wrap;
  width: ${(props) => (props.width ? props.width : "auto")};
  @media (width: 3840px) {
    width: 20%;
  }
`;

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
  size: props.size || "9em",
  value: props.value,
}))`
  border: 1px solid #828282;
  border-radius: ${(props) => props.radius};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: content-box;
  height: ${(props) => (props.height ? props.height : "56px")};
  width: ${(props) => (props.width ? props.width : "200px")};
  outline: none;
  background-color: #ffffff;
  border: 1px solid ${(props) => (props.border ? props.border : "#828282")};

  ::placeholder {
    color: #828282;
    font-family: "Noto Sans JP", sans-serif;
    font-size: 14px;
    line-height: 20px;
  }

  ${(props) =>
    props.full
      ? css`
          @media (max-width: 768px) {
            width: 200px;
          }
          @media (width: 1024px) {
            width: 800px;
          }
        `
      : css``};

  ${(props) =>
    props.startIcon &&
    css`
       {
        display: "none";
      }
    `}

  ${(props) =>
    props.focus &&
    css`
      &:focus {
        outline: none;
        background-color: #ffffff;

        border: 1px solid
          ${(props) => (props.border ? props.border : "#2962ff")};
      }
    `}
    ${(props) =>
    props.hover &&
    css`
      &:hover {
        outline: none;
        background-color: #ffffff;
        border: 1px solid pink;
      }
    `}
      ${(props) =>
    props.error &&
    css`
      .error {
        background-color: lime;
      }
    `}
  
      ${(props) =>
    props.disabled
      ? css`
          background: #f2f2f2;
          cursor: not-allowed !important;
        `
      : css`
          background: #ffffff;
        `};
`;

const InputBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.label`
  margin-bottom: 15px;
  font-family: "Ubuntu Mono", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;

  color: #333333;
`;

const InputDiv = styled.div.attrs((props) => ({
  figure: props.figure,
}))`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.focus &&
    css`
      :focus-within {
        color: #2962ff;
      }
    `}

  ${(props) =>
    props.errorfocus &&
    css`
      :focus-within {
        color: #d32f2f;
      }
      input:focus {
        border: 1px solid #d32f2f;
      }
    `}
  
  
      ${(props) =>
    props.errorfocus1 &&
    css`
      :focus-within {
        color: lime;
      }
      input:focus {
        border: 1px solid #d32f2f;
      }
    `}
  
  
  
      ${(props) =>
    props.hover &&
    css`
      :hover {
        color: pink;
      }
    `}
`;

const Spann = styled.span`
  color: ${(props) => (props.color ? props.color : "#333333")};
`;

const Pre = styled.pre`
  color: ${(props) => (props.color ? props.color : "#333333")};
  font-family: "Noto Sans JP", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
`;

const style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  height: "69px",
  width: "213px",
  boxSizing: "border-box",
  backgroundColor: "#ffffff",
  marginBottom: "30px",
  borderRadius: "8px",
  border: "1px solid #828282",
  outline: "none !important",
  textIndent: 30,
};

export { Title, Wrapper, Input, InputDiv, InputBody, Span, Spann, Pre, style };
