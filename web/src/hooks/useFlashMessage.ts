import { useContext } from 'react';
import { FlashMessageContext } from 'contexts/FlashMessage';

const useFlashMessage = () => {
  const context = useContext(FlashMessageContext);
  return { ...context };
};

export default useFlashMessage;
