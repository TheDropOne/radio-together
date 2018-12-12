import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import { Link } from 'react-router-dom';

import * as styles from 'constants/styles';

export const Container = styled(Link).attrs({
  to: '/playlist/',
})`
  border-radius: ${styles.borderRadius};
  border: 1px solid ${styles.borderColor};
  overflow: hidden;

  cursor: pointer;

  &:hover {
    background: ${styles.hoverBackground};
  }
`;

const CoverWrapper = styled.figure`
  position: relative;
  width: 100%;

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
`;

export const Cover = ({ children }) => (
  <CoverWrapper>
    <Content>
      {children}
    </Content>
  </CoverWrapper>
);

export const Image = styled.img.attrs({
  alt: 'track cover',
})`
  width: 100%;
  height: 100%;
  object-fit: cover;

  display: block;
`;

export const Description = styled.p`
  padding: 10px 20px;

  font-weight: normal;
  font-size: ${styles.fontSizeTiny};
`;
