import React, { useContext, useState } from 'react';
import { Screen, Text, Divider, Button, Rater } from '../../components';
import { EvaluationContext } from '../../context/Evaluation';
import { useNavigation } from '@react-navigation/native';
import Styles from './styles';
import { useTheme } from 'styled-components';
import { Evaluation as Evalut } from '../../interfaces/Evaluation';
import evaluationService from '../../services/evaluation';
import { showMessage } from 'react-native-flash-message'

const Evaluation: React.FC = () => {
  const { project, user } = useContext(EvaluationContext);
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [evaluation, setEvaluation] = useState<Evalut>({
    aspects: 0,
    innovation: 0,
    presentation: 0,
    reach: 0,
    viability: 0
  });

  const handleSubmit = () => {
    console.log(evaluation)

    evaluationService
      .sendEvaluation(project.id, user.id, evaluation)
      .then(() => {
        showMessage({
          message: 'Avaliação realizada com sucesso!',
          type: 'success'
        })

        navigation.goBack();
      })
      .catch((err) => {
        console.log(err);
        showMessage({
          message: 'Algo inesperado ao realizar a avaliação.',
          type: 'danger'
        })
      })

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

        <Rater onChange={(presentation) => setEvaluation({ ...evaluation, presentation })} />

        <Text.Spotlight>Inovação</Text.Spotlight>

        <Rater onChange={(innovation) => setEvaluation({ ...evaluation, innovation })} />

        <Text.Spotlight>Viabilidade</Text.Spotlight>

        <Rater onChange={(viability) => setEvaluation({ ...evaluation, viability })} />

        <Text.Spotlight>Alcance de público</Text.Spotlight>

        <Rater onChange={(reach) => setEvaluation({ ...evaluation, reach })} />

        <Text.Spotlight>Aspectos gerais</Text.Spotlight>

        <Rater onChange={(aspects) => setEvaluation({ ...evaluation, aspects })} />
      </Styles.ListEvaluations>

      <Styles.BtnsWrapper>
        <Button.Wrapper color={colors.primary} onPress={handleSubmit}>
          <Button.Text>Finalizar avaliação</Button.Text>
        </Button.Wrapper>

        <Button.Wrapper color={colors.secundary} onPress={() => navigation.goBack()}>
          <Button.Text>Cancelar</Button.Text>
        </Button.Wrapper>
      </Styles.BtnsWrapper>
    </Screen.Wrapper>
  )
}

export default Evaluation;
