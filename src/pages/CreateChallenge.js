import React from 'react';
import styled from 'styled-components';

const CreateChallenge = () => {
  return (
    <div>
      <h2>챌린지 만들기</h2>
    </div>
  );
};

export default CreateChallenge;

const h2 = styled.h2`
  font-family: ${({ theme }) => theme.fontFamilies.accent};
`;
