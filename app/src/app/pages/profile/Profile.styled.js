import styled from 'styled-components';
import { lighten } from 'polished';

import * as styles from 'constants/styles';

export const Header = styled.section`
  display: flex;
`;

export const AvatarImage = styled.img.attrs({
  alt: 'avatar',
})`
  width: 190px;
  height: 190px;
  object-fit: cover;

  border-radius: 100vmax;
`;

export const Aside = styled.aside`
  margin-left: 15px;

  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const Caption = styled.h3`
  font-size: ${styles.fontSizeTiny};
  color: ${lighten(0.3, styles.fontColor)};
`;

export const Description = styled.h1`
  margin-top: 5px;

  font-size: ${styles.fontSizeHuge};
`;

export const ParagraphHeader = styled.h2`
  margin-top: 70px;
  margin-bottom: 20px;

  font-weight: 400;
  font-size: ${styles.fontSizeMedium};

  padding-bottom: 5px;
  border-bottom: 1px solid ${styles.borderColor};

  ${Header} + & {
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

  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;

  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;
