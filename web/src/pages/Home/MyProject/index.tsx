import React from 'react';
import Styles from './styles';

import SideInfo from './SideInfo';
import Notifications from './Notifications';
import Links from './Links';

const MyProject: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.Row>
          <Notifications />

          <Links />
        </Styles.Row>
      </Styles.Wrapper>

      <SideInfo />
    </Styles.Container>
  );
};

export default MyProject;
