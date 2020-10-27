import React, { useEffect, useState, useContext } from 'react';
import { Screen, Box, Text } from '../../components';
import { FlatList } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import eventsService from '../../services/events';
import { showMessage } from 'react-native-flash-message'
import { Event } from '../../interfaces/Event';
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale';
import { useTheme } from 'styled-components';
import { EvaluationContext } from '../../context/Evaluation';
import { useNavigation } from '@react-navigation/native';

const Events: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);

  const { setEvent } = useContext(EvaluationContext);
  const navigation = useNavigation();

  const { colors } = useTheme();

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);

      eventsService.eventsToEvaluate()
        .then((result) => {
          setEvents(result.data)
        })
        .catch(() => {
          showMessage({
            message: 'Algo inesperado ao carregar os eventos!',
            type: 'danger'
          })
        })
        .finally(() => {
          setLoading(false);
        })
    };

    fetchData();
  }, [])

  const handleSelectedEvent = (event: Event) => {
    setEvent(event);
    navigation.navigate('Projects');
  }

  const renderItem = (event: Event) => (
    <Box.Container color={colors.primary} onPress={() => handleSelectedEvent(event)}>
      <Box.Title>{event.name}</Box.Title>

      <Box.SubTitle>{format(new Date(event.date), "dd 'de' MMMM", { locale: ptBR })}</Box.SubTitle>
    </Box.Container>
  );

  return (
    <Screen.Wrapper>
      <Text.SubTitle>Selecione um evento para inciar as avaliações</Text.SubTitle>

      <FlatList
        data={events}
        renderItem={(item) => renderItem(item.item)}
        keyExtractor={event => event.id.toString()}
      />

      <Spinner
        visible={isLoading}
        animation="fade"
        overlayColor="rgba(0, 0, 0, 0.55)"
      />
    </Screen.Wrapper>
  )
}

export default Events;
