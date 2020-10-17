import styled, { css } from 'styled-components';
import { ifProp, ifNotProp } from 'styled-tools';

interface Props {
  color: string;
  disabled?: boolean;
}

const Container = styled.div`
  padding: 3%;
  height: calc(100vh - 220px);
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.big};
`;

const SubTitle = styled.h3`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.medium};
  margin-top: 30px;

  b {
    font-weight: bold;
    background-color: #333;
    padding: 5px;
  }
`;

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 380px;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
  background-color: ${props => props.theme.colors.background.secundary};
`;

const Button = styled.button<Props>`
  border: none;
  background-color: ${({ color }) => color};
  border-radius: 3px;
  display: flex;
  align-items: center;
  margin-left: 30px;
  padding: 5px;
  transition: all ease 0.8s;

  ${ifProp('disabled', css`
    opacity: 0.4;
  `)}

  ${ifNotProp('disabled', css`
    :hover {
      cursor: pointer;
      opacity: 0.7;
      transform: scale(1.08);
    }
  `)}
`;

const Message = styled.span`
  display: block;
  color: ${props => props.theme.colors.danger};
  font-size: ${props => props.theme.fontSizes.small};
  position: absolute;
  left: 0;
  bottom: -20px;
`;

const BtnText = styled.span`
  margin-left: 5px;
  text-align: center;
  font-weight: bold;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 80px;
`;

const Item = styled.li`
  background-color: ${props => props.theme.colors.background.secundary};
  border-radius: 5px;
  padding: 25px;
  margin-right: 30px;
  margin-bottom: 30px;
  position: relative;
  width: 280px;
`;

const Initials = styled.span`
  display: block;
  position: absolute;
  color: ${props => props.theme.colors.text.inLight};
  background-color: ${props => props.theme.colors.text.inDark};
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  margin: 0px 15px;
  top: -10px;
  left: -22px;
`;

const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ItemTitle = styled.span`
  display: block;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
  font-weight: bold;
  margin-left: 10px;
`;

const Name = styled(ItemTitle)`
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 0;
`;

const Email = styled.span`
  display: block;
`;

const Text = styled.span`
  margin-left: 10px;
  display: block;
  color: ${props => props.theme.colors.text.opaqueInDark};
  font-size: ${props => props.theme.fontSizes.regular};
`;

export default {
  Container,
  Title,
  Email,
  Text,
  ItemTitle,
  WrapperTitle,
  Initials,
  Item,
  List,
  SubTitle,
  BtnText,
  Button,
  Input,
  Wrapper,
  Name,
  Message,
};
