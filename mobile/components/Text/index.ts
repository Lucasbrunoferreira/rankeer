import styled from 'styled-components/native';

const Spotlight = styled.Text`
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const HyperTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: 28px;
  font-weight: bold;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.inDark};
  font-size: 18px;
  margin-bottom: 20px;
`;

const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text.opaqueInDark};
  font-size: 18px;
  margin-bottom: 40px;
`;

export default { HyperTitle, Title, SubTitle, Spotlight };
