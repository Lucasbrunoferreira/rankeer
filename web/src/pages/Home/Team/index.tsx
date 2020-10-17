import React, { useEffect, useState } from 'react';
import useProjectContext from 'hooks/useProjectContext';
import { Loading } from 'components';
import Styles from './styles';
import { validateEmail } from 'helpers/validators/email';

import { ReactComponent as SendIcon } from 'assets/svg/send.svg'
import { ReactComponent as SkillIcon } from 'assets/svg/skill.svg'
import { ReactComponent as OfficeIcon } from 'assets/svg/office.svg'

const Team: React.FC = () => {
  const { color, members, fetchProjectData, isLoading, inviteMember, code } = useProjectContext();

  const [email, setEmail] = useState({ value: null, isValid: true })

  const renderInitials = (name: string) => {
    const firstLetter = name.substring(0, 1);
    let secondLetter = name.substring(1, 2);

    const secondName = name.split(' ')[1];

    if (secondName) {
      secondLetter = secondName.substring(0, 1);
    }

    return `${firstLetter}${secondLetter}`;
  }

  useEffect(() => {
    fetchProjectData()
    //eslint-disable-next-line
  }, [])

  const handleInvite = (value: string) => {
    const isValid = validateEmail(value)
    setEmail({ value, isValid })
  }

  return (
    <Styles.Container>
      <Loading isLoading={isLoading} />

      <Styles.Title>Minha Equipe</Styles.Title>

      <Styles.SubTitle>Insira o e-mail do participante abaixo para convida-lo para seu projeto.</Styles.SubTitle>

      <Styles.Wrapper>
        <Styles.Input spellCheck={false} onChange={(e) => handleInvite(e.target.value)} placeholder="usuario@email.com" />

        <Styles.Button onClick={() => inviteMember(email.value)} color={color} disabled={!email.value || !email.isValid}>
          <SendIcon width={20} />
          <Styles.BtnText>Enviar</Styles.BtnText>
        </Styles.Button>

        {!email.isValid ? (
          <Styles.Message>Informe um e-mail válido!</Styles.Message>
        ) : null}
      </Styles.Wrapper>

      <Styles.SubTitle>Ou se preferir pode compartilhar o código do seu projeto: <b>{ code }</b> </Styles.SubTitle>

      <Styles.List>
        {members.map(member => (
          <Styles.Item key={member.id}>
            <Styles.Initials>{renderInitials(member.name)}</Styles.Initials>

            <Styles.Name>{member.name}</Styles.Name>

            <Styles.Email>{member.email}</Styles.Email>

            <Styles.WrapperTitle>
              <OfficeIcon width={20} />

              <Styles.ItemTitle>Cargo</Styles.ItemTitle>

              <Styles.Text>{member.participantInfo.office}</Styles.Text>
            </Styles.WrapperTitle>

            <Styles.WrapperTitle>
              <SkillIcon width={20} />

              <Styles.ItemTitle>Skill</Styles.ItemTitle>

              <Styles.Text>{member.participantInfo.skill}</Styles.Text>
            </Styles.WrapperTitle>
          </Styles.Item>
        ))}
      </Styles.List>
    </Styles.Container>
  );
};

export default Team;
