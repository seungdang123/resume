import Paper from "./components/Paper";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Paper />
    </Container>
  );
}

export default App;
