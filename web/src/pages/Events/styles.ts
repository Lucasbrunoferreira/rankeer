import styled, { css } from 'styled-components';
import { switchProp, prop, ifProp } from 'styled-tools';
import { EventStatus } from 'helpers/enums/EventStatus';

interface EventItem {
  status?: EventStatus;
  isActive?: boolean;
}

interface ButtonProps {
  disabled: boolean;
}

const Container = styled.div`
  display: block;
  padding: 3% 5%;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.big};
`;

const EventsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 340px;
  width: 100%;
  overflow-y: scroll;
  padding: 5px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background.highlight};
    border-radius: 4px;
  }
`;

const EventItem = styled.li<EventItem>`
  background-color: ${props => props.theme.colors.background.secundary};
  border-radius: 10px;
  padding: 30px 40px 55px 40px;
  position: relative;
  transition: all 1s;
  margin: 25px 40px 0px 0px;
  height: 90px;
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;

  :hover {
    ${switchProp("status", {
      1: 'cursor: pointer; transform: scale(1.04);',
      2: null,
      3: null
    })};
  }

  opacity: ${switchProp("status", {
    1: 1,
    2: 0.35,
    3: 0.35
  })};
`;

const Text = styled.span`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
  display: block;
  text-align: left;
  margin-bottom: 5px;

  strong {
    font-weight: bold;
  }
`;

const EventName = styled(Text)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: 25px;
`;

const Status = styled.div<EventItem>`
  text-align: center;
  padding: 3px 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${switchProp("status", {
    1: prop('theme.colors.positive'),
    2: prop('theme.colors.warning'),
    3: prop('theme.colors.danger')
  })};
`;

const Filter = styled.ul`
  display: flex;
  margin: 45px 0 5px 0;
`;

const FilterItem = styled.li<EventItem>`
  cursor: pointer;
  margin-right: 30px;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.text.inDark};
  display: flex;
  opacity: 0.3;

   ${ifProp("isActive", css`
    opacity: 1;
  `)}

  ::before {
    content: '';
    display: block;
    margin-right: 3px;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${switchProp("status", {
      1: prop('theme.colors.positive'),
      2: prop('theme.colors.warning'),
      3: prop('theme.colors.danger')
    })};
  }
`;

const Wrapper = styled.div`
  margin-top: 70px;
`;

const SubTitle = styled(Text)`
  font-size: ${props => props.theme.fontSizes.medium};
`;

const Input = styled.input`
  font-size: ${props => props.theme.fontSizes.regular};
  background-color: ${props => props.theme.colors.background.secundary};
  color: ${props => props.theme.colors.text.inDark};
  font-family: sans-serif !important;
  border-radius: 4px;
  padding: 5px;
  border: none;
  outline: none;
`;

const WrapperCode = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button<ButtonProps>`
  width: 110px;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
  margin-left: 20px;
  border-radius: 8px;
  border: none;
  background: ${props => props.theme.colors.primary};
  transition: all ease 0.7s;
  cursor: pointer;
  height: 35px;

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

export default {
  Container,
  WrapperCode,
  Title,
  EventsList,
  EventItem,
  EventName,
  Text,
  Status,
  Filter,
  FilterItem,
  Input,
  Wrapper,
  SubTitle,
  Button,
};
