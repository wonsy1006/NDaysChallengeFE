import React from 'react';
import {
  useNavigate,
  useParams,
  Link,
} from '../../../node_modules/react-router-dom/dist/index';
import styled from 'styled-components';
import theme from '../../styles/Theme';
import { ListIcon } from './Icons';
import { AddIcon } from './Icons';
import { FeedIcon } from './Icons';
import { MyPageIcon } from './Icons';

// 네비게이션 페이지 활성화 시 아이콘/텍스트 메인컬러로 표시하기

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Link to="/">
          <NavigationItem>
            <ListIcon size={36} color={theme.colors.gr400} />
            <NavigationTitle>메인</NavigationTitle>
          </NavigationItem>
        </Link>
        <Link to="/feed">
          <NavigationItem>
            <FeedIcon size={36} color={theme.colors.gr400} />
            <NavigationTitle>오늘의 다짐</NavigationTitle>
          </NavigationItem>
        </Link>
        <Link to="/challenge-list">
          <NavigationItem>
            <AddIcon size={36} color={theme.colors.gr400} />
            <NavigationTitle>챌린지 목록</NavigationTitle>
          </NavigationItem>
        </Link>
        <Link to="/mypage">
          <NavigationItem>
            <MyPageIcon size={36} color={theme.colors.gr400} />
            <NavigationTitle>내 정보</NavigationTitle>
          </NavigationItem>
        </Link>
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

  min-width: 360px;
  max-width: 480px;
  height: 9.6rem;
  padding: 20px 15px;
  gap: 49px;

  border-radius: 1.5rem 1.5rem 0 0;
  background: #fff4db;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (min-width: 480px) {
    width: 100%;
  }
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
  font-size: ${({ theme }) => theme.fonts.size.small};
  text-align: center;
  padding-top: 0.5rem;
`;

const Spacer = styled.div`
  height: 9.6rem;
`;
