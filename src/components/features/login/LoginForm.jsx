import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ColumnWrapper } from '../../common/Wrapper';
import { InputLabel, TextInput } from '../../common/Input';
import Button from '../../common/Button';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <ColumnWrapper>
        <InputLabel label="이메일" />
        <TextInput type="email" {...register('email')} />
      </ColumnWrapper>
      <ColumnWrapper>
        <InputLabel label="비밀번호" />
        <TextInput type="password" {...register('password')} />
      </ColumnWrapper>
      <ColumnWrapper justifyContent="center" alignItems="center">
        <Button type="submit" primary>
          로그인
        </Button>
      </ColumnWrapper>
    </StyledForm>
  );
};

export default LoginForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
