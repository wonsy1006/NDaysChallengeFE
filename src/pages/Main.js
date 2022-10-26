import React from 'react';
import { Link } from '../../node_modules/react-router-dom/dist/index';

const Main = () => {
  return (
    <div>
      <h1>NDaysChallenge!</h1>
      <Link to="/login">로그인</Link>
      <br />
      <Link to="/create-challenge">챌린지 만들기</Link>
    </div>
  );
};

export default Main;
