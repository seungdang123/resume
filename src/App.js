import Paper from "./components/Paper";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Paper>
        <h1>Test</h1>
      </Paper>
    </Container>
  );
}

export default App;
