import React, { useEffect, useState, useContext } from 'react';
import { Screen, Box, Text } from '../../components';
import { FlatList } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import projectService from '../../services/projects';
import { showMessage } from 'react-native-flash-message'
import { Project } from '../../interfaces/Project';
import { useTheme } from 'styled-components';
import { EvaluationContext } from '../../context/Evaluation';
import { useNavigation } from '@react-navigation/native';

const Projects: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);


  const { setProject, user, event } = useContext(EvaluationContext);
  const navigation = useNavigation();

  const { colors } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      projectService.getAll(event.id)
        .then((result) => {
          setProjects(result.data)
        })
        .catch(() => {
          showMessage({
            message: 'Algo inesperado ao carregar os projetos!',
            type: 'danger'
          })
        })
        .finally(() => {
          setLoading(false);
        })
    };

    fetchData();
  }, [])

  const handleSelectedProject = (project: Project) => {
    setProject(project);
    navigation.navigate('Evaluation');
  }

  const renderItem = (project: Project) => (
    <Box.Container color={project.color} onPress={() => handleSelectedProject(project)}>
      <Box.Title>{project.name}</Box.Title>

      <Box.SubTitle>{project.impact_phrase}</Box.SubTitle>
    </Box.Container>
  );

  return (
    <Screen.Wrapper>
      <Text.HyperTitle>Olá, {user.name}!</Text.HyperTitle>

      <Text.Title>Bem vindo a {event.name}!</Text.Title>

      <Text.SubTitle>Selecione um projeto para realizar a avaliação!</Text.SubTitle>

      <FlatList
        data={projects}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={project => project.id.toString()}
      />

      <Spinner
        visible={isLoading}
        animation="fade"
        overlayColor="rgba(0, 0, 0, 0.55)"
      />
    </Screen.Wrapper>
  )
}


export default Projects;
