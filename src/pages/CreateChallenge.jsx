import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import { QuestionIcon } from '../components/common/Icon';
import { todayDate } from '../utils/Date';
import CreateChallengeForm from '../components/features/createChallenge/CreateChallengeForm';

const CreateChallenge = () => {
  const [challengeData, setChallengeData] = useState({
    type: '',
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
      <h2>챌린지 생성</h2>
      <CreateChallengeForm></CreateChallengeForm>
      {/* <StyledForm>
        <StyledDiv>
          <StyledLabel>챌린지 유형</StyledLabel>
          <RadioContainer>
            <RadioLabel>
              <input
                type="radio"
                name="period"
                checked
                value="individual"
                onChange={onChange}
              />
              개인
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="period"
                value="group"
                onChange={onChange}
              />
              단체
            </RadioLabel>
          </RadioContainer>
        </StyledDiv>
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
            <option value="mental">기타</option>
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
          <StyledLabel>시작일 선택</StyledLabel>
          <StyledInput
            type="date"
            placeholder={todayDate}
            onChange={onChange}
          />
        </StyledDiv>

        {/* 설정 / 미설정 선택에 따라 number input 표시하기 / 가리기 */}
      {/* 양의 정수 이외의 value는 입력 못 하게 하기 */}
      {/* <StyledDiv>
          <StyledLabel>
            패스 횟수
            <QuestionIcon size={20} />
          </StyledLabel>
          <RadioContainer>
            <RadioLabel>
              <input type="radio" name="pass" /> 설정
            </RadioLabel>
            <RadioLabel>
              <input type="radio" name="pass" /> 미설정
            </RadioLabel>
          </RadioContainer>
          <StyledInput type="number" onChange={onChange} />
        </StyledDiv>

        {/* 설정 / 미설정 선택에 따라 text input 표시하기 / 가리기 */}
      {/* 보상 설정 제한 텍스트 길이 넘어갈 경우 에러 메세지 표시 */}
      {/* <StyledDiv>
          <StyledLabel>보상 설정</StyledLabel>
          <StyledInput type="text" onChange={onChange} />
        </StyledDiv>
        <ButtonContainer>
          <Button primary>챌린지 만들기</Button>
        </ButtonContainer>
      </StyledForm> */}
    </>
  );
};

export default CreateChallenge;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto 2.4rem;
`;

const StyledInput = styled.input`
  font-size: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.gr300};
  border-radius: 3rem;
  padding: 1.2rem 2rem;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.bl500};
    color: ${({ theme }) => theme.colors.gr500};
  }
  &[type='date'] {
    font-family: ${({ theme }) => theme.fonts.family.main};
  }
`;

const StyledLabel = styled.label`
  width: 100%;
  margin-bottom: 1rem;
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
  font-size: 1.6rem;
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
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.bl500};
  border-radius: 1rem;
`;

const RadioLabel = styled.label`
  font-size: 1rem;
  width: 30%;
`;
