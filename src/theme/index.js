import {typographyVariants} from './typographyVariants';

const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      constrastText: '#FFFFFF',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      constrastText: '#FFFFFF',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      constrastText: '#FFFFFF',
    },
    light: {
      color: '#88989E',
      constrastText: '#FFFFFF',
    },
  },
  modes: {
    dark: {},
  }
};

export default {
  colors,
  typographyVariants,
  borderRadius: '8px',
  fontFamily: '\'Rubik\', sans-serif',
  transition: '200ms ease-in-out',
}