import React, { useRef, useState } from 'react';
import { Screen, Box, Divider, Button, Text } from '../../components';
import Styles from './styles';
import { Image, TextInput } from 'react-native'
import { useTheme } from 'styled-components';
import authService from '../../services/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import { showMessage } from 'react-native-flash-message'
import { setToken } from '../../storage/token';
import { setUser } from '../../storage/user';


const Login: React.FC = () => {
  const { colors } = useTheme();
  const passwordInput = useRef<TextInput>(null);

  const [isLoading, setLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [password, setPasword] = useState<string>('');

  const handleSubmit = () => {
    setLoading(true)

    authService
      .login(email, password)
      .then((res) => {
        setToken(res.data?.token)
        setUser(res.data?.user)
        showMessage({
          message: 'Bem vindo!',
          type: 'success'
        })
      })
      .catch(() => {
        showMessage({
          message: 'Verifique seu e-mail e senha.',
          type: 'danger'
        })
        setLoading(false)
      })
  };

  return (
    <Screen.Wrapper>
      <Styles.Container>
        <Styles.Logo source={require('../../assets/logo.png')} />

        <Text.Title>Avaliações de projetos na palma da sua mão.</Text.Title>

        <Styles.WrapperFields>
          <Styles.Field onChangeText={(value) => setEmail(value)} keyboardType="email-address" placeholder="usuario@email.com" returnKeyType="next" onSubmitEditing={() => passwordInput?.current?.focus()} />

          <Styles.Field onChangeText={(value) => setPasword(value)} secureTextEntry placeholder="senha" ref={passwordInput} onSubmitEditing={handleSubmit} />
        </Styles.WrapperFields>

        <Button.Wrapper color={colors.primary} onPress={handleSubmit}>
          <Button.Text>Entrar</Button.Text>
        </Button.Wrapper>
      </Styles.Container>

      <Spinner
        visible={isLoading}
        animation="fade"
        overlayColor="rgba(0, 0, 0, 0.55)"
      />
    </Screen.Wrapper>
  )
}

export default Login;
