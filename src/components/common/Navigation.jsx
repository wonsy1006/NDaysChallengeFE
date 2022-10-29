import React from 'react';
import {
  useNavigate,
  useParams,
} from '../../../node_modules/react-router-dom/dist/index';
import styled from 'styled-components';
import Home from '../../assets/icons/home.svg';
import Feed from '../../assets/icons/feed.svg';
import List from '../../assets/icons/list.svg';
import Mypage from '../../assets/icons/mypage.svg';

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <NavigationItem>
          <Home />
          <NavigationTitle>메인</NavigationTitle>
        </NavigationItem>
        <NavigationItem>
          <Feed />
          <NavigationTitle>오늘의 다짐</NavigationTitle>
        </NavigationItem>
        <NavigationItem>
          <List />
          <NavigationTitle>챌린지 목록</NavigationTitle>
        </NavigationItem>
        <NavigationItem>
          <Mypage />
          <NavigationTitle>내 정보</NavigationTitle>
        </NavigationItem>
      </NavigationContainer>
      <Spacer />
    </>
  );
};

export default Navigation;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;

  width: 480px;
  height: 6rem;
  padding: 20px 15px;
  gap: 49px;

  background: #fff4db;
`;

const NavigationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:nth-child(n) {
    color: ${({ theme }) => theme.colors.gr500};
  }
`;

const NavigationIcon = styled.div`
  width: 48px;
  height: 48px;
`;

const NavigationTitle = styled.div`
  font-size: 0.8rem;
  text-align: center;
  padding-top: 0.5rem;
`;

const Spacer = styled.div`
  height: 6rem;
`;
