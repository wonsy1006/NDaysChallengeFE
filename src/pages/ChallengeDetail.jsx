import React from 'react';
import styled from 'styled-components';
import ChallengeDajim from '../components/features/challengeDetail/ChallengeDajim';
import ChallengeReward from '../components/features/challengeDetail/ChallengeReward';
import ChallengeStamp from '../components/features/challengeDetail/ChallengeStamp';
import { ColumnWrapper, RowWrapper } from '../components/common/Wrapper';
import Modal from '../components/common/Modal';
import Pic1 from '../assets/images/profile_pics/pic1.svg';
import Tag from '../components/common/Tag';
import {
  TwitterIcon,
  KakaotalkIcon,
  InstagramIcon,
  FacebookIcon,
} from '../components/common/Icon';

const challenge = [
  {
    id: 1,
    title: '타이틀을 입력해 보세요',
    categoryTag: 'routine',
    typeTag: 'individual',
  },
];

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
      <RowWrapper justifyContent="center" margin="0 auto 2rem">
        <Tag routine>규칙적인 생활</Tag>
        <Tag individual>개인</Tag>
      </RowWrapper>
      <ChallengeDajim />
      <ChallengeReward />
      <ChallengeStamp />
      <RowWrapper width="90%" margin="1rem auto" justifyContent="space-between">
        <PassWrapper>
          남은 패스 : <LeftPass>3</LeftPass> 회
        </PassWrapper>
        <CountWrapper>
          <Succeeded>12</Succeeded> /<Entire>14</Entire>
        </CountWrapper>
      </RowWrapper>
      <ColumnWrapper
        justifyContent="center"
        alignItems="center"
        margin="2rem auto"
      >
        <RemoveChallenge onClick={removeChallenge()}>
          챌린지 삭제하기
        </RemoveChallenge>
      </ColumnWrapper>
      <ColumnWrapper id="invite">
        <h3>친구 초대하기</h3>
        <InviteIconsWrapper width="100%" margin="0 auto">
          <TwitterIcon size={48} />
          <KakaotalkIcon size={48} />
          <InstagramIcon size={48} />
          <FacebookIcon size={48} />
        </InviteIconsWrapper>
      </ColumnWrapper>
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
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.bl500};
`;

const PassWrapper = styled.div`
  font-size: 1.2rem;
`;

const LeftPass = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-left: 1rem;
`;

const CountWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.family.accent};
  font-size: ${({ theme }) => theme.fonts.size.h3};
`;

const Succeeded = styled.span`
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.bl500};
`;

const Entire = styled.span`
  margin-left: 1rem;
`;

const RemoveChallenge = styled.a`
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.rd};
  color: ${({ theme }) => theme.colors.rd};
  cursor: pointer;
`;

const InviteIconsWrapper = styled(RowWrapper)`
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: nowrap;
  margin: 1rem auto;

  & > * {
    cursor: pointer;
  }
`;
