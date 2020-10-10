import React from 'react';
import Styles from './styles';

import { ReactComponent as UsersIcon } from 'assets/svg/users.svg'
import useProjectContext from 'hooks/useProjectContext';

const CountMembers: React.FC = () => {
  const { members } = useProjectContext();

  return (
    <Styles.Box className="box">
      <Styles.TitleWrapper>
        <UsersIcon width={20} />

        <Styles.Title>Total de integrantes</Styles.Title>
      </Styles.TitleWrapper>

      <Styles.Count>
        {members.length}
      </Styles.Count>
    </Styles.Box>
  );
};

export default CountMembers;
