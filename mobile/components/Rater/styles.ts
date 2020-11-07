import { ViewComponent } from 'react-native';
import styled, { css } from 'styled-components/native';

interface OptionProps {
  isActive: boolean;
}

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Option = styled.TouchableOpacity<OptionProps>`
  flex-direction: row;

  background: ${({ theme }) => theme.colors.background.secundary};
  padding: 12px 20px;
  border-radius: 5px;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `};
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text.inDark};
`;

export default {
  Wrapper,
  Option,
  Text,
}
