import React from 'react';
import Styles from './styles';

import InternLayout from 'layouts/Internal';

const EventsPage: React.FC = () => {
  return (
    <InternLayout hiddenSideMenu>
      <Styles.Container>
        <Styles.Title>Meus Eventos</Styles.Title>

        <Styles.EventsList>
          <Styles.EventItem status="closed">
            <Styles.EventName>Hackthoberfest 2020</Styles.EventName>

            <Styles.Text>
              <strong>Inicio:</strong> 10 de outubro de 2020 20:30
            </Styles.Text>

            <Styles.Text>
              <strong>Fim:</strong> 12 de outubro de 2020 21:30
            </Styles.Text>

            <Styles.Status status="closed">Em andamento</Styles.Status>
          </Styles.EventItem>

          <Styles.EventItem status="inProgress">
            <Styles.EventName>Hackthoberfest 2020</Styles.EventName>

            <Styles.Text>
              <strong>Inicio:</strong> 10 de outubro de 2020 20:30
            </Styles.Text>

            <Styles.Text>
              <strong>Fim:</strong> 12 de outubro de 2020 21:30
            </Styles.Text>

            <Styles.Status status="inProgress">Em andamento</Styles.Status>
          </Styles.EventItem>

          <Styles.EventItem status="comingSoon">
            <Styles.EventName>Hackthoberfest 2020</Styles.EventName>

            <Styles.Text>
              <strong>Inicio:</strong> 10 de outubro de 2020 20:30
            </Styles.Text>

            <Styles.Text>
              <strong>Fim:</strong> 12 de outubro de 2020 21:30
            </Styles.Text>

            <Styles.Status status="comingSoon">Em andamento</Styles.Status>
          </Styles.EventItem>
        </Styles.EventsList>
      </Styles.Container>
    </InternLayout>
  );
};

export default EventsPage;
