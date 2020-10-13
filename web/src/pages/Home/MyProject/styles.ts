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
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background.highlight};
    border-radius: 4px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1170px;

  .box {
    margin: 15px;
  }
`;

export default {
  Container,
  Wrapper,
  Row,
};
