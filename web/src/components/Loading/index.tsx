import React from 'react';
import { ReactComponent as LoadingIcon } from 'assets/svg/loading.svg'
import Styles from './styles';

interface Props {
  isLoading: boolean;
}

const Loading: React.FC<Props> = ({ isLoading }) => {
  return isLoading ? (
    <Styles.Background>
      <LoadingIcon width="60" height="60" />
    </Styles.Background>
  ) : null
};

export default Loading;
