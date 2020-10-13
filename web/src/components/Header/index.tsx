import React from 'react';
import Styles from './styles';
import { getCurrentUser, clearCurrentUser } from 'helpers/localStorage/currentUser';
import { clearToken } from 'helpers/localStorage/token';
import { clearCurrentEvent } from 'helpers/localStorage/currentEvent';
import Logo from 'assets/images/logo_white.svg';
import { useHistory } from 'react-router-dom';


const Header: React.FC = () => {
  const user = getCurrentUser();
  const history = useHistory();

  const renderInitials = () => {
    const firstLetter = user?.name.substring(0, 1);
    let secondLetter = user?.name.substring(1, 2);

    const secondName = user?.name.split(' ')[1];

    if (secondName) {
      secondLetter = secondName.substring(0, 1);
    }

    return `${firstLetter}${secondLetter}`;
  }

  const handleLogout = () => {
    clearCurrentUser();
    clearCurrentEvent();
    clearToken();
    history.replace('/login');
  };

  return (
    <Styles.Header>
      <Styles.Logo src={Logo} />

      <Styles.Wrapper>
        <Styles.Text>{ user?.name }</Styles.Text>

        <Styles.Initials>{renderInitials()}</Styles.Initials>

        <Styles.LogoutIcon width={22} onClick={handleLogout} />
      </Styles.Wrapper>
    </Styles.Header>
  );
};

export default Header;
