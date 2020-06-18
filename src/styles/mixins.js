import { css } from 'styled-components';
//import theme from '@styles/theme';
import media from '@styles/media';
//const { colors, zIndex } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexLeft: css `
    display: flex;
    justify-content: left;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  desktopAlignCenter: css`
    margin: 0 auto;
    width: 100%;
    right: 0px;
    left: 0px;
    max-width: 1100px;
  `,

  sidePadding: css`
    padding: 0 50px;
    ${media.phablet`padding: 0 25px;`};
  `,
};

export default mixins;
