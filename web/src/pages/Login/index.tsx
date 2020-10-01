import React from 'react';
import Styles from './styles';
import Logo from 'assets/images/logo_white.svg'
import { useTheme } from 'styled-components';

import { ReactComponent as UserIcon } from 'assets/svg/user.svg'
import { ReactComponent as PassIcon } from 'assets/svg/lock.svg'


const LoginPage: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Styles.Background>
      <Styles.LeftContainer>
        <Styles.Logo src={Logo} alt="Rankeer" />

        <Styles.Title>Participe <br/> Gerencie <br/>Avalie <br/> seus eventos Hackthons.</Styles.Title>
      </Styles.LeftContainer>

      <Styles.RightContainer>
        <Styles.Welcome>Seja Bem-vindo!</Styles.Welcome>

        <Styles.Form>
          <Styles.InputWrapper>
            <UserIcon stroke={colors.icon.inDark} width="20" />

            <Styles.Input type="email" />
          </Styles.InputWrapper>

          <Styles.InputWrapper>
            <PassIcon stroke={colors.icon.inDark} width="20" />

            <Styles.Input />
          </Styles.InputWrapper>

          <Styles.Submit>Entrar</Styles.Submit>
        </Styles.Form>
      </Styles.RightContainer>
    </Styles.Background>
  );
};

export default LoginPage;
