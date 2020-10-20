import styled from 'styled-components/native';

interface Props {
  color: string;
}

const Button = styled.Button<Props>`
  background-color: ${(props) => props.color};
  padding: 10px;
  border-radius: 8px;
  margin-top: 50px;
`;


export default Button;
