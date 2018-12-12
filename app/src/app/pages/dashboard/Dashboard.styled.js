import styled from 'styled-components';

import * as styles from 'constants/styles';

export const PageTitle = styled.h1`
  font-size: ${styles.fontSizeHuge};
  margin-top: 30px;
`;

export const ParagraphHeader = styled.h2`
  margin-top: 70px;
  margin-bottom: 15px;

  font-weight: 400;
  font-size: ${styles.fontSizeMedium};

  padding-bottom: 5px;
  border-bottom: 1px solid ${styles.borderColor};

  ${PageTitle} + & {
    margin-top: 40px;
  }
`;


export const Gallery = styled.div`
  display: flex;

  overflow-x: scroll;
  overflow-y: hidden;

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
