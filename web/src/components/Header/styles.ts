import styled from "styled-components";
import { prop } from "styled-tools";
import { ReactComponent as Logout } from 'assets/svg/logout.svg'

const Header = styled.header`
  padding: 10px 20px 10px 20px;
  background-color: ${prop('theme.colors.background.secundary')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  display: block;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  display: block;
  color: ${prop('theme.colors.text.inDark')};
  font-size: ${prop('theme.fontSizes.regular')};
`;

const Initials = styled.span`
  color: ${prop('theme.colors.text.inLight')};
  background-color: ${prop('theme.colors.text.inDark')};
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  margin: 0px 15px;
`;

const LogoutIcon = styled(Logout)`
  margin-left: 15px;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    transform: scale(1.2);
  }
`;

export default {
  Header,
  Logo,
  Wrapper,
  Text,
  Initials,
  LogoutIcon,
};
