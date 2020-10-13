const STORAGE_KEY = '@RANKEER:PROJECT'

interface CurrentProject {
  id: number;
  name: string;
}

const getCurrentProject = (): CurrentProject | null => {
  const localData: CurrentProject = JSON.parse(
    window.localStorage.getItem(STORAGE_KEY)
  );

  return localData;
};

const setCurrentProject = (name: string, id: number) => {
  const currentProject: CurrentProject = { name, id }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentProject));
};

const clearCurrentProject = () => {
  window.localStorage.removeItem(STORAGE_KEY);
};

export { getCurrentProject, setCurrentProject, clearCurrentProject };
