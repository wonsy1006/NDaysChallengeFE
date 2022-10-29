import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../node_modules/react-router-dom/dist/index';
import Logo from '../../assets/images/logo.svg';
import Add from '../../assets/icons/add.svg';
import Friends from '../../assets/icons/friends.svg';
import Alarm from '../../assets/icons/alarmFriends.svg';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <h1>
            <Logo alt="엔챌" />
          </h1>
        </Link>
        <HeaderIcons>
          <Link to="/create-challenge">
            <Add style={{ marginRight: 1 + 'rem' }} />
          </Link>
          <Link to="/friends-list">
            <Alarm style={{ marginRight: 0.5 + 'rem' }} />
          </Link>
        </HeaderIcons>
      </HeaderContainer>
      <Spacer />
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 480px;
  height: 5rem;
  padding: 20px 15px;
  gap: 49px;

  background-color: #fffbf2;
`;

const HeaderIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  & + & {
    margin-right: 0.5rem;
  }
`;

const Spacer = styled.div`
  height: 5rem;
`;
