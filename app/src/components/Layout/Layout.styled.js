import styled from 'styled-components';

import * as styles from 'constants/styles';

export const Wrapper = styled.div`
  width: 100%;

  background-color: hsl(0, 0%, 90%);
`;

export const Main = styled.main`
  max-width: 950px;
  min-height: 100vh;
  margin: 0 auto;

  background-color: hsl(0, 0%, 100%);
`;

export const Section = styled.section`
  padding: 30px 25px;
`;

export const Footer = styled.footer`
  border-top: 1px solid ${styles.borderColor};
  padding: 0 20px;
  height: 50px;

  font-size: ${styles.fontSizeTiny};
  font-weight: normal;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
