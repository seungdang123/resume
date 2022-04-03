import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  margin-bottom: 150px;
`;

const Name = styled.h1`
  font-size: 70px;
  font-weight: 800;
  letter-spacing: 5px;
  margin: 30px 0;
  margin-right: 10px;
  font-style: italic;
`;

const Subtitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.5);
`;

const NameTag = () => {
  return (
    <Wrapper>
      <Name>이승환</Name>
      <Subtitle>FRONTEND DEVELOPER</Subtitle>
    </Wrapper>
  );
};

export default NameTag;
