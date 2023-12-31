import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    place-items: baseline;
  }

  * {
	  padding: 0;
	  margin: 0;
	  border: none;
    font-family: 'Open Sans', sans-serif;
  }

  *,
  *::before,
  *::after {
	  box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
  }

  aside, nav, footer, header, section, main {
	  display: block;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
	  font-weight: inherit;
  }

  ul, ul li {
	  list-style: none;
  }

  img, svg {
	  max-width: 100%;
	  height: auto;
  }

  *:active,
  *:hover,
  *:focus {
    outline: none;
  }
`;
