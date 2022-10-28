import React from 'react';
import { Link } from '../../node_modules/react-router-dom/dist/index';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const Main = () => {
  return (
    <div>
      <Link to="/login">로그인</Link>
      <br />
      <Link to="/create-challenge">챌린지 만들기</Link>
      <br />
      <ButtonContainer>
        <Button refuse>거절</Button>
        <Button accept>수락</Button>
      </ButtonContainer>
      <Input label="아이디" />
    </div>
  );
};

export default Main;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
