import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

interface ButtonProps {
  disabled: boolean;
}

const Container = styled.div`
  padding: 3%;
  height: calc(100vh - 190px);
`;

const EmptyImage = styled.img`
  width: 500px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.big};
  margin-bottom: 60px;
`;

const Options = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
`;

const OptionWrapper = styled.div``;

const Text = styled.span`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.medium};
  display: block;
  margin-bottom: 30px;
`;

const Button = styled.button<ButtonProps>`
  width: 110px;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.medium};
  margin-left: 20px;
  padding: 5px 8px;
  border-radius: 8px;
  border: none;
  background: ${props => props.theme.colors.primary};
  transition: all ease 0.7s;
  cursor: pointer;

  :hover {
    background: ${props => props.theme.colors.secundary};
  }

  ${ifProp("disabled", css`
    opacity: 0.5;
    cursor: default;
    border: 1px solid ${props => props.theme.colors.background.secundary};

      :hover {
        background: ${props => props.theme.colors.primary};
      }
  `)}
`;

const Input = styled.input`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.medium};
  width: 260px;
  border: none;
  background: none;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

export default {
  Container,
  EmptyImage,
  TitleWrapper,
  Title,
  Input,
  Button,
  Text,
  OptionWrapper,
  Options,
};
