import styled from 'styled-components';
import { prop } from 'styled-tools';

interface Props {
  color: string;
}

const Box = styled.div<Props>`
  background-color: ${({ theme }) => theme.colors.background.secundary};
  border-radius: 5px;
  height: 170px;
  padding: 20px;
  width: 100%;

  hr {
    border: 1px solid ${prop('color')};
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 20px;
`;

const Title = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-left: 10px;
`;

const Text = styled.textarea`
  display: block;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
  text-align: left;
  margin: 10px 0px 15px 0px;
  background: none;
  border: none;
  height: 120px;
  resize: none;
  width: 100%;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background.highlight};
    bor
`;

export default {
  Box,
  TitleWrapper,
  Title,
  Text,
};
