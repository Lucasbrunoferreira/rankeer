import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';

interface Props {
  color: string;
}

interface ColorPickerProps {
  isVisible: boolean;
}

const Container = styled.div<Props>`
  background-color: ${({ theme }) => theme.colors.background.secundary};
  padding: 50px 30px 20px 20px;
  width: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  hr {
    border: 1px solid ${prop('color')};
  }
`;

const Infos = styled.div`
  display: block;
`;

const Configs = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Title = styled.input`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.large};
  text-align: center;
  margin-bottom: 15px;
  background: none;
  border: none;
  width: 100%;
`;

const Description = styled.textarea`
  display: block;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
  text-align: left;
  margin: 30px 0px 15px 0px;
  background: none;
  border: none;
  height: 170px;
  resize: none;
`;

const TagsList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  margin: 3px 5px;
  color: ${props => props.theme.colors.text.opaqueInDark};
  cursor: pointer;

  :hover {
    text-decoration: line-through;
  }
`;

const InputTag = styled.input`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
  background: none;
  border: none;
  width: 100%;
  margin: 5px 0px 0px 3px;
`;

const SubTitle = styled.span`
  display: block;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.small};
  text-align: left;
  font-weight: bold;
  margin-left: 5px;
`;

const ImpactPhraseSubTitle = styled(SubTitle)`
  margin-top: 35px;
`;

const ImpactPhrase = styled.textarea`
  display: block;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
  text-align: left;
  margin: 8px 0px 30px 3px;
  background: none;
  border: none;
  height: 60px;
  resize: none;
`;

const ColorCircle = styled.div<Props>`
  display: block;
  background: ${prop('color')};
  min-width: 20px;
  height: 20px;
  border-radius: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const ListColors = styled.div<ColorPickerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  top: -30px;
  left: -10px;
  width: 0px;
  opacity: 0;
  visibility: hidden;
  transition: all ease 1s;

  ${ifProp("isVisible", css`
    width: 210px;
    visibility: visible;
    opacity: 1;
  `)}
`;

export default {
  Container,
  Title,
  Description,
  TagsList,
  Tag,
  InputTag,
  SubTitle,
  ImpactPhrase,
  Configs,
  Infos,
  ColorCircle,
  ListColors,
  ImpactPhraseSubTitle,
};
