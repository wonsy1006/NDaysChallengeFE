import React, { useState } from 'react';
import styled from 'styled-components';
import ChallengeDajimForm from './ChallengeDajimForm';
import Card from '../../common/Card';
import { WriteIcon, ArrowUpIcon } from '../../common/Icon';
import { ColumnWrapper } from '../../common/Wrapper';

const ChallengeDajim = () => {
  // WriteIcon 클릭 시 다짐 입력 input 표시
  const [editMode, setEditMode] = useState(false);

  return (
    <Card>
      <DajimTitle>✨ 오늘의 다짐</DajimTitle>
      <IconWrapper>
        {editMode ? <ArrowUpIcon size={20} /> : <WriteIcon size={20} />}
      </IconWrapper>
      <DajimContent>하루종일 코딩하는 중</DajimContent>
      {/* <ChallengeDajimForm /> */}
    </Card>
  );
};

export default ChallengeDajim;

const DajimTitle = styled.p`
  width: 100%;
  margin: 1rem;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.family.primary};
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 1.2rem;

  & > * {
    cursor: pointer;
  }
`;

const DajimContent = styled.p`
  padding: 1.6rem;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.family.accent};
  color: ${({ theme }) => theme.colors.bl500};
`;
