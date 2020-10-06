import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
`;

const Container = styled.div`
  display: flex;
  height: calc(100vh - 93px);
`;

const Content = styled.div`
  padding: 3% 5%;
`;

export default {
  Content,
  Wrapper,
  Container,
};
