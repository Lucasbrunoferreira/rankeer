import styled from 'styled-components/native';

interface Props {
  color: string;
}

const Divider = styled.View<Props>`
  width: 100%;
  height: 2px;
  margin-top: 30px;
  margin-bottom: 20px;

  background-color: ${(props) => props.color};
`;

export default Divider;
