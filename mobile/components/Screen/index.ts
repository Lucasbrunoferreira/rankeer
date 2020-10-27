import styled from 'styled-components/native';

const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding: 60px 40px;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export default { Wrapper };
