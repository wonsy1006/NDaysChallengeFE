import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <StyledDiv>
      <StyledLabel>비밀번호</StyledLabel>
      <StyledInput />
    </StyledDiv>
  );
};

export default Input;

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
    border: 1.5px solid ${({ theme }) => theme.colors.bl500};
    color: ${({ theme }) => theme.colors.bl500};
  }
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;
`;
