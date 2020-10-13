import React, { useState } from 'react';
import { User } from 'interfaces/User';
import { Task } from 'interfaces/Task';
import { theme } from 'theme'
import projectService from 'services/project';
import { getCurrentEvent } from 'helpers/localStorage/currentEvent';

export interface ProjectCtx {
  haveProject: boolean;
  name: string;
  projectId: number;
  owner: User;
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
  setTasks: Function;
  fetchProjectData: Function;
  setProjectData: Function;
}

const ProjectContext = React.createContext<ProjectCtx>({
  haveProject: false,
  projectId: null,
  owner: null,
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
  setLinks: () => '',
  setTasks: () => '',
  fetchProjectData: () => '',
  setProjectData: () => '',
});

const ProjectProvider = ({ children }: { children: JSX.Element; }) => {
  const [haveProject, setHaveProject] = useState(false)

  const [projectId, setProjectId] = useState<number>();
  const [owner, setOwner] = useState<User>(null)
  const [name, setName] = useState<string>(null);
  const [description, setDescription] = useState<string>(null);
  const [impactPhrase, setImpactPhrase] = useState<string>(null);
  const [color, setColor] = useState<string>(theme.colors.projectColors[0]);
  const [tags, setTags] = useState<string[]>([]);
  const [members, setMembers] = useState<User[]>([]);
  const [links, setLinks] = useState<string[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [annotations, setAnnotations] = useState<string>(null);

  const currentEvent = getCurrentEvent();

  const fetchProjectData = () => {
    return new Promise((resolve, reject) => {
      projectService
      .getProject(currentEvent.id)
      .then((result) => {
        setProjectData(result.data)
        resolve();
      })
      .catch(() => {
        setHaveProject(false)
        reject()
       });
    })
  }

  const setProjectData = (event: any) => {
    setHaveProject(true)
    setProjectId(event?.id)
    setOwner(event?.owner)
    setName(event?.name)
    setDescription(event?.description)
    setImpactPhrase(event?.impactPhrase)
    setColor(event?.color)
    setTags(event?.tags)
    setLinks(event?.links)
    setTasks(event?.tasks)
    setAnnotations(event?.annotations)
    setMembers([])
  }

  return (
    <ProjectContext.Provider value={{
      fetchProjectData,
      setProjectData,
      haveProject,
      name,
      projectId,
      owner,
      description,
      impactPhrase,
      color,
      tasks,
      tags,
      members,
      annotations,
      links,
      setTags,
      setColor,
      setLinks,
      setTasks,
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider, ProjectContext };
