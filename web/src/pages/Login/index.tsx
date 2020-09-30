import React from 'react';
import Styles from './styles';
import Logo from 'assets/images/logo_white.svg'

const LoginPage: React.FC = () => {
  return (
    <Styles.Background>
      <Styles.LeftContainer>
        <Styles.Logo src={Logo} alt="Rankeer" />

        <Styles.Title>Participe <br/> Gerencie <br/>Avalie <br/> seus eventos Hackthons.</Styles.Title>
      </Styles.LeftContainer>

      <Styles.RightContainer>
        <Styles.Welcome>Seja Bem-vindo!</Styles.Welcome>
      </Styles.RightContainer>
    </Styles.Background>
  );
};

export default LoginPage;
