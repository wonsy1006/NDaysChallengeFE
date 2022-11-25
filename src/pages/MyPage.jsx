import React from 'react';
import { Link } from '../../node_modules/react-router-dom/dist/index';
import styled from 'styled-components';
import Pic1 from '../assets/images/profile_pics/pic1.svg';

const MyPage = () => {
  return (
    <>
      <h2>내 정보</h2>
      <UserNameContainer>
        <Pic1 />
        <StyledSpan>username 님</StyledSpan>
      </UserNameContainer>
      <PagesContainer>
        <Link to="/challenge-list">
          <h3>완료된 챌린지 보기</h3>
        </Link>
        <Link to="/edit-profile">
          <h3>회원 정보 수정</h3>
        </Link>
        <Link to="/friends-list">
          <h3>친구 목록</h3>
        </Link>
        <Link to="/withdraw">
          <h3>계정 삭제</h3>
        </Link>
      </PagesContainer>
      <LogoutContainer>
        <StyledLink>로그아웃</StyledLink>
      </LogoutContainer>
    </>
  );
};

export default MyPage;

const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const UserNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 90%;
  margin: 0 auto 1rem auto;

  & + & {
    margin: 0.5rem;
  }
`;

const StyledSpan = styled.span`
  margin-left: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.bl500};
`;

const PagesContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  margin: 0 auto 1.5rem auto;

  & + & {
    margin: 1rem;
  }
`;

const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.bl500};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bl500};
`;
