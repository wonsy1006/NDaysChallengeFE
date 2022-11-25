import React, { useState } from 'react';
import styled from 'styled-components';
import Pic1 from '../assets/images/profile_pics/pic1.svg';
import ChallengeListItem from '../components/features/challengeList/ChallengeListItem';

const challengeData = [
  {
    id: '1',
    title: '챌린지 테스트 1',
    categoryTag: 'routine',
    typeTag: 'individual',
    startDate: '2022-11-25',
    endDate: '2022-12-05',
    detailUrl: '/challenge-detail',
  },
  {
    id: '1',
    title: '',
    categoryTag: 'routine',
    typeTag: 'individual',
    startDate: '2022-11-25',
    endDate: '2022-12-05',
    detailUrl: '/challenge-detail',
  },
];

const ChallengeList = () => {
  const [data, setData] = useState('');

  const sendData = () => {
    setData(challengeData);
  };

  return (
    <>
      <UserContainer>
        <Pic1 />
        <NicknameContainer>
          <NicknameSpan>OOOOO</NicknameSpan>
          <span>님의 챌린지</span>
        </NicknameContainer>
      </UserContainer>
      <ListSection>
        <IndividualSection id="individualChallenge">
          <h3>개인 챌린지</h3>
          <ChallengeListItem data={data} sendData={sendData} />
        </IndividualSection>
        <GroupSection id="groupChallenge">
          <h3>단체 챌린지</h3>
          <ChallengeListItem />
        </GroupSection>
      </ListSection>
    </>
  );
};

export default ChallengeList;

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
  align-items: center;
  margin-left: 0.5rem;
`;

const NicknameSpan = styled.span`
  color: ${({ theme }) => theme.colors.bl500};
  font-size: 1.7rem;
  font-weight: 700;
`;

const ListSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const IndividualSection = styled.section``;

const GroupSection = styled.section``;
