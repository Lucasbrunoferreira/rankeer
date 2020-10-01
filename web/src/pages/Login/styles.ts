import styled from "styled-components";

const Background = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  ::after {
    content: '';
    width: 15px;
    height: 100vh;
    background-color: ${props => props.theme.colors.background.darker};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const LeftContainer = styled(Container)`
  background-color: ${props => props.theme.colors.background.darker};
  justify-content: space-evenly;
  padding: 10% 5%;
  width: 30%;
`;

const RightContainer = styled(Container)`
  background-color: ${props => props.theme.colors.background.primary};
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
  margin-left: 3px;
  width: 250px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background.darker};
  margin: 10px 0;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Submit = styled.button`
  align-self: center;
  border: none;
  padding: 10px;
  margin-top: 10px;
  width: 250px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
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
};
