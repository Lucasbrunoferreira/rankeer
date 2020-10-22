import React from 'react';
import { Screen, Box, Divider, Button, Text } from '../../components';

const Events: React.FC = () => {
  return (
    <Screen.Wrapper>
      <Text.HyperTitle>First Aid</Text.HyperTitle>

      <Divider color="#e74c3c" />

      <Text.Title>Avaliações de projetos na palma da sua mão!</Text.Title>

      <Text.Spotlight>Olá, Lucas Bruno!</Text.Spotlight>

      <Text.SubTitle>Selecione um projeto para ser avaliado:</Text.SubTitle>

      <Box.Container color="#e74c3c">
        <Box.Title>Hackthoberfest 2020</Box.Title>

        <Box.SubTitle>Prestação de serviços em uma unica plataforma xablau mano eae cara</Box.SubTitle>
      </Box.Container>

      <Button title="xablau" color="#e74c3c" onPress={() => console.log('xablau')} />
    </Screen.Wrapper>
  )
}

export default Events;
