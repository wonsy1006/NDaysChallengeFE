import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return CardContainer;
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  margin: 0 auto;
  height: auto;

  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
