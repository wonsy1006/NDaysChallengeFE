import React from 'react';
import { Link } from '../../node_modules/react-router-dom/dist/index';
import styled, { ThemeProvider } from 'styled-components';
import Button from '../components/common/Button';

const Main = () => {
  return (
    <div>
      <Link to="/login">로그인</Link>
      <br />
      <Link to="/create-challenge">챌린지 만들기</Link>
      <br />
    </div>
  );
};

export default Main;
