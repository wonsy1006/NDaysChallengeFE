import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ColumnWrapper } from '../../common/Wrapper';
import { InputLabel, StyledInput } from '../../common/Input';
import Button from '../../common/Button';
import Pic1 from '../../../assets/images/profile_pics/pic1.svg';
import Pic2 from '../../../assets/images/profile_pics/pic2.svg';
import Pic3 from '../../../assets/images/profile_pics/pic3.svg';
import Pic4 from '../../../assets/images/profile_pics/pic4.svg';
import Pic5 from '../../../assets/images/profile_pics/pic5.svg';
import Pic6 from '../../../assets/images/profile_pics/pic6.svg';

const EditProfileForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  const submitForm = (data) => {
    setData(JSON.stringify(data));
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <ColumnWrapper>
        <DisabledLabel>이메일</DisabledLabel>
        <StyledInput {...register('email')} type="email" disabled />
      </ColumnWrapper>
      <ColumnWrapper>
        <InputLabel label="비밀번호" />
        <StyledInput {...register('password')} type="password" />
      </ColumnWrapper>
      <ColumnWrapper>
        <InputLabel label="비밀번호 확인" />
        <StyledInput {...register('passwordCheck')} type="password" />
      </ColumnWrapper>
      <ColumnWrapper>
        <InputLabel label="닉네임" />
        <StyledInput {...register('nickname')} type="text" />
      </ColumnWrapper>
      <ColumnWrapper>
        <InputLabel label="프로필 사진 선택" />
        <RadioWrapper>
          <Radio
            {...register('profilePic')}
            type="radio"
            value="pic1"
            id="pic1"
          />
          <ProfileLabel htmlFor="pic1">
            <Pic1 />
          </ProfileLabel>
          <Radio
            {...register('profilePic')}
            type="radio"
            value="pic2"
            id="pic2"
          />
          <ProfileLabel htmlFor="pic2">
            <Pic2 />
          </ProfileLabel>
          <Radio
            {...register('profilePic')}
            type="radio"
            value="pic3"
            id="pic3"
          />
          <ProfileLabel htmlFor="pic3">
            <Pic3 />
          </ProfileLabel>
          <Radio
            {...register('profilePic')}
            type="radio"
            value="pic4"
            id="pic4"
          />
          <ProfileLabel htmlFor="pic4">
            <Pic4 />
          </ProfileLabel>
          <Radio
            {...register('profilePic')}
            type="radio"
            value="pic5"
            id="pic5"
          />
          <ProfileLabel htmlFor="pic5">
            <Pic5 />
          </ProfileLabel>
          <Radio
            {...register('profilePic')}
            type="radio"
            value="pic6"
            id="pic6"
          />
          <ProfileLabel htmlFor="pic6">
            <Pic6 />
          </ProfileLabel>
        </RadioWrapper>
      </ColumnWrapper>
      <ColumnWrapper justifyContent="center" alignItems="center">
        <Button primary>회원가입</Button>
      </ColumnWrapper>
    </StyledForm>
  );
};

export default EditProfileForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.5rem;
  flex-wrap: wrap;
  width: 95%;
  margin: 0.6rem auto 3.2rem;
`;

const Radio = styled.input`
  appearance: none;

  &:checked + label {
    border: 3px solid ${({ theme }) => theme.colors.gr400};
    border-radius: 50%;
    cursor: pointer;
  }
`;

const ProfileLabel = styled.label`
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  border-radius: 50%;

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.gr300};
    border-radius: 50%;
    cursor: pointer;
  }
`;

const DisabledLabel = styled.label`
  width: 90%;
  margin: 0 auto 1rem;
  color: ${({ theme }) => theme.colors.gr300};
`;
