import styled from 'styled-components';

export const Gallery = styled.div`
  display: flex;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;

  grid-column-gap: 30px;
  grid-row-gap: 10px;
`;
