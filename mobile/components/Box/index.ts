import styled from 'styled-components/native';

interface Props {
  color: string;
}

const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  padding: 30px;

  background: ${({ theme }) => theme.colors.background.secundary};

  border-radius: 10px;
  border-right-color: ${(props) => props.color};
  border-right-width: 12px;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: 20px;
  margin-bottom: 15px;
`;

const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: 14px;
`;

export default { Container, Title, SubTitle };
