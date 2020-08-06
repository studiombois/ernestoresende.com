import { css } from 'styled-components'

/* Regular types */
import FuturaRegularWOFF2 from '@fonts/Futura/FuturaRegular.woff2'
import FuturaMediumWOFF2 from '@fonts/Futura/FuturaMedium.woff2'
import FuturaBoldWOFF2 from '@fonts/Futura/FuturaBold.woff2'
import FuturaBlackWOFF2 from '@fonts/Futura/FuturaBlack.woff2'


/* Monospaced types  */
import LeagueMonoRegularWOFF2 from '@fonts/LeagueMono/LeagueMonoRegular.woff2'
import LeagueMonoBoldWOFF2 from '@fonts/LeagueMono/LeagueMonoBold.woff2'

/* Highlighting types */
import SrirachaRegularWOFF2 from '@fonts/Sriracha/SrirachaRegular.woff2'

const FontFaces = css`
  @font-face {
    font-family: 'Futura';
    src: url(${FuturaRegularWOFF2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura';
    src: url(${FuturaMediumWOFF2}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura';
    src: url(${FuturaBoldWOFF2}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura';
    src: url(${FuturaBlackWOFF2}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'League Mono';
    src: url(${LeagueMonoRegularWOFF2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'League Mono';
    src: url(${LeagueMonoBoldWOFF2}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sriracha';
    src: url(${SrirachaRegularWOFF2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
`

export default FontFaces
