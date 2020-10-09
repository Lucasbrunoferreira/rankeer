import React, { useEffect, useState } from 'react';
import { User } from 'interfaces/User';
import { Task } from 'interfaces/Task';
import { theme } from 'theme'
import { projectMock } from 'helpers/mocks/project';

export interface ProjectCtx {
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
  setLinks: Function;
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
  setColor: () => '',
  setLinks: () => ''
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

  useEffect(() => {
    setName(projectMock.name)
    setDescription(projectMock.description)
    setImpactPhrase(projectMock.impactPhrase)
    setColor(projectMock.color)
    setTags(projectMock.tags)
    setMembers(projectMock.members)
    setLinks(projectMock.links)
    setTasks(projectMock.tasks)
    setAnnotations(projectMock.annotations)
  }, [])

  return (
    <ProjectContext.Provider value={{ name, description, impactPhrase, color, tasks, tags, members, annotations, links, setTags, setColor, setLinks }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider, ProjectContext };
