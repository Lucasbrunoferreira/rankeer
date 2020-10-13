import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: rgba(32, 34, 37, 0.85);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default {
  Background,
};
