import styled, { keyframes } from 'styled-components';

import * as styles from 'constants/styles';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 110px;
  margin-right: 30px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Image = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;

  border-radius: 100vmax;

  animation: ${spin} 15s linear ${() => Math.random().toFixed(2)}s infinite;
`;

export const Title = styled.p`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  margin-top: 5px;

  font-weight: normal;
  font-size: ${styles.fontSizeTiny};
`;
