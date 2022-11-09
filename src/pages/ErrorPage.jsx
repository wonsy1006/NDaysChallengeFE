import React from 'react';
import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/dist/index';
import Button from '../components/common/Button';

const ErrorPage = () => {
  return (
    <>
      <PageTitle>ERROR</PageTitle>
      <Styled404>
        <SpanBlue>4</SpanBlue>
        <SpanYellow>0</SpanYellow>
        <SpanBlue>4</SpanBlue>
      </Styled404>
      <StyledP>페이지를 찾을 수 없습니다.</StyledP>
      <Link to="/">
        <ButtonContainer>
          <Button primary>메인으로 돌아가기</Button>
        </ButtonContainer>
      </Link>
    </>
  );
};

export default ErrorPage;

const PageTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamilies.accent};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.bl500};
  text-align: center;
`;

const Styled404 = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
`;

const SpanBlue = styled.span`
  font-family: ${({ theme }) => theme.fontFamilies.accent};
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.bl500};
`;

const SpanYellow = styled.span`
  font-family: ${({ theme }) => theme.fontFamilies.accent};
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.ye500};
`;

const StyledP = styled.p`
  font-family: ${({ theme }) => theme.fontFamilies.main};
  font-size: 1.5rem;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin: 0 auto 2rem auto;
`;
