import React, { useState, Dispatch, SetStateAction } from 'react';
import { Event } from '../interfaces/Event';
import { Project } from '../interfaces/Project';
import { User } from '../interfaces/User';

interface EvaluationCtx {
  user: User
  event: Event
  project: Project
  setEvent: Dispatch<SetStateAction<Event>>
  setProject: Dispatch<SetStateAction<Project>>
  setUser: Dispatch<SetStateAction<User>>
}

const initialValueUser = {
  id: 0,
  email: '',
  name: ''
}

const initialValueEvent = {
  id: 0,
  name: '',
  code: '',
  date: ''
}

const initialValueProject = {
  id: 0,
  name: '',
  color: '',
  description: '',
  impact_phrase: '',
  annotations: '',
}

const EvaluationContext = React.createContext<EvaluationCtx>({
  user: initialValueUser,
  event: initialValueEvent,
  project: initialValueProject,
  setEvent: () => null,
  setProject: () => null,
  setUser: () => null
});

const EvaluationProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User>(initialValueUser);
  const [event, setEvent] = useState<Event>(initialValueEvent);
  const [project, setProject] = useState<Project>(initialValueProject);

  return (
    <EvaluationContext.Provider value={{ event, project, user, setEvent, setProject, setUser }}>
      { children }
    </EvaluationContext.Provider>
  );
};

export { EvaluationProvider, EvaluationContext };
