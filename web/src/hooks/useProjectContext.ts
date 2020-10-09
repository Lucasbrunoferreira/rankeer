import { useContext } from 'react';
import { ProjectContext } from 'contexts/ProjectContext';

const useProjectContext = () => {
  const context = useContext(ProjectContext);
  return { ...context };
};

export default useProjectContext;
