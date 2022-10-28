import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 1rem;
  gap: 1rem;
  border: 0;
  cursor: pointer;

  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
  color: #fff;

  width: 12rem;
  height: 3rem;

  /* background: ${({ theme }) => theme.colors.bl500};
  &:hover {
    background: #2e73ac;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  } */

  ${(props) =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.colors.bl500};
      padding: 1.4rem 1.6rem;
      border-radius: 3rem;
      &:hover {
        background: #2e73ac;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
      }
    `}

  ${(props) =>
    props.sub &&
    css`
      background: ${({ theme }) => theme.colors.ye500};
      padding: 1.4rem 1.6rem;
      border-radius: 3rem;
      &:hover {
        background: #eab12c;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
      }
    `}

  ${(props) =>
    props.accept &&
    css`
      padding: 0.5rem 1rem;
      width: 10rem;
      height: 2.5rem;
      border: 1px solid ${({ theme }) => theme.colors.gr};
      border-radius: 0.5rem;
      background: transparent;
      color: ${({ theme }) => theme.colors.gr};
      font-size: 1rem;
      &:hover {
        background: ${({ theme }) => theme.colors.gr};
        color: ${({ theme }) => theme.colors.gr000};
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
      }
    `}
  
    ${(props) =>
    props.refuse &&
    css`
      padding: 0.5rem 1rem;
      width: 10rem;
      height: 2.5rem;
      border: 1px solid ${({ theme }) => theme.colors.rd};
      border-radius: 0.5rem;
      background: transparent;
      color: ${({ theme }) => theme.colors.rd};
      font-size: 1rem;
      &:hover {
        background: ${({ theme }) => theme.colors.rd};
        color: ${({ theme }) => theme.colors.gr000};
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
      }
    `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
