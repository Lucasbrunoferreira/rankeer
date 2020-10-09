import styled from 'styled-components';

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secundary};
  border-radius: 5px;
  width: 380px;
  height: 160px;
  padding: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;
`;
const SaveWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 0px;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    transform: scale(1.03);
  }
`;

const Title = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-left: 10px;
`;

const SaveText = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text.opaqueInDark};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-left: 5px;
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 80px;
  padding-right: 5px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background.highlight};
    border-radius: 4px;
  }
`;

const Link = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.opaqueInDark};
  text-decoration: underline;
  font-size: ${({ theme }) => theme.fontSizes.regular};
  margin-bottom: 10px;
`;

const Empty = styled.a`
  color: ${({ theme }) => theme.colors.text.opaqueInDark};
  font-size: ${({ theme }) => theme.fontSizes.regular};
`;

export default {
  Box,
  Title,
  TitleWrapper,
  Links,
  Link,
  Empty,
  SaveWrapper,
  SaveText,
};
