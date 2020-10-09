import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  flex: 1;
  padding: 3%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export default {
  Container,
  Wrapper,
  Row,
};
