import styled from "styled-components";
import { prop } from "styled-tools";

const Footer = styled.footer`
  background-color: ${prop('theme.colors.background.highlight')};

  width: 100%;
  padding: 8px 0px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  span, a {
    color: ${prop('theme.colors.text.inDark')};
    font-size: ${prop('theme.fontSizes.small')};
    margin-right: 25px;
  }
`;

export default {
  Footer,
};
