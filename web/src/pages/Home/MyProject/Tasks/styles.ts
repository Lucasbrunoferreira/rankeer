import styled from 'styled-components';

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secundary};
  border-radius: 5px;
  height: 220px;
  padding: 20px;
  width: 100%;
  position: relative;
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(32, 34, 37, 0.85);

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 20px;
  position: relative;
`;

const Title = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-left: 10px;
`;

const List = styled.ul`
  margin-top: 30px;
  padding-left: 20px;
  overflow-y: scroll;
  height: 160px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background.highlight};
    border-radius: 4px;
  }
`;

const Item = styled.li`
  display: flex;
  margin: 15px 0;
`;

const Description = styled.span`
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  margin-left: 10px;
`;

const Empty = styled.span`
  color: ${({ theme }) => theme.colors.text.opaqueInDark};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  line-height: 160px;
  width: 100%;
  text-align: center;
  display: block;
`;

const Input = styled.input`
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
`;

export default {
  Box,
  TitleWrapper,
  Title,
  List,
  Item,
  Description,
  Empty,
  Input,
  Loading,
};
