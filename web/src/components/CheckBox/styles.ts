import styled, { css } from 'styled-components';

interface CheckboxProps {
  isChecked?: boolean;
  disabled?: boolean;
  color: string;
}

const Checkbox = styled.div<CheckboxProps>`
  border: 1px solid ${({ color }) => color};
  border-radius: 4px;
  width: 15px;
  height: 15px;
  cursor: pointer;

  ${({ isChecked, color }) =>
    isChecked &&
    css`
      background-color: ${color};
    `};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
    `};
`;

export default {
  Checkbox,
};
