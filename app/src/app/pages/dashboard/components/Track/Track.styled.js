import styled from 'styled-components';
import { lighten } from 'polished';

import * as styles from 'constants/styles';

export const Container = styled.article`
  border-radius: ${styles.borderRadius};
  border: 1px solid ${styles.borderColor};
  overflow: hidden;

  cursor: pointer;

  display: flex;

  &:hover {
    background: ${styles.hoverBackground};
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;

  margin-right: 20px;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 5px;

  font-weight: normal;
  font-size: ${styles.fontSizeTiny};
`;

export const Description = styled.p`
  font-weight: normal;
  font-size: ${styles.fontSizeTiny};

  color: ${lighten(0.25, styles.fontColor)};
`;
