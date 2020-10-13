import React from 'react';
import Styles from './styles';
import useProjectContext from 'hooks/useProjectContext';
import useFlashMessage from 'hooks/useFlashMessage';

import { ReactComponent as LinkIcon } from 'assets/svg/link.svg'
import { ReactComponent as ClipboardIcon } from 'assets/svg/clipboard.svg'

const Links: React.FC = () => {
  const { links, saveLink } = useProjectContext();
  const { setMessage } = useFlashMessage();

  const validateUrl = (value: string) => {
    return value.startsWith('http://') || value.startsWith('https://') || value.startsWith('www.')
  }

  const handleClipboardData = async () => {
    const clipboardData = await window.navigator.clipboard.readText();

    if (validateUrl(clipboardData)) {
      saveLink(clipboardData)
    } else {
      setMessage('O texto copiado não é uma URL/Link')
    }
  }

  return (
    <Styles.Box className="box">
      <Styles.TitleWrapper>
        <LinkIcon width={20} />

        <Styles.Title>Links importantes</Styles.Title>
      </Styles.TitleWrapper>

      <Styles.SaveWrapper onClick={handleClipboardData}>
        <ClipboardIcon width={16} />

        <Styles.SaveText>Copie um link e clique aqui para salvá-lo</Styles.SaveText>
      </Styles.SaveWrapper>

      <Styles.Links>
        {links?.length <= 0 ? (
          <Styles.Empty>Salve links da web aqui para que toda a equipe possa ver!</Styles.Empty>
        ) : null}

        {links?.map((link, index) => <Styles.Link key={index} href={link.description} target="_blank">{link.description}</Styles.Link>)}
      </Styles.Links>
    </Styles.Box>
  );
};

export default Links;
