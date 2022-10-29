import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <>
      <PageTitle>로그인</PageTitle>
      <StyledForm>
        <StyledDiv>
          <StyledLabel>이메일</StyledLabel>
          <StyledInput
            name="email"
            value={userData.email}
            type="text"
            placeholder="abcde1234@gmail.com"
            onChange={onChange}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledLabel>비밀번호</StyledLabel>
          <StyledInput
            name="password"
            type="password"
            value={userData.password}
            placeholder="8-12자의 영어, 숫자 입력"
            onChange={onChange}
          />
        </StyledDiv>
        <ButtonContainer>
          <Button primary>로그인</Button>
        </ButtonContainer>
      </StyledForm>
      <StyledP>또는</StyledP>
      <ButtonContainer>
        <Button sub>카카오로 로그인</Button>
      </ButtonContainer>
      <RegisterContainer>
        <Link to="/register">
          <Register>회원가입</Register>
        </Link>
      </RegisterContainer>
    </>
  );
};

export default Login;

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
`;

const StyledP = styled.p`
  display: flex;
  justify-content: center;
  margin: 0.5rem auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin: 2rem auto;
`;

const Register = styled.a`
  font-size: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bl500};
  color: ${({ theme }) => theme.colors.bl500};
  cursor: pointer;
`;
