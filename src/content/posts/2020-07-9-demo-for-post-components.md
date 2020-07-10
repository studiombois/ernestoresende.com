---
title: "Demo for post components"
date: 2020-07-09
description: "This is a description. Make sure descriptions don't go over the length of a tweet or you will probably break the responsive components."
---

This a demo post to highlight some of styles and components that are possible to create with the current configuration of styles I have for blog posts. More features and complex components can be added in the future.

# This is a Header 1

Lorem Ipsum is a dummy text from the typographic industry.

## This is a Header 2

Informational components can be written with the ```aside``` tag:

<aside>
  <div></div>
  <strong>Learning Figma as a developer</strong>
  <p>I am not a designer, and I'd say that my Figma skills are somewhere between "beginner" and "intermediate". I am absolutely not proficient with it in the way that a professional designer would be.</p>
  <p class='last-line'>Even with rudimentary skills, though, it sometimes feels like a super power. Being able to quickly come up with my own assets has helped me so many times on my side-projects. Not to mention how quick it is to prototype! I'd highly recommend taking some time to familiarize yourself with it, or another design tool.</p>
</aside>

Make sure code snippets have the language extension for Prism.js styles for syntax highlighting to kick in:

```jsx
function getInitialColorMode() {
  /* Same as above. Omitted for brevity */
}
export const ThemeContext = React.createContext();
export const ThemeProvider = ({ children }) => {
  const [
    colorMode,
    rawSetColorMode
  ] = React.useState(getInitialColorMode);
  const setColorMode = (value) => {
    rawSetColorMode(value);
    // Persist it on update
    window.localStorage.setItem('color-mode', value);
  }
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  )

  // More code content to simulate the existence of a
  // larger code snippet.

  export const ThemeProvider = ({ children }) => {
  const [
    colorMode,
    rawSetColorMode
  ] = React.useState(getInitialColorMode);
  const setColorMode = (value) => {
    rawSetColorMode(value);
    // Persist it on update
    window.localStorage.setItem('color-mode', value);
  }
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

If there is something you want to highlight without placing a link, you can do so with the ```<em>``` tag.

This is some paragraph content and this is something I want to <em>highlight</em>.

- <em>GraphQL</em> - Sourcing content and presenting structured data.
- <em>Styled-Components</em> - CSS-in-JS library.
- <em>Gatsby Cloud or Netlify</em> - Something Something bla bla
