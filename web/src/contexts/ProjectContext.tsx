import React, { useState } from 'react';
import { User } from 'interfaces/User';
import { Task } from 'interfaces/Task';
import { theme } from 'theme'

interface ProjectCtx {
  name: string;
  description: string;
  impactPhrase: string;
  color: string;
  tags: string[];
  members: User[];
  links: string[];
  tasks: Task[];
  annotations: string;
  setTags: Function;
  setColor: Function;
}

const ProjectContext = React.createContext<ProjectCtx>({
  name: null,
  description: null,
  impactPhrase: null,
  color: theme.colors.projectColors[0],
  tags: [],
  members: [],
  links: [],
  tasks: [],
  annotations: null,
  setTags: () => '',
  setColor: () => ''
});

const ProjectProvider = ({ children }: { children: JSX.Element; }) => {
  const [name, setName] = useState<string>(null);
  const [description, setDescription] = useState<string>(null);
  const [impactPhrase, setImpactPhrase] = useState<string>(null);
  const [color, setColor] = useState<string>(theme.colors.projectColors[0]);
  const [tags, setTags] = useState<string[]>([]);
  const [members, setMembers] = useState<User[]>([]);
  const [links, setLinks] = useState<string[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [annotations, setAnnotations] = useState<string>(null);

  return (
    <ProjectContext.Provider value={{ name, description, impactPhrase, color, tasks, tags, members, annotations, links, setTags, setColor }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider, ProjectContext };
