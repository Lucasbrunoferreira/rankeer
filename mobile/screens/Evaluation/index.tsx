import React, { useContext } from 'react';
import { Screen, Text, Divider, Button, Rater } from '../../components';
import { EvaluationContext } from '../../context/Evaluation';
import { useNavigation } from '@react-navigation/native';
import Styles from './styles';
import { useTheme } from 'styled-components';

const Evaluation: React.FC = () => {
  const { project } = useContext(EvaluationContext);
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('Submit avaliação!')
  }

  return (
    <Screen.Wrapper>
      <Text.HyperTitle>{project.name}</Text.HyperTitle>

      <Divider color={project.color} />

      <Text.Title>{project.impact_phrase}</Text.Title>

      <Text.SubTitle>{project.description}</Text.SubTitle>

      <Text.Title>Avalie os seguintes tópicos, sendo 1 péssiimo e 5 excelente:</Text.Title>

      <Styles.ListEvaluations>
        <Text.Spotlight>Apresentação</Text.Spotlight>

        <Rater onChange={(value) => console.log(value)} />

        <Text.Spotlight>Inovação</Text.Spotlight>

        <Rater onChange={(value) => console.log(value)} />

        <Text.Spotlight>Viabilidade</Text.Spotlight>

        <Rater onChange={(value) => console.log(value)} />

        <Text.Spotlight>Alcance de público</Text.Spotlight>

        <Rater onChange={(value) => console.log(value)} />

        <Text.Spotlight>Aspectos gerais</Text.Spotlight>

        <Rater onChange={(value) => console.log(value)} />
      </Styles.ListEvaluations>

      <Styles.BtnsWrapper>
        <Button.Wrapper color={colors.primary} onPress={handleSubmit}>
          <Button.Text>Finalizar avaliação</Button.Text>
        </Button.Wrapper>

        <Button.Wrapper color={colors.secundary} onPress={() => navigation.navigate('Projects')}>
          <Button.Text>Cancelar</Button.Text>
        </Button.Wrapper>
      </Styles.BtnsWrapper>
    </Screen.Wrapper>
  )
}

export default Evaluation;
