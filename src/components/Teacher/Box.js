import React from "react";
import styled from "styled-components";
import { Constants } from "../../data/constants";

const Box = ({ title, handleDrag, handleDrop }) => {
  return (
    <StyledBox
      draggable={true}
      id={title}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}
    >
      {title}
    </StyledBox>
  );
};

const StyledBox = styled.div`
  background-color: ${Constants.COLOR.GREEN};
  border-radius: 4px;
  width: 80%;
  height: 90px;
  margin: 8px 0px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export default Box;