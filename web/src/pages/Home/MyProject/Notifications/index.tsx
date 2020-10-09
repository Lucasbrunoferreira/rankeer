import React from 'react';
import Styles from './styles';

import { ReactComponent as BellIcon } from 'assets/svg/bell.svg'

const Notifications: React.FC = () => {
  return (
    <Styles.Box>
      <Styles.TitleWrapper>
        <BellIcon width={20} />

        <Styles.Title>Mensagens do organizador</Styles.Title>
      </Styles.TitleWrapper>

      <Styles.Messages>
        {false ? (
          <Styles.Empty>Nenhuma mensagem foi enviada ainda.</Styles.Empty>
        ) : null}

        <Styles.Message>20:19h - Prazo de entrega proximo!!</Styles.Message>

        <Styles.Message>17:30h - Proxima palesta será as 18h</Styles.Message>

        <Styles.Message>16:25h - Bem vindos ao evento.</Styles.Message>
      </Styles.Messages>
    </Styles.Box>
  );
};

export default Notifications;
