import React, { useEffect } from 'react';
import Styles from './styles';
import useProjectContext from 'hooks/useProjectContext';

import SideInfo from './SideInfo';
import Notifications from './Notifications';
import Links from './Links';
import CountMembers from './CountMembers';
import Annotations from './Annotations';
import Tasks from './Tasks';

const MyProject: React.FC = () => {
  const { fetchProjectData } = useProjectContext();

  useEffect(() => {
    fetchProjectData()
    //eslint-disable-next-line
  }, [])

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.Row>
          <Notifications />

          <Links />

          <CountMembers />
        </Styles.Row>

        <Styles.Row>
          <Tasks />
        </Styles.Row>

        <Styles.Row>
          <Annotations />
        </Styles.Row>
      </Styles.Wrapper>

      <SideInfo />
    </Styles.Container>
  );
};

export default MyProject;
