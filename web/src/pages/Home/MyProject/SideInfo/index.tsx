import React, { useState, KeyboardEvent, useRef } from 'react';
import Styles from './styles';
import { useTheme } from 'styled-components';
import useProjectContext from 'hooks/useProjectContext';


const SideInfo: React.FC = () => {
  const { colors } = useTheme();
  const { color, tags, name, description, impactPhrase, updateProjectData, saveTag, removeTag } = useProjectContext();

  const [tagValue, setTagValue] = useState<string>('');
  const [visibleColorPicker, setVisibleColorPicler] = useState(false);

  const inputTagRef = useRef(null);

  const handleTagName = (value: string) => {
    const tag = value.replace(' ', '').replace('#', '');
    setTagValue(`#${tag.toUpperCase()}`);
  }

  const handleSaveTag = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      saveTag(tagValue)
      inputTagRef?.current?.blur();
    }
  }

  return (
    <Styles.Container color={color}>
      <Styles.Infos>
        <Styles.Title
          spellCheck={false}
          defaultValue={name}
          maxLength={16}
          placeholder="Nome do Projeto"
          onBlur={(e) => updateProjectData({ name: e.target.value })}
        />

        <hr />

        <Styles.Description
          placeholder="Insira uma breve descrição"
          maxLength={170}
          spellCheck={false}
          rows={7}
          defaultValue={description}
          onBlur={(e) => updateProjectData({ description: e.target.value })}
        />

        <Styles.TagsList>
          {tags?.map((tag, index) => <Styles.Tag onClick={() => removeTag(tag)} key={index}>{tag.description}</Styles.Tag>)}
        </Styles.TagsList>

        {tags?.length < 5 ? (
          <Styles.InputTag
            ref={inputTagRef}
            value={tagValue}
            onChange={(e) => handleTagName(e.target.value)}
            onBlur={() => setTagValue('')}
            onKeyDown={handleSaveTag}
            placeholder="Adicone tags do projeto"
          />
        ) : null}

        <Styles.ImpactPhraseSubTitle>Frase de Impacto</Styles.ImpactPhraseSubTitle>

        <Styles.ImpactPhrase
          placeholder="Insira a frase"
          maxLength={50}
          spellCheck={false}
          rows={7}
          defaultValue={impactPhrase}
          onBlur={(e) => updateProjectData({ impactPhrase: e.target.value })}
        />
      </Styles.Infos>

      <Styles.Configs>
        <Styles.SubTitle>Cor do Projeto:</Styles.SubTitle>

        <Styles.ColorCircle color={color} onClick={() => setVisibleColorPicler(!visibleColorPicker)} />

        <Styles.ListColors isVisible={visibleColorPicker}>
          {colors.projectColors.map(c => <Styles.ColorCircle key={c} color={c} onClick={() => { updateProjectData({ color: c }); setVisibleColorPicler(false) }} />)}
        </Styles.ListColors>
      </Styles.Configs>
    </Styles.Container>
  );
};

export default SideInfo;
