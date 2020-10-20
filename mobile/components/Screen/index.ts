import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  padding: 60px 40px;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export default { Wrapper };
