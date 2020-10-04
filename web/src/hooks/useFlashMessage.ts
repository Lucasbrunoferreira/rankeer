import { useContext } from 'react';
import { FlashMessageContext } from 'contexts/FlashMessage';

const useFlashMessage = () => {
  const { setMessage } = useContext(FlashMessageContext);

  return { setMessage };
};

export default useFlashMessage;
