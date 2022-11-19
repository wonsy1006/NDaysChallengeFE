import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/common/Card';
import Pic1 from '../assets/images/profile_pics/pic1.svg';
import Heart from '../assets/icons/EmptyHeart.svg';
import Comment from '../assets/icons/Comment.svg';
import Ellipsis from '../assets/icons/Ellipsis.svg';
import Enter from '../assets/icons/Enter.svg';

// 좋아요 카운트
const countHeart = () => {};

// 댓글 아이콘 클릭 시 댓글 작성 영역 표시
const showCommentForm = () => {};

// 무한 스크롤

const Feed = () => {
  const [comment, setComment] = useState('');

  const onChangeComment = (event) => {
    setComment(event.target.value);
  };

  return (
    <>
      <PageTitle>오늘의 다짐</PageTitle>
      <Card>
        <ReportContainer>
          <Ellipsis style={{ cursor: 'pointer' }} />
        </ReportContainer>
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
          <CommentContainer onClick={showCommentForm()}>
            <Comment />
            <CommentCount>2</CommentCount>
          </CommentContainer>
        </InteractionContainer>
        <CommentArea>
          <CommentList>
            <UserContainer>
              <Pic1 />
              <NicknameContainer>
                <NicknameSpan>XXXXX</NicknameSpan>
              </NicknameContainer>
            </UserContainer>
          </CommentList>
          <InputContainer>
            <CommentInput
              type="text"
              placeholder="댓글을 입력하세요"
              onChange={onChangeComment}
            />{' '}
            <Enter
              style={{
                cursor: 'pointer',
                position: 'absolute',
                right: '1rem',
                top: '.6rem',
              }}
            />
          </InputContainer>
        </CommentArea>
      </Card>
      <Card>
        <ReportContainer>
          <Ellipsis style={{ cursor: 'pointer' }} />
        </ReportContainer>
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
          <CommentContainer onClick={showCommentForm()}>
            <Comment />
            <CommentCount>2</CommentCount>
          </CommentContainer>
        </InteractionContainer>
        <CommentArea>
          <CommentList>
            <UserContainer>
              <Pic1 />
              <NicknameContainer>
                <NicknameSpan>XXXXX</NicknameSpan>
              </NicknameContainer>
            </UserContainer>
          </CommentList>
          <InputContainer>
            <CommentInput
              type="text"
              placeholder="댓글을 입력하세요"
              onChange={onChangeComment}
            />{' '}
            <Enter
              style={{
                cursor: 'pointer',
                position: 'absolute',
                right: '1rem',
                top: '.6rem',
              }}
            />
          </InputContainer>
        </CommentArea>
      </Card>
    </>
  );
};

export default Feed;

const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const ReportContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  position: relative;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin: 0.5rem auto 1rem auto;
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
  padding: 0 0 0.5rem 0;
  font-family: ${({ theme }) => theme.fonts.family.accent};
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
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
`;

const HeartCount = styled.p`
  margin-left: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  color: ${({ theme }) => theme.colors.gr500};
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
`;

const CommentCount = styled.p`
  margin-left: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  color: ${({ theme }) => theme.colors.gr500};
`;

const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentList = styled.div``;

const InputContainer = styled.div`
  position: relative;
`;

const CommentInput = styled.input`
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gr300};
  border-radius: 3rem;
  padding: 0.75rem 1.25rem;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.bl500};
    color: ${({ theme }) => theme.colors.bl500};
  }
`;
