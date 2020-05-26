const theme = {
  
  colors: {

    // Main Background Color
    mainBackground: `rgb(21, 32, 43)`,

    //Secondary Background Color
    secondaryBackground: `rgb(24, 38, 53)`,

    // Hero Gradient
    heroGradient: `linear-gradient(180deg, rgba(21, 32, 43, 1) 42.2%, rgba(32, 52, 74, 0.52))`,

    // Typography and Highlight Colors
    mainType: `rgba(255, 255, 255, 0.95)`,
    secondaryType: `rgb(159, 179, 199)`,
    
    // Highlights
    highlightPink: `rgba(245, 55, 106)`,
    highlightYellow: `rgba(255, 255, 0)`,
  },

  fonts: {
    // Body Content Fontface
    Jost: 'Jost, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',

    // Styled Content Fontface
    Balsamiq: 'Balsamiq Sans, Pangolin, Mali, Comic Neue, Comic Sans, Arial, sans-serif',
  },

  fontSizes: {
    xxs: '16px',
    xs: '18px',
    md: '20px',
    xmd: '22px',
    xxmd: '24px',
    lg: '26px',
    xlg: '32px',
    xxlg: '36px',
    uxlg: '48px',
  },

  space: {
    xxs: `.4rem`,
    xs: `.8rem`,
    sm: `1.6rem`,
    default: `2.4rem`,
    md: `3.2rem`,
    lg: `4.8rem`,
    xlg: `6.4rem`,
    xxlg: `9.6rem`,
  },

  zIndex: {
    bg: `-1`,
    default: `1`,
    footer: `5`,
    header: `5`,
  },

  blur: 'filter: blur(40px)',
  borderRadius: '3px',
  homeNavHeight: '85px',

  // -- Add any additional theming variables above --
}

export default theme;
