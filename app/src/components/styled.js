import styled from 'styled-components';

import * as styles from 'constants/styles';

export const PageTitle = styled.h1`
  font-size: ${styles.fontSizeHuge};
  margin-top: 30px;
  margin-bottom: -30px;
`;

export const ParagraphHeader = styled.h2`
  margin-top: 70px;
  margin-bottom: 15px;

  font-weight: 400;
  font-size: ${styles.fontSizeMedium};

  padding-bottom: 5px;
  border-bottom: 1px solid ${styles.borderColor};
`;
