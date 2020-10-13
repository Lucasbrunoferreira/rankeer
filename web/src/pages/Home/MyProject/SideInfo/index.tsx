import React, { useState, KeyboardEvent, useRef } from 'react';
import Styles from './styles';
import { useTheme } from 'styled-components';
import useProjectContext from 'hooks/useProjectContext';


const SideInfo: React.FC = () => {
  const { colors } = useTheme();
  const { color, tags, setTags, setColor, name, description, impactPhrase } = useProjectContext();

  const [tagValue, setTagValue] = useState<string>('');
  const [visibleColorPicker, setVisibleColorPicler] = useState(false);

  const inputTagRef = useRef(null);

  const handleTagName = (value: string) => {
    const tag = value.replace(' ', '').replace('#', '');
    setTagValue(`#${tag.toUpperCase()}`);
  }

  const handleSaveTag = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setTags([...tags, tagValue])
      inputTagRef?.current?.blur();
    }
  }

  const handleRemoveTag = (value: string) => {
    setTags(tags.filter(tag => tag !== value));
  }

  return (
    <Styles.Container color={color}>
     <Styles.Infos>
      <Styles.Title
          spellCheck={false}
          defaultValue={name}
          maxLength={16}
          placeholder="Nome do Projeto"
        />

        <hr />

        <Styles.Description
          placeholder="Insira uma breve descrição"
          maxLength={170}
          spellCheck={false}
          rows={7}
          defaultValue={description}
        />

        <Styles.TagsList>
          {tags?.map((tag, index) => <Styles.Tag onClick={() => handleRemoveTag(tag)} key={index}>{tag}</Styles.Tag>)}
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
        />
     </Styles.Infos>

     <Styles.Configs>
      <Styles.SubTitle>Cor do Projeto:</Styles.SubTitle>

      <Styles.ColorCircle color={color} onClick={() => setVisibleColorPicler(!visibleColorPicker)} />

      <Styles.ListColors isVisible={visibleColorPicker}>
        {colors.projectColors.map(color => <Styles.ColorCircle key={color} color={color} onClick={() => {setColor(color); setVisibleColorPicler(false)}} />)}
      </Styles.ListColors>
     </Styles.Configs>
    </Styles.Container>
  );
};

export default SideInfo;
