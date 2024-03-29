import { createGlobalStyle } from 'styled-components'
import theme from '@styles/theme'
import PrismStyles from '@styles/PrismStyles'
import FontFaces from './fonts'

const { fontSizes, fonts } = theme

const GlobalStyle = createGlobalStyle`
  ${FontFaces};

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  button {
    font-family: ${fonts.Futura};
    background: none;
    border: 0;
    padding: 0;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  svg {
    fill: currentColor;
  }
  .small,
  small {
    font-size: .8em;
  }
  html {
    font-size: 10px;
    -moz-osx-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
  }
  i, em {
    font-style: italic;
  }
  b {
    font-weight: 700;
  }
  input {
    font-family: ${fonts.Futura};
  }
  input[type="search"] {
    -webkit-appearance: textfield;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  /* Scrollbar Styles */
  /* -------------------- */
::-webkit-scrollbar-track
{
	background-color: var(--color-scrollbarTrack);
}

::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	background-color: var(--color-scrollbarThumb);
}

  /* Prism Styles */
  /* -------------------- */
  ${PrismStyles};


  /* Global Body Styles */
  /* -------------------- */
    body {
      font-family: ${fonts.Futura};
      font-weight: 400;
      letter-spacing: 0.02rem;
      font-size: ${fontSizes.xs};
      font-style: normal;
      color: var(--color-text);
      text-rendering: optimizeLegibility;
      background: var(--color-background);
    }
    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none;
        transition: none;
      }
    }
  `

export default GlobalStyle
