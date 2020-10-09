import React from 'react';
import { Footer, Header, SideMenu } from 'components';
import Styles from './styles';
import { ProjectProvider } from 'contexts/ProjectContext';

interface Props {
  hiddenSideMenu?: boolean;
  hiddenHeader?: boolean;
  hiddenFooter?: boolean;
}

const InternalLayout: React.FC<Props> = ({ children, hiddenSideMenu, hiddenHeader, hiddenFooter }) => {
  return (
    <Styles.Wrapper>
      <ProjectProvider>
        <>
          {hiddenHeader || <Header />}

          <Styles.Container>
            {hiddenSideMenu || <SideMenu />}

            <Styles.Content>
              {children}
            </Styles.Content>

          </Styles.Container>

          {hiddenFooter || <Footer />}
        </>
      </ProjectProvider>
    </Styles.Wrapper>
  );
};

export default InternalLayout;
