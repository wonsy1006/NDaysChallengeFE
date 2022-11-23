import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  position: ${(props) => props.position};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  position: ${(props) => props.position};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
