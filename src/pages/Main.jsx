import React from 'react';
import { Link } from '../../node_modules/react-router-dom/dist/index';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Pic1 from '../assets/images/profile_pics/pic1.svg';
import NoChallenge from '../assets/images/noChallenge.svg';
import Checkbox from '../components/common/Checkbox';
import Tag from '../components/common/Tag';
import { SearchInput, EnterInput } from '../components/common/Input';
import { InputLabel } from '../components/common/Input';

const onChange = () => {};

const Main = () => {
  return (
    <div>
      <UserNameContainer>
        <Pic1 />
        <StyledSpan>OOOOO 님</StyledSpan>
        <span>의 챌린지</span>
      </UserNameContainer>
      <Card>
        <NoChallenge></NoChallenge>
        <StyledText>
          아직 챌린지를 만들지 않으셨군요? <br />
          새로운 챌린지를 만들어 보세요!
        </StyledText>
        <ButtonContainer>
          <Link to="/create-challenge">
            <Button primary>챌린지 만들기</Button>
          </Link>
        </ButtonContainer>
      </Card>
      <Link to="/login">로그인</Link>
      <Link to="/register">회원가입</Link>
      <Link to="/fdwerw">에러 페이지</Link>
      <Link to="/welcome">웰컴</Link>
    </div>
  );
};

export default Main;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.p`
  margin: 1rem auto 0.5rem auto;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
`;

const UserNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 90%;
  margin: 0 auto 1rem auto;

  & + & {
    margin: 0.5rem;
  }
`;

const StyledSpan = styled.span`
  margin: 0 0.5rem 0 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.bl500};
`;
