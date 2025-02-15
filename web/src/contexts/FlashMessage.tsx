import React, { useState, useEffect } from 'react';
import { FlashMessage } from 'components';

interface FlashMessageProps {
  children: JSX.Element;
}

interface FlashContext {
  isVisible: boolean;
  message: string;
  setMessage: Function;
}

const FlashMessageContext = React.createContext<FlashContext>({
  isVisible: false,
  message: '',
  setMessage: () => '',
});

const FlashMessageProvider = ({ children }: FlashMessageProps) => {
  const [isVisible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
        setMessage('');
      }, 3200);
    }
  }, [message]);

  return (
    <FlashMessageContext.Provider value={{ isVisible, message, setMessage }}>
      <FlashMessage isVisible={isVisible} message={message} />

      {children}
    </FlashMessageContext.Provider>
  );
};

export { FlashMessageProvider, FlashMessageContext };
