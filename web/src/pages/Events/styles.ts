import styled from "styled-components";
import { switchProp, prop } from "styled-tools";

interface EventItem {
  status: 'inProgress' | 'comingSoon' | 'closed'
}

const Container = styled.div`
  display: block;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.big};
`;

const EventsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
`;

const EventItem = styled.li<EventItem>`
  background-color: ${props => props.theme.colors.background.secundary};
  border-radius: 10px;
  padding: 30px 40px 55px 40px;
  position: relative;
  transition: all 1s;
  margin: 25px 40px 0px 0px;

  :hover {
    ${switchProp("status", {
      inProgress: 'cursor: pointer; transform: scale(1.04);',
      comingSoon: null,
      closed: null
    })};
  }

  opacity: ${switchProp("status", {
    inProgress: 1,
    comingSoon: 0.35,
    closed: 0.35
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
    inProgress: prop('theme.colors.positive'),
    comingSoon: prop('theme.colors.warning'),
    closed: prop('theme.colors.danger')
  })};
`;

export default {
  Container,
  Title,
  EventsList,
  EventItem,
  EventName,
  Text,
  Status,
};
