import React, { useState, useEffect } from 'react';
import { User } from 'interfaces/User';
import { Task } from 'interfaces/Task';
import { theme } from 'theme'
import projectService from 'services/project';
import { getCurrentEvent } from 'helpers/localStorage/currentEvent';
import useFlashMessage from 'hooks/useFlashMessage';
import { Tag } from 'interfaces/Tag';
import { Link } from 'interfaces/Link';
import { BusinessModel } from 'interfaces/BusinessModel';
import { Member } from 'interfaces/Member';
import { getSocketClient } from 'services/socket';

export interface ProjectCtx {
  haveProject: boolean;
  name: string;
  code: string;
  projectId: number;
  owner: User;
  description: string;
  impactPhrase: string;
  color: string;
  tags: Tag[];
  members: Member[];
  links: Link[];
  tasks: Task[];
  annotations: string;
  fetchProjectData: Function;
  setProjectData: Function;
  isLoading: boolean;
  updateProjectData: Function;
  removeTag: Function;
  saveTag: Function;
  saveTask: Function;
  setTaskStatus: Function;
  saveLink: Function;
  saveBusinessModel: Function;
  businessModel: BusinessModel;
  inviteMember: Function;
}

const ProjectContext = React.createContext<ProjectCtx>({
  haveProject: false,
  projectId: null,
  owner: null,
  name: null,
  code: null,
  description: null,
  impactPhrase: null,
  color: theme.colors.projectColors[0],
  tags: [],
  members: [],
  links: [],
  tasks: [],
  annotations: null,
  fetchProjectData: () => '',
  setProjectData: () => '',
  updateProjectData: () => '',
  isLoading: false,
  removeTag: () => '',
  saveTag: () => '',
  saveTask: () => '',
  setTaskStatus: () => '',
  saveLink: () => '',
  saveBusinessModel: () => '',
  businessModel: null,
  inviteMember: () => ''
});

const ProjectProvider = ({ children }: { children: JSX.Element; }) => {
  const [haveProject, setHaveProject] = useState(false)
  const [isLoading, setLoading] = useState(true);

  const [projectId, setProjectId] = useState<number>();
  const [owner, setOwner] = useState<User>(null)
  const [name, setName] = useState<string>(null);
  const [description, setDescription] = useState<string>(null);
  const [impactPhrase, setImpactPhrase] = useState<string>(null);
  const [color, setColor] = useState<string>('#27292c');
  const [code, setCode] = useState<string>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [annotations, setAnnotations] = useState<string>(null);
  const [businessModel, setBusinessModel] = useState<BusinessModel>(null);


  const currentEvent = getCurrentEvent();
  const socketInstance = getSocketClient()

  const { setMessage } = useFlashMessage()

  const fetchProjectData = () => {
    setLoading(true)
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
       })
       .finally(() => setLoading(false))
    })
  }

  const setProjectData = (project: any) => {
    setHaveProject(true)
    setProjectId(project?.id)
    setOwner(project?.owner)
    setName(project?.name)
    setDescription(project?.description)
    setImpactPhrase(project?.impact_phrase)
    setColor(project?.color)
    setTags(project?.tags)
    setLinks(project?.links)
    setTasks(project?.tasks)
    setAnnotations(project?.annotations)
    setBusinessModel(project?.businessModel)
    setMembers(project?.members)
    setCode(project?.code)
  }

  const updateProjectData = (data: {
    name?: string,
    description?: string,
    color?: string,
    impactPhrase?: string,
    annotations?: string
  }) => {
    setName(data.name || name)
    setDescription(data.description || description)
    setColor(data.color || color)
    setImpactPhrase(data.impactPhrase || impactPhrase)
    setAnnotations(data.annotations || annotations)

    projectService.updateProject(projectId, data).catch(() => {
      setMessage('Houve um erro ao tentar alterar as informações do projeto!')
    })
  }

  const saveTag = (description: string) => {
    setTags([ ...tags, { id: null, description }])

    projectService.saveTag(projectId, description)
    .then((res) => {
      setTags(res.data)
    })
    .catch(() => {
      setMessage('Houve um erro ao salvar a tag!')
    })
  }

  const removeTag = (tag: Tag) => {
    setTags(tags.filter(t => t.description !== tag.description));

    projectService.removeTag(tag.id).catch(() => {
      setMessage('Houve um erro ao tentar remover a tag!')
    })
  }

  const saveTask = (description: string) => {
    return new Promise((resolve, reject) => {
      projectService.saveTask(projectId, description)
      .then((res) => {
        setTasks(res.data)
        resolve()
      })
      .catch(() => {
        setMessage('Houve um erro ao tentar remover a tag!')
        reject()
      })
    })
  }

  const setTaskStatus = (taskId: number, status: boolean) => {
    if (status) {
      projectService.setDoneTask(taskId)
      .catch(() => {
        setMessage('Houve um erro ao tentar alterar o status da tarefa!')
      })
    } else {
      projectService.setUnDoneTask(taskId)
      .catch(() => {
        setMessage('Houve um erro ao tentar alterar o status da tarefa!')
      })
    }
  }

  const saveLink = (description: string) => {
    setLinks([...links, { description }]);

    projectService.saveLink(projectId, description)
    .catch(() => {
      setMessage('Houve um erro ao salvar o link!')
    })
  }

  const saveBusinessModel = (data: BusinessModel) => {
    setBusinessModel(data)
    projectService.saveBusinessModel(projectId, data)
    .catch(() => {
      setMessage('Houve um erro ao salvar o plano de negócios')
    })
  }

  const inviteMember = (email: string) => {
    setLoading(true)
    projectService.inviteMember(projectId, email)
    .then(() => {
      fetchProjectData()
    })
    .catch(() => {
      setMessage('Usuário não está participando do evento ou já possui um projeto!')
      setLoading(false)
    })
  }

  useEffect(() => {
    if (projectId) {
      socketInstance.on(`@PROJECT-${projectId}`, (data: any) => setProjectData(data))
      console.info(`📡 Listening project id: ${projectId}`)
    }
    // eslint-disable-next-line
  }, [projectId])

  return (
    <ProjectContext.Provider value={{
      fetchProjectData,
      setProjectData,
      updateProjectData,
      haveProject,
      name,
      code,
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
      isLoading,
      removeTag,
      saveTag,
      saveTask,
      setTaskStatus,
      saveLink,
      saveBusinessModel,
      businessModel,
      inviteMember,
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider, ProjectContext };
