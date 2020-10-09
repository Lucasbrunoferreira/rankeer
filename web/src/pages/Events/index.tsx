import React, { useEffect, useState } from 'react';
import Styles from './styles';
import useFlashMessage from 'hooks/useFlashMessage'
import InternLayout from 'layouts/Internal';
import eventService from 'services/events';
import { Event } from 'interfaces/Event';
import { EventStatus } from 'helpers/enums/EventStatus';
import { format, isSameDay, isAfter } from 'date-fns'
import { ptBR } from 'date-fns/locale';
import { sortBy } from 'lodash';
import { setCurrentEvent } from 'helpers/localStorage/currentEvent';
import { useHistory } from 'react-router-dom';

const EventsPage: React.FC = () => {
  const { setMessage } = useFlashMessage();
  const history = useHistory();

  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFiltered] = useState<Event[]>([]);

  const [selectedStatus, setSelectedStatus] = useState<number[]>([1, 2, 3]);

  useEffect(() => {
    const formatStatusInEvent = (listOfEvents: Event[]) => {
      return sortBy(listOfEvents.map((event) => {
        event.status = renderStatus(event.date);
        return event;
      }), ['status'])
    }

    const fetchData = () => {
      eventService.eventsParticipants()
      .then((result) => {
        const formattedEvents = formatStatusInEvent(result?.data);
        setEvents(formattedEvents);
        setFiltered(formattedEvents);
      })
      .catch((err) => {
        setMessage('Algo inesperado ao buscar os eventos.')
      });
    }

    fetchData();
  }, [setMessage,]);


  useEffect(() => {
    const filteredEvents = events.filter(event => selectedStatus.includes(event.status))
    setFiltered(filteredEvents)
  }, [events, selectedStatus])


  const renderStatus = (eventDate: string) => {
    const dateOfEvent = new Date(eventDate);
    const today = new Date();

    if (isSameDay(today, dateOfEvent)) return EventStatus.INPROGRESS;
    if (isAfter(today, dateOfEvent)) return EventStatus.CLOSED;
    return EventStatus.COMINGSOON;
  }

  const handleFilter = (eventStatus: number) => {
    if (selectedStatus.includes(eventStatus)) {
      setSelectedStatus(selectedStatus.filter(status => status !== eventStatus))
    } else {
      setSelectedStatus([...selectedStatus, eventStatus])
    }
  }

  const handleSelecteEvent = (event: Event) => {
    if (event.status === EventStatus.INPROGRESS) {
      setCurrentEvent(event);
      history.push('/home');
    }
  }

  return (
    <InternLayout hiddenSideMenu>
      <Styles.Container>
        <Styles.Title>Selecione um evento para prosseguir</Styles.Title>

        <Styles.Filter>
          <Styles.FilterItem isActive={selectedStatus.includes(EventStatus.INPROGRESS)} onClick={() => handleFilter(EventStatus.INPROGRESS)} status={EventStatus.INPROGRESS}>Em andamento</Styles.FilterItem>
          <Styles.FilterItem isActive={selectedStatus.includes(EventStatus.COMINGSOON)} onClick={() => handleFilter(EventStatus.COMINGSOON)} status={EventStatus.COMINGSOON}>Em breve</Styles.FilterItem>
          <Styles.FilterItem isActive={selectedStatus.includes(EventStatus.CLOSED)} onClick={() => handleFilter(EventStatus.CLOSED)} status={EventStatus.CLOSED}>Encerrado</Styles.FilterItem>
        </Styles.Filter>

        <Styles.EventsList>
          {filteredEvents.map((event) => (
            <Styles.EventItem key={event.id} status={event.status} onClick={() => handleSelecteEvent(event)}>
              <Styles.EventName>{event.name}</Styles.EventName>

              <Styles.Text>
                <strong>Data do evento:</strong> {format(new Date(event.date), "dd 'de' MMMM", { locale: ptBR })}
              </Styles.Text>

              <Styles.Status status={event.status} />
            </Styles.EventItem>
          ))}
        </Styles.EventsList>

        <Styles.Wrapper>
          <Styles.SubTitle>Você possui o código para algum evento?</Styles.SubTitle>

          <Styles.Input placeholder="Ex: #FD15458" />
        </Styles.Wrapper>
      </Styles.Container>
    </InternLayout>
  );
};

export default EventsPage;
