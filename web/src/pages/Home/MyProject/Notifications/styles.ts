import styled from 'styled-components';

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secundary};
  border-radius: 5px;
  width: 320px;
  height: 160px;
  padding: 20px;
  margin-right: 30px;
`;

const EventName = styled.span`
  display: block;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

const Title = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-left: 10px;
`;

const Messages = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100px;
  padding-right: 5px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background.highlight};
    border-radius: 4px;
  }
`;

const Message = styled.li`
  color: ${({ theme }) => theme.colors.text.opaqueInDark};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  margin-bottom: 5px;
`;

const Empty = styled.a`
  color: ${({ theme }) => theme.colors.text.opaqueInDark};
  font-size: ${({ theme }) => theme.fontSizes.regular};
`;

export default {
  Box,
  EventName,
  Title,
  TitleWrapper,
  Messages,
  Message,
  Empty,
};
