import React from 'react';
import styled from 'styled-components';
import Pic1 from '../assets/images/profile_pics/pic1.svg';
import Tag from '../components/common/Tag';

const removeChallenge = () => {
  // 삭제 확인 모달 띄우기
};

const ChallengeDetail = () => {
  return (
    <>
      <UserContainer>
        <Pic1 />
        <NicknameContainer>
          <NicknameSpan>OOOOO</NicknameSpan>
          <span>님의</span>
        </NicknameContainer>
      </UserContainer>
      <ChallengeTitle>홍제천에서 1만보 걷기</ChallengeTitle>
      <TagContainer>
        <Tag routine>규칙적인 생활</Tag>
        <Tag individual>개인</Tag>
      </TagContainer>
      <DajimContainer></DajimContainer>
      <RewardContainer></RewardContainer>
      <RemoveChallenge onClick={removeChallenge()}>
        챌린지 삭제하기
      </RemoveChallenge>
    </>
  );
};

export default ChallengeDetail;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 90%;
  margin: 0 auto 1.5rem auto;
`;

const NicknameContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-left: 0.5rem;
`;

const NicknameSpan = styled.span`
  color: ${({ theme }) => theme.colors.bl500};
  font-size: 1.5rem;
  font-weight: 700;
`;

const ChallengeTitle = styled.p`
  display: flex;
  justify-content: center;
  margin: 1rem auto 1rem auto;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.bl500};
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  margin: 0 auto;
`;

const DajimContainer = styled.div``;

const RewardContainer = styled.div``;

const RemoveChallenge = styled.a`
  display: inline-block;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.rd};
  color: ${({ theme }) => theme.colors.rd};
  text-align: center;
`;
