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
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.fontSizes.big};
  font-weight: bold;
  line-height: 1.2em;
  margin-top: 5%;
`;

const Welcome = styled.h2`
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: normal;
`;


export default {
  Background,
  Logo,
  Title,
  LeftContainer,
  RightContainer,
  Welcome,
};
