import React from 'react';
import styled from 'styled-components';
import { SearchIcon, EnterIcon } from './Icon';

// 각 페이지 기존 Input 이 컴포넌트로 교체

export const InputLabel = (props) => {
  return <StyledLabel>{props.label}</StyledLabel>;
};

export const TextInput = () => {
  return <StyledInput />;
};

export const SearchInput = (props) => {
  return (
    <InputWrapper>
      <StyledInput />
      <IconWrapper>
        <SearchIcon size={28} onClick={props.onClick} />
      </IconWrapper>
    </InputWrapper>
  );
};

export const EnterInput = () => {
  return (
    <InputWrapper>
      <StyledInput />
      <IconWrapper>
        <EnterIcon size={28} />
      </IconWrapper>
    </InputWrapper>
  );
};

export const SelectionInput = () => {};

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto 2.4rem;
  position: relative;
`;

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 1.6rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  font-size: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.gr300};
  border-radius: 4.8rem;
  padding: 1.2rem 2rem;
  width: 90%;
  margin: 0 auto;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.bl500};
    color: ${({ theme }) => theme.colors.bl500};
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  width: 2.8rem;
  height: 2.8rem;
  position: absolute;
  right: 4rem;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    cursor: pointer;
  }
`;
