import styled, { css } from "styled-components";

export const StyledTextBox = styled.input`
  background: #fff;
  border: #000 1px solid;
  color: #000;
  font-size: 24px;
  line-height: 45px;
  width: 100%;
  padding-left: 10px;
  height: 45px;
  border-radius: 45px;

  ${(props) =>
    props.errors &&
    css`
      border: red 1px solid;
      color: red;
    `}
`;

export const StyledRadioButton = styled.input`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
