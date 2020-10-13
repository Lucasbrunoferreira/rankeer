import React, { useState } from 'react';
import Styles from './styles';
import InternaLayout from 'layouts/Internal';
import EmptyImage from 'assets/images/empty.svg'
import { getCurrentEvent } from 'helpers/localStorage/currentEvent';
import projectService from 'services/project';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Loading } from 'assets/svg/loading.svg'
import { setCurrentProject } from 'helpers/localStorage/currentProject';

const NewProject: React.FC = () => {
  const currentEvent = getCurrentEvent();
  const history = useHistory();

  const [code, setCode] = useState('');
  const [projectName, setProjectName] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleCreateProject = () => {
    setLoading(true)
    projectService
      .createProject(projectName, currentEvent.id)
      .then((res) => {
        const { name, id } = res.data
        setCurrentProject(name, id)
        history.replace('/home/meu-projeto')
      })
  }

  const handleParticipateProjectByCode = () => {
    console.log('handleParticipateProjectByCode')
  }

  return (
    <InternaLayout hiddenSideMenu>
      <Styles.Container>
        <Styles.TitleWrapper>
          <Styles.Title>Bem vindo ao { currentEvent.name }</Styles.Title>

          <Styles.EmptyImage src={EmptyImage} />
        </Styles.TitleWrapper>

        <Styles.Options>
          <Styles.OptionWrapper>
            <Styles.Text>Você possui o código para participar de um projeto?</Styles.Text>

            <Styles.Input onChange={(e) => setCode(e.target.value)} placeholder="Insira o código" />

            <Styles.Button onClick={handleParticipateProjectByCode} disabled={!code}>participar</Styles.Button>
          </Styles.OptionWrapper>

          <Styles.OptionWrapper>
            <Styles.Text>Desejo iniciar um projeto</Styles.Text>

            <Styles.Input onChange={(e) => setProjectName(e.target.value)} placeholder="Insira o nome para o projeto" />

            <Styles.Button onClick={handleCreateProject} disabled={!projectName || isLoading}>
              {isLoading ? <Loading width="35" height="35" /> : <span>Entrar</span> }
            </Styles.Button>
          </Styles.OptionWrapper>
        </Styles.Options>
      </Styles.Container>
    </InternaLayout>
  );
};

export default NewProject;
