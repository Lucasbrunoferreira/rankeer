import styled, { css } from 'styled-components';

interface FlashWrapperProps {
  isVisible: boolean;
}

const Wrapper = styled.div<FlashWrapperProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.danger};
  position: fixed;
  padding: 15px 0;
  bottom: -50px;
  transition: bottom 0.5s;
  z-index: 5;
  ${({ isVisible }) =>
    isVisible &&
    css`
      bottom: 0;
    `};
`;

const Text = styled.span`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.inDark};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.regular};
`;

export default { Wrapper, Text };
