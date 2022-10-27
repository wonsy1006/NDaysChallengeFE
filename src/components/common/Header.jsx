import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';
import Add from '../../assets/icons/add.svg';
import Friends from '../../assets/icons/friends.svg';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <HeaderIcons>
          <Add />
          <Friends />
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
`;

const Spacer = styled.div`
  height: 5rem;
`;
