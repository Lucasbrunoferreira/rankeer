import React from 'react';
import Styles from './styles';

import { ReactComponent as SendIcon } from 'assets/svg/send.svg'
import { ReactComponent as SkillIcon } from 'assets/svg/skill.svg'
import useProjectContext from 'hooks/useProjectContext';

const Team: React.FC = () => {
  const { color } = useProjectContext();

  return (
    <Styles.Container>
      <Styles.Title>Minha Equipe</Styles.Title>

      <Styles.Wrapper>
        <Styles.Input spellCheck={false} placeholder="Insira o e-mail para enviar um convite de equipe" />

        <Styles.Button color={color}>
          <SendIcon width={20} />
          <Styles.BtnText>Enviar</Styles.BtnText>
        </Styles.Button>
      </Styles.Wrapper>

      <Styles.List>
        <Styles.Item>
          <Styles.Initials>LB</Styles.Initials>

          <Styles.Name>Lucas Bruno Ferreira</Styles.Name>

          <Styles.Email>lucasburnoferreira@@gmail.com</Styles.Email>

          <Styles.WrapperTitle>
            <SkillIcon width={20} />

            <Styles.ItemTitle>Skills</Styles.ItemTitle>
          </Styles.WrapperTitle>

          <Styles.Skills>
            <Styles.Skill>#Programação</Styles.Skill>
            <Styles.Skill>#Designer</Styles.Skill>
            <Styles.Skill>#Trabalhoemequipe</Styles.Skill>
            <Styles.Skill>#Liderança</Styles.Skill>
            <Styles.Skill>#Frontend</Styles.Skill>
          </Styles.Skills>
        </Styles.Item>

        <Styles.Item>
          <Styles.Initials>CR</Styles.Initials>

          <Styles.Name>Cecilya Rodrigues</Styles.Name>

          <Styles.Email>cecilyarodriguespires@@gmail.com</Styles.Email>

          <Styles.WrapperTitle>
            <SkillIcon width={20} />

            <Styles.ItemTitle>Skills</Styles.ItemTitle>
          </Styles.WrapperTitle>

          <Styles.Skills>
            <Styles.Skill>#Comunicação</Styles.Skill>
            <Styles.Skill>#Liderança</Styles.Skill>
            <Styles.Skill>#Falarempublico</Styles.Skill>
            <Styles.Skill>#Microsoftword</Styles.Skill>
            <Styles.Skill>#Criatividade</Styles.Skill>
          </Styles.Skills>
        </Styles.Item>
      </Styles.List>
    </Styles.Container>
  );
};

export default Team;
