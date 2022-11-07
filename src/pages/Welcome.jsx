import React from 'react';
import styled from 'styled-components';

const Welcome = () => {
  return (
    <div>
      <h2>
        <waveSpan className="n">N</waveSpan>
        <waveSpan className="days">D</waveSpan>
        <waveSpan className="days">a</waveSpan>
        <waveSpan className="days">y</waveSpan>
        <waveSpan className="days">s</waveSpan>
        <waveSpan className="challenge">C</waveSpan>
        <waveSpan className="challenge">h</waveSpan>
        <waveSpan className="challenge">a</waveSpan>
        <waveSpan className="challenge">l</waveSpan>
        <waveSpan className="challenge">l</waveSpan>
        <waveSpan className="challenge">e</waveSpan>
        <waveSpan className="challenge">n</waveSpan>
        <waveSpan className="challenge">g</waveSpan>
        <waveSpan className="challenge">e</waveSpan>
      </h2>
    </div>
  );
};

export default Welcome;

const waveSpan = styled.span`
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  animation: wave 1s infinite;
  animation-delay: calc(0.1s * var(--i));
`;
