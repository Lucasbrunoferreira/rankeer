import React, { FormEvent, useState } from 'react';
import Styles from './styles';
import Logo from 'assets/images/logo_white.svg'
import { useTheme } from 'styled-components';
import { validateEmail } from 'helpers/validators/email';

import { ReactComponent as UserIcon } from 'assets/svg/user.svg'
import { ReactComponent as PassIcon } from 'assets/svg/lock.svg'
import { ReactComponent as Loading } from 'assets/svg/loading.svg'

const LoginPage: React.FC = () => {
  const { colors } = useTheme();

  const [email, setEmail] = useState({ value: '', isValid: true });
  const [password, setPassword] = useState({ value: '', isValid: true });

  const [isLoading, setLoading] = useState(false);

  const submitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidEmail = validateEmail(email.value);
    const isValidPass = password.value.length > 0;

    setEmail({ ...email, isValid: isValidEmail })
    setPassword({ ...password, isValid: isValidPass })

    if (isValidEmail && isValidPass) {
      setLoading(true);
      console.log({ email, password })
    }
  }

  return (
    <Styles.Background>
      <Styles.LeftContainer>
        <Styles.Logo src={Logo} alt="Rankeer" />

        <Styles.Title>Participe <br/> Gerencie <br/>Avalie <br/> seus eventos Hackthons.</Styles.Title>
      </Styles.LeftContainer>

      <Styles.RightContainer>
        <Styles.Welcome>Seja Bem-vindo!</Styles.Welcome>

        <Styles.Form onSubmit={submitLogin}>
          <Styles.InputWrapper isInvalid={!email.isValid}>
            <UserIcon stroke={colors.icon.inDark} width="20" />

            <Styles.Input onChange={(e) => setEmail({ ...email, value: e.target.value })} placeholder="e-mail" />
          </Styles.InputWrapper>

          {!email.isValid ? <Styles.ErrorMessage>Insira um e-mail válido</Styles.ErrorMessage> : null}

          <Styles.InputWrapper isInvalid={!password.isValid} >
            <PassIcon stroke={colors.icon.inDark} width="20" />

            <Styles.Input type="password" onChange={(e) => setPassword({ ...password, value: e.target.value })} placeholder="senha" />
          </Styles.InputWrapper>

          {!password.isValid ? <Styles.ErrorMessage>Informe a senha</Styles.ErrorMessage> : null}

          <Styles.ForgotPass>Esqueceu a senha?</Styles.ForgotPass>

          <Styles.Submit disabled={isLoading}>
            {isLoading ? <Loading width="35" height="35" /> : <span>Entrar</span> }
          </Styles.Submit>

          <Styles.CreatAccount>Não possui uma conta? Crie agora mesmo.</Styles.CreatAccount>
        </Styles.Form>
      </Styles.RightContainer>
    </Styles.Background>
  );
};

export default LoginPage;
