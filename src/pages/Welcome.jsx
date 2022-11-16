import React from 'react';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';
import styled from 'styled-components';
import Button from '../components/common/Button';

const Welcome = () => {
  const navigate = useNavigate();

  const directToMain = () => {
    window.localStorage.setItem('firstAccess', true);
    navigate('/');
  };

  return (
    <>
      <h2>
        <WaveSpan className="n">N</WaveSpan>
        <WaveSpan className="days">D</WaveSpan>
        <WaveSpan className="days">a</WaveSpan>
        <WaveSpan className="days">y</WaveSpan>
        <WaveSpan className="days">s</WaveSpan>
        <WaveSpan className="challenge">C</WaveSpan>
        <WaveSpan className="challenge">h</WaveSpan>
        <WaveSpan className="challenge">a</WaveSpan>
        <WaveSpan className="challenge">l</WaveSpan>
        <WaveSpan className="challenge">l</WaveSpan>
        <WaveSpan className="challenge">e</WaveSpan>
        <WaveSpan className="challenge">n</WaveSpan>
        <WaveSpan className="challenge">g</WaveSpan>
        <WaveSpan className="challenge">e</WaveSpan>
      </h2>
      <Button primary onClick={directToMain}>
        시작하기
      </Button>
    </>
  );
};

export default Welcome;

const WaveSpan = styled.span`
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  animation: wave 1s infinite;
  animation-delay: calc(0.1s * var(--i));
`;
