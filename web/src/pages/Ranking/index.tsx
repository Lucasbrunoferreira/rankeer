import React from 'react';
import Styles from './styles';

import RankingImage from 'assets/images/ranking.svg'
import Logo from 'assets/images/logo_white.svg'

import { ReactComponent as RadioIcon } from 'assets/svg/radio.svg'
import { ReactComponent as AwardIcon } from 'assets/svg/award.svg'

const Ranking: React.FC = () => {
  return (
    <Styles.Container>
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

      <Styles.Title> <AwardIcon width={25} /> Infoweek 2020 - Resultados</Styles.Title>

      <Styles.List>
        <Styles.Item>
          <Styles.Details>
            <Styles.Position>1</Styles.Position>

            <Styles.Color />

            <Styles.Name>First Aid</Styles.Name>

            <Styles.Phrase>Baixe o App hoje, salve uma vida amanhã</Styles.Phrase>
          </Styles.Details>

          <Styles.Punctuation>36 pontos</Styles.Punctuation>
        </Styles.Item>

        <Styles.Item>
          <Styles.Details>
            <Styles.Position>1</Styles.Position>

            <Styles.Color />

            <Styles.Name>First Aid</Styles.Name>

            <Styles.Phrase>Baixe o App hoje, salve uma vida amanhã</Styles.Phrase>
          </Styles.Details>

          <Styles.Punctuation>36 pontos</Styles.Punctuation>
        </Styles.Item>

        <Styles.Item>
          <Styles.Details>
            <Styles.Position>1</Styles.Position>

            <Styles.Color />

            <Styles.Name>First Aid</Styles.Name>

            <Styles.Phrase>Baixe o App hoje, salve uma vida amanhã</Styles.Phrase>
          </Styles.Details>

          <Styles.Punctuation>36 pontos</Styles.Punctuation>
        </Styles.Item>
      </Styles.List>
    </Styles.Container>
  );
};

export default Ranking;
