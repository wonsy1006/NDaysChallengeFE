import React from 'react';
import Card from '../common/Card';
import styled from 'styled-components';

const ChallengeStamp = () => {
  return (
    <Card>
      <StampWrapper></StampWrapper>
    </Card>
  );
};

export default ChallengeStamp;

const UncheckedStamp = styled.div`
  font-family: ${({ theme }) => theme.fonts.family.accent};
`;
