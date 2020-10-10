import React, { useRef, KeyboardEvent } from 'react';
import Styles from './styles';
import useProjectContext from 'hooks/useProjectContext';
import { CheckBox } from 'components';

import { ReactComponent as CheckIcon } from 'assets/svg/check.svg'
import { Task } from 'interfaces/Task';

const Tasks: React.FC = () => {
  const { tasks, color, setTasks } = useProjectContext();
  const inputRef = useRef(null);

  const handleSaveTask = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const newTask: Task = {
        description: event.currentTarget.value,
        isDone: false,
      }

      setTasks([newTask, ...tasks ])

      inputRef?.current?.blur();
      inputRef.current.value = '';
    }
  }

  return (
    <Styles.Box className="box">
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


      {tasks.length <= 0 ? (
        <Styles.Empty>Cadastre aqui as tarefas do projeto que a equipe precisa desenvolver.</Styles.Empty>
      ) : null}

      <Styles.List>
        {tasks.map((task, index) => (
          <Styles.Item key={index}>
            <CheckBox initialValue={task.isDone} color={color} onChangeValue={(value) => console.log(value)} />

            <Styles.Description>{task.description}</Styles.Description>
          </Styles.Item>
        ))}
      </Styles.List>
    </Styles.Box>
  );
};

export default Tasks;
