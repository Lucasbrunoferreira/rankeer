import styled from 'styled-components';


interface Props {
  color: string;
}

const Container = styled.div`
  padding: 3%;
  height: calc(100vh - 220px);
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: ${({ theme }) => theme.fontSizes.big};
`;

const Info = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text.opaqueInDark};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  margin: 20px 0;
`;

const Board = styled.div`
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  max-width: 1350px;

  .first-row {
    height: 70%;
  }

  .second-row {
    height: 30%;

    .box {
      width: 50%;

      textarea {
        height: 70%;
      }
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  .box {
    height: 50% !important;

    textarea {
      height: 80% !important;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Box = styled.div<Props>`
  background-color: ${({ theme }) => theme.colors.background.secundary};
  border: 1px solid ${({ color }) => color};
  border-radius: 5px;
  padding: 20px;
  margin-right: 25px;
  margin-bottom: 25px;
`;

const TitleBox = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text.opaqueInDark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: 20px;
  font-weight: bold;
`;

const TextArea = styled.textarea`
  display: block;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
  text-align: left;
  margin: 10px 0px 15px 0px;
  background: none;
  border: none;
  height: 90%;
  resize: none;
  width: 100%;


  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background.highlight};
    border-radius: 4px;
  }
`;


const Legend = styled.div`
  display: flex;
  margin-top: 20px;
`;

const LegenColor = styled.span<Props>`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: ${({ color }) => color};
`;

const LegendText = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  margin-left: 10px;
  margin-right: 50px;
`;

export default {
  Container,
  Title,
  Board,
  Info,
  Legend,
  LegenColor,
  LegendText,
  Box,
  Column,
  TitleBox,
  TextArea,
  Row,
};
