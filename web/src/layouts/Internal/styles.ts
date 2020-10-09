import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
`;

const Container = styled.div`
  display: flex;
  height: calc(100vh - 93px);
`;

const Content = styled.div`
  width: 100%;
`;

export default {
  Content,
  Wrapper,
  Container,
};
