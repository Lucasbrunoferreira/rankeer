import React from 'react';
import Styles from './styles';

import { ReactComponent as BookIcon } from 'assets/svg/book.svg'
import useProjectContext from 'hooks/useProjectContext';

const Annotations: React.FC = () => {
  const { annotations, color, updateProjectData } = useProjectContext();

  return (
    <Styles.Box color={color} className="box">
      <Styles.TitleWrapper>
        <BookIcon width={20} />

        <Styles.Title>Anotações</Styles.Title>
      </Styles.TitleWrapper>

      <hr />

      <Styles.Text
        placeholder="Insira aqui anotações que você e sua equipe acharem relevantes."
        spellCheck={false}
        defaultValue={annotations}
        onBlur={(e) => updateProjectData({ annotations: e.target.value })}
      />
    </Styles.Box>
  );
};

export default Annotations;
