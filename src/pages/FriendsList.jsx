import React from 'react';
import styled from 'styled-components';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Search from '../assets/icons/search.svg';
import Pic1 from '../assets/images/profile_pics/pic1.svg';

const FriendsList = () => {
  return (
    <>
      <PageTitle>내 친구 목록</PageTitle>
      <Card>
        <Pic1 />
        <p>OOOOO님이 친구 요청을 보냈습니다.</p>
        <ButtonContainer>
          <Button refuse>거절</Button>
          <Button accept>수락</Button>
        </ButtonContainer>
      </Card>
      <StyledH3>친구 추가</StyledH3>
      <RequestContainer>
        <SearchInput placeholder="닉네임 또는 아이디를 입력해 주세요" />
        <StyledH4>검색 결과</StyledH4>
        <ResultContainer>
          <ResultListContainer>
            <FriendContainer>
              <Pic1 style={{ marginRight: '1rem' }} />
              <span>OOOOO</span>
            </FriendContainer>
            <Button small>친구 추가</Button>
          </ResultListContainer>
          <ResultListContainer>
            <FriendContainer>
              <Pic1 style={{ marginRight: '1rem' }} />
              <span>OOOOO</span>
            </FriendContainer>
            <Button small>친구 추가</Button>
          </ResultListContainer>
        </ResultContainer>
      </RequestContainer>
      <StyledH3>친구 목록</StyledH3>
    </>
  );
};

export default FriendsList;

const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

const StyledH3 = styled.h3`
  margin: 2rem auto 1rem auto;
  width: 90%;
`;

const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
`;

const SearchInput = styled.input`
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gr300};
  border-radius: 3rem;
  padding: 0.75rem 1.25rem;
  width: 90%;
  margin: 0 auto;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.bl500};
    color: ${({ theme }) => theme.colors.bl500};
  }
`;

const StyledH4 = styled.h4`
  margin: 2rem auto 1rem auto;
  width: 90%;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 1rem auto 0;
`;

const ResultListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FriendContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
