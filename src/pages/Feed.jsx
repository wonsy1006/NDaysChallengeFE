import React from 'react';
import styled from 'styled-components';
import Card from '../components/common/Card';
import Pic1 from '../assets/images/profile_pics/pic1.svg';
import Heart from '../assets/icons/heartEmpty.svg';
import Comment from '../assets/icons/comment.svg';

const Feed = () => {
  return (
    <>
      <PageTitle>오늘의 다짐</PageTitle>
      <Card>
        <UserContainer>
          <Pic1 />
          <NicknameContainer>
            <NicknameSpan>OOOOO</NicknameSpan>
            <span>님이 다짐을 공유했습니다.</span>
          </NicknameContainer>
        </UserContainer>
        <DajimContainer>미라클 모닝! 6시 기상!</DajimContainer>
        <InteractionContainer>
          <HeartContainer>
            <Heart />
            <HeartCount>2</HeartCount>
          </HeartContainer>
          <CommentContainer>
            <Comment />
            <CommentCount>2</CommentCount>
          </CommentContainer>
        </InteractionContainer>
      </Card>
    </>
  );
};

export default Feed;

const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin: 0.5rem auto 1.5rem auto;
`;

const NicknameContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0.5rem;
`;

const NicknameSpan = styled.span`
  color: ${({ theme }) => theme.colors.bl500};
  font-size: 1.5rem;
  font-weight: 700;
`;

const DajimContainer = styled.p`
  padding: 0.5rem 0 0.5rem 0;
  font-family: ${({ theme }) => theme.fontFamilies.accent};
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.bl500};
`;

const InteractionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 95%;
`;

const HeartContainer = styled.div`
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  margin-right: 1rem;
  height: 20px;
`;

const HeartCount = styled.span`
  display: block;
  margin-left: 0.5rem;
`;

const CommentContainer = styled.div``;

const CommentCount = styled.span``;
