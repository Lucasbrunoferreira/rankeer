import React from 'react';
import Styles from './styles';

import SideInfo from './SideInfo';

const MyProject: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Wrapper>
        <h1>Meu Projeto</h1>
      </Styles.Wrapper>

      <SideInfo />
    </Styles.Container>
  );
};

export default MyProject;
