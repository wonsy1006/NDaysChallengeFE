import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 20px 24px;
  gap: 1rem;
  border-radius: 3rem;
  border: 0;
  cursor: pointer;

  font-weight: 500;
  color: #fff;

  width: 136px;
  height: 45px;

  background: #0b62aa;
  &:hover {
    background: #0f85e5;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
