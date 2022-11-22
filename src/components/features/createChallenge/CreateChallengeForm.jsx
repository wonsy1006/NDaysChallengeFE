import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ColumnWrapper } from '../../common/Wrapper';
import { InputLabel, StyledInput } from '../../common/Input';
import { ArrowDownIcon } from '../../common/Icon';
import Button from '../../common/Button';

const CreateChallengeForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  const submitForm = (data) => {
    setData(JSON.stringify(data));
    console.log(data);
  };

  // 패스 횟수 input, 보상 input toggle
  const [showPassInput, setShowPassInput] = useState(false);
  const [showRewardInput, setShowRewardInput] = useState(false);
  const onPassClick = () => {
    setShowPassInput(!showPassInput);
  };
  const onRewardClick = () => {
    setShowRewardInput(!showRewardInput);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <ColumnWrapper>
        <InputLabel label="챌린지 유형" />
        <RadioWrapper>
          <Radio
            {...register('challengeType')}
            type="radio"
            value="individual"
            id="individual"
            checked
          />
          <RadioLabel htmlFor="individual">개인</RadioLabel>
          <Radio
            {...register('challengeType')}
            type="radio"
            value="group"
            id="group"
          />
          <RadioLabel htmlFor="group">단체</RadioLabel>
        </RadioWrapper>
      </ColumnWrapper>
      <ColumnWrapper>
        <InputLabel label="챌린지 이름" />
        <StyledInput
          {...register('challengeTitle', { required: true })}
          type="text"
        />
      </ColumnWrapper>
      <ColumnWrapper>
        <InputLabel label="챌린지 카테고리" />
        <Select {...register('challengeCategory', { required: true })}>
          <Option value="">카테고리를 선택하세요</Option>
          <Option value="study">공부</Option>
          <Option value="workout">운동</Option>
          <Option value="hobby">취미</Option>
          <Option value="mentalcare">멘탈케어</Option>
          <Option value="etc">기타</Option>
        </Select>
      </ColumnWrapper>
      <ColumnWrapper>
        <InputLabel label="챌린지 기간" />
        <RadioWrapper>
          <Radio
            {...register('challengePeriod')}
            type="radio"
            value="14days"
            id="14days"
            checked
          />
          <RadioLabel htmlFor="14days">14일</RadioLabel>
          <Radio
            {...register('challengePeriod')}
            type="radio"
            value="30days"
            id="30days"
          />
          <RadioLabel htmlFor="30days">30일</RadioLabel>
          <Radio
            {...register('challengePeriod')}
            type="radio"
            value="60days"
            id="60days"
          />
          <RadioLabel htmlFor="60days">60일</RadioLabel>
        </RadioWrapper>
      </ColumnWrapper>
      <ColumnWrapper>
        <InputLabel label="시작일 선택" />
        <StyledInput
          {...register('challengeStartDate', { required: true })}
          type="date"
        />
      </ColumnWrapper>
      <ColumnWrapper>
        <InputLabel label="패스 횟수 설정" />
        <RadioWrapper>
          <Radio
            {...register('challengePassSet')}
            type="radio"
            value="unsetPass"
            id="unsetPass"
            checked
          />
          <RadioLabel htmlFor="unsetPass" onClick={onPassClick}>
            미설정
          </RadioLabel>
          <Radio
            {...register('challengePassSet')}
            type="radio"
            value="setPass"
            id="setPass"
          />
          <RadioLabel htmlFor="setPass" onClick={onPassClick}>
            설정
          </RadioLabel>
        </RadioWrapper>
        {showPassInput ? (
          <PassInput
            {...register('challengePassCount')}
            id="challengePassCount"
            type="number"
          />
        ) : null}
      </ColumnWrapper>
      <ColumnWrapper>
        <InputLabel label="보상 설정" />
        <RadioWrapper>
          <Radio
            {...register('challengeRewardSet')}
            type="radio"
            value="unsetReward"
            id="unsetReward"
            checked
          />
          <RadioLabel htmlFor="unsetReward" onClick={onRewardClick}>
            미설정
          </RadioLabel>
          <Radio
            {...register('challengeRewardSet')}
            type="radio"
            value="setReward"
            id="setReward"
          />
          <RadioLabel htmlFor="setReward" onClick={onRewardClick}>
            설정
          </RadioLabel>
        </RadioWrapper>
        {showRewardInput ? (
          <RewardInput
            {...register('challengeReward')}
            id="challengeReward"
            type="text"
          />
        ) : null}
      </ColumnWrapper>
      <ColumnWrapper justifyContent="center" alignItems="center">
        <Button type="submit" primary>
          챌린지 생성
        </Button>
      </ColumnWrapper>
    </StyledForm>
  );
};

export default CreateChallengeForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-grow: 1;
  flex-wrap: no-wrap;
  width: 95%;
  margin: 0.6rem auto;
`;

const Radio = styled.input`
  appearance: none;

  &:checked + label {
    border: 1px solid ${({ theme }) => theme.colors.bl500};
    background: ${({ theme }) => theme.colors.bl500};
    color: #fff;
  }
`;

const RadioLabel = styled.label`
  display: inline-block;
  padding: 1.2rem 3.2rem;
  border: 1px solid ${({ theme }) => theme.colors.bl500};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.bl500};

  &:hover {
    border: 1px solid #2e73ac;
    background: #2e73ac;
    color: #fff;
    cursor: pointer;
  }
`;

const Select = styled.select`
  width: 90%;
  font-size: 1.6rem;
  padding: 1.2rem 2rem;
  margin: 0 auto 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.gr300};
  border-radius: 4.8rem;
  outline: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.bl500};
  }
`;

const Option = styled.option`
  color: ${({ theme }) => theme.colors.gr300};
`;

const PassInput = styled(StyledInput)`
  margin-top: 0.5rem;
`;

const RewardInput = styled(StyledInput)`
  margin-top: 0.5rem;
`;
