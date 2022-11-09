import React from 'react';
import styled from 'styled-components';
import Pic1 from '../assets/images/profile_pics/pic1.svg';
import Card from '../components/common/Card';
import { Link } from '../../node_modules/react-router-dom/dist/index';

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
      <ListContainer>
        <IndividualContainer>
          <StyledH3>개인 챌린지</StyledH3>
          <Card>
            <ChallengeTitle>챌린지 이름을 입력하세요</ChallengeTitle>
            <RightContainer>
              <ChallengePeriod>2022.11.08 - 2022.11.30</ChallengePeriod>
              {/* <Link to="/challenge-detail"> */}
              <DetailLink>상세 보기</DetailLink>
              {/* </Link> */}
            </RightContainer>
          </Card>
          <Card>
            <ChallengeTitle>챌린지 이름을 입력하세요</ChallengeTitle>
            <RightContainer>
              <ChallengePeriod>2022.11.08 - 2022.11.30</ChallengePeriod>
              {/* <Link to="/challenge-detail"> */}
              <DetailLink>상세 보기</DetailLink>
              {/* </Link> */}
            </RightContainer>
          </Card>
          <Card>
            <ChallengeTitle>챌린지 이름을 입력하세요</ChallengeTitle>
            <RightContainer>
              <ChallengePeriod>2022.11.08 - 2022.11.30</ChallengePeriod>
              {/* <Link to="/challenge-detail"> */}
              <DetailLink>상세 보기</DetailLink>
              {/* </Link> */}
            </RightContainer>
          </Card>
        </IndividualContainer>
        <GroupContainer>
          <StyledH3>단체 챌린지</StyledH3>
          <Card>
            <ChallengeTitle>챌린지 이름을 입력하세요</ChallengeTitle>
            <RightContainer>
              <ChallengePeriod>2022.11.08 - 2022.11.30</ChallengePeriod>
              {/* <Link to="/challenge-detail"> */}
              <DetailLink>상세 보기</DetailLink>
              {/* </Link> */}
            </RightContainer>
          </Card>
          <Card>
            <ChallengeTitle>챌린지 이름을 입력하세요</ChallengeTitle>
            <RightContainer>
              <ChallengePeriod>2022.11.08 - 2022.11.30</ChallengePeriod>
              {/* <Link to="/challenge-detail"> */}
              <DetailLink>상세 보기</DetailLink>
              {/* </Link> */}
            </RightContainer>
          </Card>
        </GroupContainer>
      </ListContainer>
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

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const IndividualContainer = styled.div``;

const GroupContainer = styled.div``;

const StyledH3 = styled.h3`
  margin-left: 1.2rem;
`;

const ChallengeTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  width: 95%;
  text-align: left;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

const ChallengePeriod = styled.span`
  font-size: 0.75rem;
  text-align: right;
  margin-bottom: 1rem;
`;

const DetailLink = styled.span`
  font-size: 0.9rem;
  text-align: center;
  width: 60px;
  color: ${({ theme }) => theme.colors.bl500};
  padding-bottom: 0.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bl500};
`;
