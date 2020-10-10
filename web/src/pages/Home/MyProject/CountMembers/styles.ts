import styled from 'styled-components';

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secundary};
  border-radius: 5px;
  height: 160px;
  padding: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;
`;

const Title = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-left: 10px;
`;

const Count = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: ${({ theme }) => theme.fontSizes.giant};
  text-align: center;
  width: 100%;
  line-height: 140px;
`;

export default {
  Box,
  TitleWrapper,
  Title,
  Count,
};
