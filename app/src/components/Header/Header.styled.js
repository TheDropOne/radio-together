import styled from 'styled-components';
import { lighten } from 'polished';

import { Link } from 'react-router-dom';

import * as styles from 'constants/styles';

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0 25px;

  border-bottom: 1px solid ${styles.borderColor};
`;

export const Title = styled(Link).attrs({
  to: '/',
})`
  font-weight: 300;
  font-size: ${styles.fontSizeHuge};
  letter-spacing: -2px;

  padding: 20px 0;
`;

export const Search = styled.a`
  flex: 1;
  max-width: 350px;

  font-weight: normal;
  font-size: ${styles.fontSizeTiny};
  color: ${lighten(0.3, styles.fontColor)};

  padding: 10px 15px;
  margin: 0 20px;

  border-radius: ${styles.borderRadius};
  border: 1px solid ${styles.borderColor};
`;

export const Avatar = styled.img`
  margin-left: 20px;

  width: 45px;
  height: 45px;
  object-fit: cover;

  border-radius: 100vmax;
  border: 1px solid ${styles.borderColor};
`;

export const Profile = styled(Link).attrs({
  to: '/user/',
})`
  display: flex;
  align-items: center;

  margin-left: auto;

  font-weight: normal;
  font-size: ${styles.fontSizeSmall};
`;
