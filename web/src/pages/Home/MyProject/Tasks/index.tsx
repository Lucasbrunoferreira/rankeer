import React, { useRef, KeyboardEvent, useState } from 'react';
import Styles from './styles';
import useProjectContext from 'hooks/useProjectContext';
import { CheckBox } from 'components';

import { ReactComponent as CheckIcon } from 'assets/svg/check.svg'
import { ReactComponent as LoadingIcon } from 'assets/svg/loading.svg'


const Tasks: React.FC = () => {
  const { tasks, color, saveTask, setTaskStatus } = useProjectContext();
  const inputRef = useRef(null);

  const [isLoading, setLoading] = useState(false)

  const handleSaveTask = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setLoading(true)
      saveTask(event.currentTarget.value).finally(() => setLoading(false))

      inputRef?.current?.blur();
      inputRef.current.value = '';
    }
  }

  return (
    <Styles.Box className="box">
      {isLoading ? (<Styles.Loading>
        <LoadingIcon width="60" height="60" />
      </Styles.Loading>) : null}

      <Styles.TitleWrapper>
        <CheckIcon width={20} />

        <Styles.Title>Tarefas a serem realizadas</Styles.Title>

        <Styles.Input
            ref={inputRef}
            onKeyDown={handleSaveTask}
            onBlur={() => inputRef.current.value = ''}
            placeholder="Insira uma nova tarefa"
          />
      </Styles.TitleWrapper>


      {tasks?.length <= 0 ? (
        <Styles.Empty>Cadastre aqui as tarefas do projeto que a equipe precisa desenvolver.</Styles.Empty>
      ) : null}

      <Styles.List>
        {tasks?.map((task, index) => (
          <Styles.Item key={index}>
            <CheckBox initialValue={task.is_done} color={color} onChangeValue={(value) => setTaskStatus(task.id, value)} />

            <Styles.Description>{task.description}</Styles.Description>
          </Styles.Item>
        ))}
      </Styles.List>
    </Styles.Box>
  );
};

export default Tasks;
