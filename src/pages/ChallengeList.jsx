import React from 'react';
import styled from 'styled-components';
import Pic1 from '../assets/images/profile_pics/pic1.svg';
import ChallengeListItem from '../components/features/challengeList/ChallengeListItem';

const challengeData = {
  id: '',
  title: '',
  tag: '',
  startDate: '',
  endDate: '',
};

const ChallengeList = () => {
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
        <IndividualSection>
          <h3>개인 챌린지</h3>
          <ChallengeListItem />
        </IndividualSection>
        <GroupSection>
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
