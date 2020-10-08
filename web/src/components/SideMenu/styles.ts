import styled, { css } from "styled-components";
import { prop, ifProp } from "styled-tools";

interface RouteProps {
  isActive: boolean;
}

const SideMenu = styled.div`
  box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: ${prop('theme.colors.background.secundary')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0px;

  width: 38px;
  transition: all ease 1s;

  :hover {
    width: 190px;
  }
`;

const Route = styled.div<RouteProps>`
  margin-top: 15px;
  padding: 10px 8px;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  white-space: nowrap;
  align-items: center;
  transition: all 1s ease;


  ${ifProp("isActive", css`
    background-color: ${props => props.theme.colors.background.primary};
  `)}

  :hover {
    background-color: ${prop('theme.colors.background.primary')};
  }
`;

const Text = styled.span`
  color: ${prop('theme.colors.text.inDark')};
  font-size: ${prop('theme.fontSizes.regular')};
  margin-left: 10px;
`;

const IconWrapper = styled.span`
  display: block;
`;

const Navigation = styled.nav`
  display: block;
`;

const Options = styled.nav`
  display: block;
`;

const OptionItem = styled.div`
  margin-top: 25px;
  padding: 10px 8px;
  overflow: hidden;
  display: flex;
  white-space: nowrap;
  align-items: center;
  transition: all 0.4s ease;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;

export default {
  SideMenu,
  Route,
  Text,
  IconWrapper,
  Navigation,
  Options,
  OptionItem,
};
