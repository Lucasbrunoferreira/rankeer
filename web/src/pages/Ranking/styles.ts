import styled from 'styled-components';
import { prop } from 'styled-tools';

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  position: relative;
  padding: 0 5%;
`;

const ImageBackground = styled.img`
  display: block;
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const Logo = styled.img`
  display: block;
  width: 290px;
`;

const Header = styled.header`
  padding-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.span`
  display: block;
  margin-left: 10px;
`;

const Blob = styled.div`
	border-radius: 50%;
	display: flex;
  align-items: center;
  justify-content: center;
	height: 27px;
	width: 27px;

	box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
	transform: scale(1);
	animation: pulse 2s infinite;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.big};
  margin-top: 30px;
  margin-left: 10px;
`;

const List = styled.ul`
  margin-top: 80px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px ${props => props.theme.colors.text.opaqueInDark} solid;
  justify-content: space-between;
  padding: 10px;
`;

const Position = styled.span`
  display: block;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.giant};
  margin-right: 100px;
`;

const Color = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${prop('color')};
`;

const Name = styled.span`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.large};
  margin: 0px 80px 0px 10px;
  min-width: 200px;
`;

const Phrase = styled.span`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.medium};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
`;

const Punctuation = styled.span`
  display: block;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.big};
`;

const Empty = styled.span`
  display: block;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.big};
  text-align: center;
  margin-top: 200px;
`;

export default {
  List,
  Punctuation,
  Details,
  Name,
  Phrase,
  Color,
  Position,
  Item,
  Container,
  InfoWrapper,
  Info,
  ImageBackground,
  Logo,
  Blob,
  Header,
  Title,
  Empty,
};
