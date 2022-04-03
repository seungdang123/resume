import styled from "styled-components";
import NameTag from "./NameTag";
import CareerBox from "./CareerBox";

const Wrapper = styled.div`
  width: 75vw;
  height: auto;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px;
  padding: 50px;
`;

const Paper = () => {
  return (
    <Wrapper>
      <NameTag />
      <CareerBox />
    </Wrapper>
  );
};

export default Paper;
