import { css } from 'styled-components';
import media from '@styles/media';


const PrismStyles = css`
  code[class*="language-"],
  pre[class*="language-"] {
  text-align: left;
  max-height: 75vh;
	white-space: pre-wrap;
	line-height: 1.7;
	-moz-tab-size: 2;
	tab-size: 2;
  hyphens: none;
  font-family: 'Fira Mono', monospace !important;
  font-size: 16px;
  font-weight: 700;
	overflow-x: auto !important;
	border-radius: 0;

${media.phablet`
    font-size: 12px;
  `};
  }

  /* Code blocks */
  pre[class*="language-"] {
    max-width: 100%;
    padding: 1em;
  	border-radius: 0.3em;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
  	background: var(--color-syntaxBackground);
    box-shadow: var(--color-cardsBoxShadow);
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 48px;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
  	padding: 0;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
  	color: var(--color-syntaxComment);
  }

  .token.punctuation {
  	color: var(--color-text);
  }

  .namespace {
  	opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
  	color: var(--color-syntaxDel);
  }

  .token.boolean,
  .token.number {
  	color: var(--color-syntaxBool);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
  	color: var(--color-syntaxRegex);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
  	color: var(--color-syntaxString);
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
  	color: var(--color-syntaxName);
  }

  .token.keyword {
  	color: var(--color-syntaxProp);
  }

  .token.regex,
  .token.important {
  	color: var(--color-syntaxRegex);
  }

  .token.important,
  .token.bold {
  	font-weight: bold;
  }

  .token.italic {
  	font-style: italic;
  }

  .token.entity {
  	cursor: help;
  }
`

export default PrismStyles;
