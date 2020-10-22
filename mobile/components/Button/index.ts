import styled from 'styled-components/native';

interface Props {
  color: string;
}

const Wrapper = styled.TouchableHighlight<Props>`
  background-color: ${(props) => props.color};
  border-radius: 5px;
  width: 100%;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: 18px;
  text-align: center;
  padding: 10px;
`;

export default {
  Wrapper,
  Text,
};
