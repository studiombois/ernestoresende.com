export const COLORS = {
  text: {
    light: 'rgb(33, 35, 44)', // Near black with a tone of blue.
    dark: 'rgba(255, 255, 255, 0.95)', // White with a bit of transparency
  },

  secondaryText: {
    light: 'rgb(63, 72, 82)',
    dark: 'rgb(159, 179, 199)'
  },
  
  background: {
    light: 'rgb(249, 249, 249)', // Very bright tone of gray.
    dark: 'rgb(21, 32, 43)', // Very dark tone of blue.
  },

  gradients: {
    light: 'rgba(191, 222, 242, 0.50)',
    dark: 'linear-gradient(180deg, rgba(21, 32, 43, 1) 42.2%, rgba(32, 52, 74, 0.52))',
  },

  cards: {
    light: 'rgb(28, 48, 54)', // One tone brighter then dark mode background.
    dark: 'rgba(255, 255, 255, 0.95)', // Same color as Light Mode Typography.
  },

  footer: {
    light: 'rgb(191, 222, 242)',
    dark: 'rgb(24, 38, 53)',
  },

  highlights: {
    light: 'rgb(51, 82, 239)',
    dark: 'rgb(245, 55, 106)',
  },

  navBackground: {
    light: 'rgba(191, 222, 242, 0.50)',
    dark: 'rgb(21, 32, 43)',
  }
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
