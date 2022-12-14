import React from 'react';
import styled from 'styled-components';

export const Like = () => {
  return <InteractionP>π μ’μμ</InteractionP>;
};

export const Cheer = () => {
  return <InteractionP>πͺ μμν΄μ</InteractionP>;
};

export const Touched = () => {
  return <InteractionP>π₯Ή κ°λμ΄μμ</InteractionP>;
};

export const Watch = () => {
  return <InteractionP>π μ§μΌλ³Όκ²μ</InteractionP>;
};

export const Surprised = () => {
  return <InteractionP>π³ λλμ΄μ</InteractionP>;
};

const interactionText = {
  like: 'π μ’μμ',
  cheer: 'πͺ μμν΄μ',
  touched: 'π₯Ή κ°λμ΄μμ',
  watch: 'π μ§μΌλ³Όκ²μ',
  surprised: 'π³ λλμ΄μ',
};

export const Interaction = () => {
  return <InteractionP></InteractionP>;
};

const InteractionP = styled.p`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gr400};
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fonts.size.small};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.bl50};
  }
`;
