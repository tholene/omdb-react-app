import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

function App() {
  return (
    <AppContainer>
      <h1>Hello World!</h1>
    </AppContainer>
  );
}

export default App;
