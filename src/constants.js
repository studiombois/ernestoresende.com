export const COLORS = {
  /* Typography, highlight and links */
  text: {
    light: 'rgb(33, 35, 44)', // Near black with a tone of blue.
    dark: 'rgba(255, 255, 255, 0.95)', // White with a bit of transparency
  },
  secondaryText: {
    light: 'rgb(63, 72, 82)', // Dark gray with a light blue tone.
    dark: 'rgb(159, 179, 199)', // Light gray with a light blue tone.
  },
  highlights: {
    light: 'rgb(51, 82, 239)', // Dark Blue/Purple in contrast with the white background.
    dark: 'rgb(245, 55, 106)', // Light saturated pink in contrast with the dark background.
  },

  
  /* Background for page and page components (cards, heros, navigation, etc.) */
  background: {
    light: 'rgb(249, 249, 249)', // Very bright tone of gray.
    dark: 'rgb(21, 32, 43)', // Very dark tone of blue.
  },
  gradients: {
    light: 'rgba(191, 222, 242, 0.50)',
    dark: 'linear-gradient(180deg, rgba(21, 32, 43, 1) 42.2%, rgba(32, 52, 74, 0.52))',
  },
  cards: {
    light: 'rgba(255, 255, 255, 0.95)', // Same color as Light Mode Typography.
    dark: 'rgb(28, 40, 54)', // One tone brighter then dark mode background.
  },
  cardsBoxShadow: {
    light: '0px 0px 15px rgba(153, 153, 153, 0.3)', // Same color as Light Mode Typography.
    dark: '0px 0px 30px rgba(0, 0, 0, 0.05)', // One tone brighter then dark mode background.
  },
  footer: {
    light: 'rgb(191, 222, 242)',
    dark: 'rgb(24, 38, 53)',
  },
  navBackground: {
    light: 'rgba(191, 222, 242, 0.50)',
    dark: 'rgb(21, 32, 43)',
  },


  /* Custom scrollbar colors */
  scrollbar: {
    light: 'rgba(191, 222, 242, 0.50)',
    dark: 'rgb(63, 72, 82)',
  },
  scrollbarTrack: {
    light: 'rgba(191, 222, 242, 0.50)',
    dark: 'rgb(63, 72, 82)',
  },
  scrollbarThumb: {
    light: 'rgba(191, 222, 242, 0.50)',
    dark: 'rgb(159, 179, 199)',
  },
  scrollbarThumbHover: {
    light: 'rgba(191, 222, 242, 0.50)',
    dark: 'rgb(159, 150, 199)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
