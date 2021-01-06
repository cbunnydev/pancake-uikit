import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: 500px;
  margin: 0 0 24px 24px;

  &::-webkit-scrollbar {
    height: 0.5em;
    background: #eeeaf4;
    box-shadow: inset 0px 2px 2px -1px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8f80ba;
    box-shadow: inset 0px 2px 2px -1px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    &:hover {
      background: rgb(143, 128, 186, 0.8);
    }
  }
`;

const ScrollPanel = styled.div`
  min-width: 800px;
  height: 20px;
`;

const ScrollBar = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <Container ref={ref}>
      <ScrollPanel />
    </Container>
  );
});

export default ScrollBar;
