import React, { useRef } from 'react';
import { Screen, Box, Divider, Button, Text } from '../../components';
import Styles from './styles';
import { Image, TextInput } from 'react-native'
import { useTheme } from 'styled-components';

const Login: React.FC = () => {
  const { colors } = useTheme();
  const passwordInput = useRef<TextInput>(null);

  const handleSubmit = () => {
    console.log('submited!')
  };

  return (
    <Screen.Wrapper>
      <Styles.Container>
        <Styles.Logo source={require('../../assets/logo.png')} />

        <Text.Title>Avaliações de projetos na palma da sua mão.</Text.Title>

        <Styles.WrapperFields>
          <Styles.Field keyboardType="email-address" placeholder="usuario@email.com" returnKeyType="next" onSubmitEditing={() => passwordInput?.current?.focus()} />

          <Styles.Field secureTextEntry placeholder="senha" ref={passwordInput} onSubmitEditing={handleSubmit} />
        </Styles.WrapperFields>

        <Button.Wrapper color={colors.primary} onPress={handleSubmit}>
          <Button.Text>Entrar</Button.Text>
        </Button.Wrapper>
      </Styles.Container>
    </Screen.Wrapper>
  )
}

export default Login;
