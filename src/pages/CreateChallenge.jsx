import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';

const CreateChallenge = () => {
  const [challengeData, setChallengeData] = useState({
    title: '',
    category: '',
    period: '',
    passCount: '',
    reward: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setChallengeData({
      ...challengeData,
      [name]: value,
    });
  };

  return (
    <>
      <PageTitle>챌린지 만들기</PageTitle>
      <StyledForm>
        <StyledDiv>
          <StyledLabel>챌린지 이름</StyledLabel>
          <StyledInput
            type="text"
            placeholder="30자 이하 입력"
            onChange={onChange}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledLabel>챌린지 카테고리</StyledLabel>
          <StyledSelect placeholder="카테고리를 선택하세요" name="category">
            <option value="study">공부</option>
            <option value="workout">운동</option>
            <option value="hobby">취미</option>
            <option value="mental">멘탈케어</option>
          </StyledSelect>
        </StyledDiv>
        <StyledDiv>
          <StyledLabel>챌린지 기간</StyledLabel>
          <RadioContainer>
            <RadioLabel>
              <input
                type="radio"
                name="period"
                checked
                value="14days"
                onChange={onChange}
              />
              14일
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="period"
                value="30days"
                onChange={onChange}
              />
              30일
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="period"
                value="60days"
                onChange={onChange}
              />
              60일
            </RadioLabel>
          </RadioContainer>
        </StyledDiv>
        <StyledDiv>
          <StyledLabel>패스 횟수</StyledLabel>
          <StyledInput type="number" onChange={onChange} />
        </StyledDiv>
        <StyledDiv>
          <StyledLabel>보상 설정</StyledLabel>
          <StyledInput type="text" onChange={onChange} />
        </StyledDiv>
        <ButtonContainer>
          <Button primary>챌린지 만들기</Button>
        </ButtonContainer>
      </StyledForm>
    </>
  );
};

export default CreateChallenge;

const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto 1.5rem;
`;

const StyledInput = styled.input`
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

const StyledLabel = styled.label`
  font-size: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin: 0 auto 2rem auto;
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 44.5px;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gr300};
  border-radius: 3rem;
  outline: none;
  appearance: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.bl500};
  }
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RadioLabel = styled.label`
  font-size: 1rem;
  width: 30%;
`;
