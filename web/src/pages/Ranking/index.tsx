import React, { useEffect, useState } from 'react';
import Styles from './styles';
import { Loading } from 'components';
import evaluationService from 'services/evaluation';
import { useParams } from 'react-router-dom';

import RankingImage from 'assets/images/ranking.svg';
import Logo from 'assets/images/logo_white.svg';

import { ReactComponent as RadioIcon } from 'assets/svg/radio.svg';
import { ReactComponent as AwardIcon } from 'assets/svg/award.svg';
import useFlashMessage from 'hooks/useFlashMessage';
import { getSocketClient } from 'services/socket';

interface ProjectResult {
  color: string;
  id: number;
  impact_phrase: string;
  name: string;
  points: number;
}

const Ranking: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const { eventId } = useParams();
  const { setMessage } = useFlashMessage();
  const [results, setResults] = useState<ProjectResult[]>([])

  const [eventName, setEventName] = useState<string>(null)

  const socketInstance = getSocketClient()

  useEffect(() => {
    setLoading(true)

    evaluationService
    .gerResultsByEvent(eventId)
      .then((result) => {
        setResults(result.data)
        setEventName(result.data[0].event)
      })
      .catch((err) => {
        setMessage('Algo inesperado ao carregar os resultados do evento!')
      })
      .finally(() => setLoading(false))

    socketInstance.on(`@EVALUATION-${eventId}`, (data: any) => setResults(data))

  // eslint-disable-next-line
  }, [eventId])

  return (
    <Styles.Container>
      <Loading isLoading={isLoading} />

      <Styles.ImageBackground src={RankingImage} />

      <Styles.Header>
        <Styles.Logo src={Logo} />

        <Styles.InfoWrapper>
          <Styles.Blob>
            <RadioIcon width={25} />
          </Styles.Blob>

          <Styles.Info>Avaliações em tempo real</Styles.Info>
        </Styles.InfoWrapper>
      </Styles.Header>

      <Styles.Title> <AwardIcon width={25} /> { eventName } - Resultados</Styles.Title>

      {!results || results.length <= 0 ? (<Styles.Empty>As avaliações para este evento não estão disponíveis.</Styles.Empty>) : null}

      <Styles.List>
        {results.map((result, index) => (
        <Styles.Item key={result.id}>
          <Styles.Details>
            <Styles.Position>{index + 1}</Styles.Position>

            <Styles.Color color={result.color} />

            <Styles.Name>{result.name}</Styles.Name>

            <Styles.Phrase>{result.impact_phrase}</Styles.Phrase>
          </Styles.Details>

          <Styles.Punctuation>{result.points} pontos</Styles.Punctuation>
        </Styles.Item>
        ))}
      </Styles.List>
    </Styles.Container>
  );
};

export default Ranking;
