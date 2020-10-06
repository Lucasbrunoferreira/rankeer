import React from 'react';
import { Footer, Header, SideMenu } from 'components';
import Styles from './styles';

interface Props {
  hiddenSideMenu?: boolean;
  hiddenHeader?: boolean;
  hiddenFooter?: boolean;
}

const InternalLayout: React.FC<Props> = ({ children, hiddenSideMenu, hiddenHeader, hiddenFooter }) => {
  return (
    <Styles.Wrapper>
      {hiddenHeader || <Header />}

      <Styles.Content>
        {hiddenHeader || <SideMenu />}

        {children}

      </Styles.Content>

      {hiddenFooter || <Footer />}
    </Styles.Wrapper>
  );
};

export default InternalLayout;
