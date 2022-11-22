import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ColumnWrapper } from '../../common/Wrapper';
import { InputLabel, StyledInput } from '../../common/Input';
import Button from '../../common/Button';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  const submitForm = (data) => {
    setData(JSON.stringify(data));
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <ColumnWrapper>
        <InputLabel label="이메일" />
        <StyledInput type="email" {...register('email')} />
      </ColumnWrapper>
      <ColumnWrapper>
        <InputLabel label="비밀번호" />
        <StyledInput type="password" {...register('password')} />
      </ColumnWrapper>
      <ColumnWrapper justifyContent="center" alignItems="center">
        <Button primary>로그인</Button>
      </ColumnWrapper>
    </StyledForm>
  );
};

export default LoginForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.rd};
`;
