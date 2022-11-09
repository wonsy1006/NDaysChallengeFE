import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Pic1 from '../assets/images/profile_pics/pic1.svg';
import Pic2 from '../assets/images/profile_pics/pic2.svg';
import Pic3 from '../assets/images/profile_pics/pic3.svg';
import Pic4 from '../assets/images/profile_pics/pic4.svg';
import Pic5 from '../assets/images/profile_pics/pic5.svg';
import Pic6 from '../assets/images/profile_pics/pic6.svg';

const Register = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    checkPassword: '',
    nickname: '',
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
      <PageTitle>회원가입</PageTitle>
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
        <StyledDiv>
          <StyledLabel>비밀번호 확인</StyledLabel>
          <StyledInput
            name="password"
            type="password"
            value={userData.checkPassword}
            placeholder="8-12자의 영어, 숫자 입력"
            onChange={onChange}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledLabel>닉네임</StyledLabel>
          <StyledInput
            name="nickname"
            value={userData.nickname}
            type="text"
            placeholder="1-5자 한글 혹은 1-10자 영문으로 입력"
            onChange={onChange}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledLabel>프로필사진 선택</StyledLabel>
          <PicsContainer>
            <Pic1 />
            <Pic2 />
            <Pic3 />
            <Pic4 />
            <Pic5 />
            <Pic6 />
          </PicsContainer>
        </StyledDiv>
        <ButtonContainer>
          <Button primary>회원가입</Button>
        </ButtonContainer>
      </StyledForm>
    </>
  );
};

export default Register;

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
  text-align-last: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin: 0 auto 2rem auto;
`;

const PicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0.5rem auto 0 auto;

  & > {
    cursor: pointer;
  }
`;
