import React from 'react';
import Styled from './styles';

interface Props {
  isVisible: boolean;
  message: string;
}

const FlashMessage: React.FC<Props> = ({ isVisible, message }) => {
  return (
    <>
      <Styled.Wrapper isVisible={isVisible}>
        <Styled.Text>{message}</Styled.Text>
      </Styled.Wrapper>
    </>
  );
};

export default FlashMessage;
