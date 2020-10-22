import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.Image``;

const WrapperFields = styled.View`
  width: 100%;
`;

const Field = styled.TextInput`
  width: 100%;
  background-color: #FFF;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
`;

export default {
  Logo,
  Container,
  Field,
  WrapperFields
}
