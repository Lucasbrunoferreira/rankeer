import React, { useEffect } from 'react';
import Styles from './styles';
import useProjectContext from 'hooks/useProjectContext';
import { Loading } from 'components';

const BusinessModel: React.FC = () => {
  const { saveBusinessModel, businessModel, isLoading, fetchProjectData } = useProjectContext();

  useEffect(() => {
    fetchProjectData()

    // eslint-disable-next-line
  }, [])

  return (
    <Styles.Container>
      <Loading isLoading={isLoading} />

      <Styles.Title>Modelo de Negócios - Canvas</Styles.Title>

      <Styles.Info>
        O Business Model Canvas ou "Quadro de modelo de negócios" é uma ferramenta de gerenciamento estratégico,
        que permite desenvolver e esboçar modelos de negócio novos ou existentes.<br /> É um mapa visual pré-formatado contendo
        nove blocos do modelo de negócios.
      </Styles.Info>

      <Styles.Board>
        <Styles.Row className="first-row">
          <Styles.Box className="box" color="#3498DB">
            <Styles.TitleBox>Parcerias chave</Styles.TitleBox>

            <Styles.TextArea spellCheck={false} defaultValue={businessModel?.partnerships} onBlur={(e) => saveBusinessModel({ ...businessModel, partnerships: e.target.value })} />
          </Styles.Box>

          <Styles.Column>
            <Styles.Box className="box" color="#3498DB">
              <Styles.TitleBox>Ativadades chave</Styles.TitleBox>

              <Styles.TextArea spellCheck={false} defaultValue={businessModel?.activities} onBlur={(e) => saveBusinessModel({ ...businessModel, activities: e.target.value })} />
            </Styles.Box>

            <Styles.Box className="box" color="#3498DB">
              <Styles.TitleBox>Recursos chave</Styles.TitleBox>

              <Styles.TextArea spellCheck={false} defaultValue={businessModel?.resources} onBlur={(e) => saveBusinessModel({ ...businessModel, resources: e.target.value })} />
            </Styles.Box>
          </Styles.Column>

          <Styles.Box className="box" color="#E74C3C">
            <Styles.TitleBox>Oferta de valor</Styles.TitleBox>

            <Styles.TextArea spellCheck={false} defaultValue={businessModel?.value_offering} onBlur={(e) => saveBusinessModel({ ...businessModel, value_offering: e.target.value })} />
          </Styles.Box>

          <Styles.Column>
            <Styles.Box className="box" color="#27AE60">
              <Styles.TitleBox>Relacionamento</Styles.TitleBox>

              <Styles.TextArea spellCheck={false} defaultValue={businessModel?.relationship} onBlur={(e) => saveBusinessModel({ ...businessModel, relationship: e.target.value })} />
            </Styles.Box>

            <Styles.Box className="box" color="#27AE60">
              <Styles.TitleBox>Canais</Styles.TitleBox>

              <Styles.TextArea spellCheck={false} defaultValue={businessModel?.channels} onBlur={(e) => saveBusinessModel({ ...businessModel, channels: e.target.value })} />
            </Styles.Box>
          </Styles.Column>

          <Styles.Box className="box" color="#27AE60">
            <Styles.TitleBox>Segmento de clientes</Styles.TitleBox>

            <Styles.TextArea spellCheck={false} defaultValue={businessModel?.customer_segment} onBlur={(e) => saveBusinessModel({ ...businessModel, customer_segment: e.target.value })} />
          </Styles.Box>
        </Styles.Row>

        <Styles.Row className="second-row">
            <Styles.Box className="box" color="#F39C12">
              <Styles.TitleBox>Estrutura de custos</Styles.TitleBox>

              <Styles.TextArea spellCheck={false} defaultValue={businessModel?.cost_structure} onBlur={(e) => saveBusinessModel({ ...businessModel, cost_structure: e.target.value })} />
            </Styles.Box>

          <Styles.Box className="box" color="#F39C12">
            <Styles.TitleBox>Fontes de receita</Styles.TitleBox>

            <Styles.TextArea spellCheck={false} defaultValue={businessModel?.revenue_sources} onBlur={(e) => saveBusinessModel({ ...businessModel, revenue_sources: e.target.value })} />
          </Styles.Box>
        </Styles.Row>
      </Styles.Board>

      <Styles.Legend>
        <Styles.LegenColor color="#3498DB" />
        <Styles.LegendText>Como ?</Styles.LegendText>

        <Styles.LegenColor color="#E74C3C" />
        <Styles.LegendText>O Que ?</Styles.LegendText>

        <Styles.LegenColor color="#27AE60" />
        <Styles.LegendText>Para quem ?</Styles.LegendText>

        <Styles.LegenColor color="#F39C12" />
        <Styles.LegendText>Quanto?</Styles.LegendText>
      </Styles.Legend>
    </Styles.Container>
  );
};

export default BusinessModel;
