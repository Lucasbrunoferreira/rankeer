import styled from 'styled-components';


interface Props {
  color: string;
}

const Container = styled.div`
  padding: 3%;
  height: calc(100vh - 220px);
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.big};
`;

const Wrapper = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 380px;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
  background-color: ${props => props.theme.colors.background.secundary};
`;

const Button = styled.button<Props>`
  border: none;
  background-color: ${({ color }) => color};
  border-radius: 3px;
  display: flex;
  align-items: center;
  margin-left: 30px;
  padding: 5px;
  transition: all ease 0.8s;
  cursor: pointer;

  :hover {
    opacity: 0.7;
    transform: scale(1.08);
  }
`;

const BtnText = styled.span`
  margin-left: 5px;
  text-align: center;
  font-weight: bold;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 80px;
`;

const Item = styled.li`
  background-color: ${props => props.theme.colors.background.secundary};
  border-radius: 5px;
  padding: 25px;
  margin-right: 30px;
  margin-bottom: 30px;
  position: relative;
`;

const Initials = styled.span`
  display: block;
  position: absolute;
  color: ${props => props.theme.colors.text.inLight};
  background-color: ${props => props.theme.colors.text.inDark};
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  margin: 0px 15px;
  top: -10px;
  left: -22px;
`;

const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ItemTitle = styled.span`
  display: block;
  color: ${props => props.theme.colors.text.inDark};
  font-size: ${props => props.theme.fontSizes.regular};
  font-weight: bold;
  margin-left: 10px;
`;

const Name = styled(ItemTitle)`
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 0;
`;

const Email = styled.span`
  display: block;
`;

const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
`;

const Skill = styled.li`
  margin-right: 10px;
  margin-bottom: 5px;
  color: ${props => props.theme.colors.text.opaqueInDark};
  font-size: ${props => props.theme.fontSizes.regular};
`;

export default {
  Container,
  Title,
  Skill,
  Email,
  Skills,
  ItemTitle,
  WrapperTitle,
  Initials,
  Item,
  List,
  BtnText,
  Button,
  Input,
  Wrapper,
  Name,
};
