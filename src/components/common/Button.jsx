import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../theme';

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 1.4rem 1.6rem;
  margin: 1rem;
  gap: 1rem;
  border-radius: 3rem;
  border: 0;
  cursor: pointer;

  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  color: #fff;

  width: 12rem;
  height: 3rem;

  background: ${({ theme }) => theme.color.bl500};
  &:hover {
    background: #2e73ac;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  }

  ${(props) =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.color.bl500};
      &:hover {
        background: #2e73ac;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
      }
    `}

  ${(props) =>
    props.sub &&
    css`
      background: ${({ theme }) => theme.color.ye500};
      &:hover {
        background: #2e73ac;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
      }
    `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
