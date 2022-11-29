import React from 'react';
import styled from 'styled-components';
import ProfilePic from './ProfilePic';
import { ColumnWrapper, RowWrapper } from './Wrapper';

export const ColumnUserInfo = (props) => {
  return (
    <ColumnWrapper>
      <ProfilePic picType={props.picType} />
      <Nickname>{props.nickname}</Nickname>
    </ColumnWrapper>
  );
};

export const RowUserInfo = (props) => {
  return (
    <RowWrapper>
      <ProfilePic picType={props.picType} />
      <Nickname>{props.nickname}</Nickname>
    </RowWrapper>
  );
};
