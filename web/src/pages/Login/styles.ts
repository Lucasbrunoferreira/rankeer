import styled, { css } from "styled-components";

interface InputProps {
  isInvalid: boolean;
}

interface SubmitProps {
  disabled: boolean;
}

const Background = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  ::after {
    content: '';
    width: 15px;
    height: 100vh;
    background-color: ${props => props.theme.colors.background.secundary};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const LeftContainer = styled(Container)`
  background-color: ${props => props.theme.colors.background.primary};
  justify-content: space-evenly;
  padding: 10% 5%;
  width: 30%;
`;

const RightContainer = styled(Container)`
  background-color: ${props => props.theme.colors.background.secundary};
  width: 70%;
`;

const Logo = styled.img`
  display: block;
  width: 320px;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.big};
  font-weight: bold;
  line-height: 1.2em;
  margin-top: 5%;
`;

const Welcome = styled.h2`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: normal;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
  margin-left: 8px;
  width: 250px;
`;

const InputWrapper = styled.div<InputProps>`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background.primary};
  margin: 10px 0;
  padding: 5px 10px;
  border-radius: 5px;

  ${({ isInvalid }) => isInvalid && css`
    border: 1px  ${props => props.theme.colors.danger} solid;

    svg {
      stroke: ${props => props.theme.colors.danger};
    }
  `}
`;

const Submit = styled.button<SubmitProps>`
  cursor: pointer;
  align-self: center;
  border: none;
  outline: none;
  margin-top: 35px;
  width: 290px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
  line-height: 35px;

  :hover {
    transform: scale(1.05);
  }

  ${({ disabled }) => disabled && css`
    cursor: default;
    opacity: 0.3;

    :hover {
      transform: none;
    }
  `}
`;

const Link = styled.span`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.small};
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;

const ForgotPass = styled(Link)`
  align-self: flex-end;
  margin-top: 8px;
`;

const CreatAccount = styled(Link)`
  align-self: center;
  margin-top: 15px;
`;

const ErrorMessage = styled.span`
  color: ${props => props.theme.colors.danger};
  font-size: ${props => props.theme.fontSizes.small};
`;

export default {
  Background,
  Logo,
  Title,
  LeftContainer,
  RightContainer,
  Welcome,
  Form,
  InputWrapper,
  Input,
  Submit,
  ForgotPass,
  CreatAccount,
  ErrorMessage
};
