import React from 'react';
import { Link } from '../../node_modules/react-router-dom/dist/index';
import styled from 'styled-components';
import Pic1 from '../assets/images/profile_pics/pic1.svg';

const MyPage = () => {
  return (
    <>
      <PageTitle>내 정보</PageTitle>
      <UserNameContainer>
        <Pic1 />
        <StyledSpan>username 님</StyledSpan>
      </UserNameContainer>
      <PagesContainer>
        <Link to="/challenge-list">
          <StyledH3>완료된 챌린지 보기</StyledH3>
        </Link>
        <Link to="/edit-profile">
          <StyledH3>회원 정보 수정</StyledH3>
        </Link>
        <Link to="/friends-list">
          <StyledH3>친구 목록</StyledH3>
        </Link>
        <Link to="/withdraw">
          <StyledH3>계정 삭제</StyledH3>
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

const StyledH3 = styled.h3`
  font-size: 1.25rem;

  &:hover {
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
