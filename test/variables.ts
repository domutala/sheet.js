import { $eval } from '../src/functions/eval';

export const font = {
  size: {
    default: '1rem',
    min: '.875rem',
    max: '1.25rem'
  },
  weight: {
    normal: 'normal',
    bold: 'bold',
    bolder: '700'
  }
};

export const lineHeight = {
  default: 1.5,
  min: 1,
  max: 1.8
};

export const colors = {
  yellow: '#fcdc2a',
  white: '#fff',
  black: '#000',
  gray: '#dee2e6'
};

export const themeColors = {
  primary: colors.yellow,
  light: colors.white,
  dark: colors.black,
  secondary: colors.gray
};

export const borders = {
  width: '1px',
  style: 'solid',
  color: themeColors.secondary
};

export const spacers = {
  0: '0rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '1rem',
  4: '1.5rem',
  5: '3rem'
};

export const heading = {
  h1: {
    fontSize: $eval(`${font.size.default} * 2.5`),
    lineHeight: lineHeight.max,
    fontWeight: font.weight.bolder
  },
  h2: {
    fontSize: $eval(`${font.size.default} * 2`),
    lineHeight: lineHeight.max,
    fontWeight: font.weight.bolder
  },
  h3: {
    fontSize: $eval(`${font.size.default} * 1.75`),
    lineHeight: lineHeight.max,
    fontWeight: font.weight.bolder
  },
  h4: {
    fontSize: $eval(`${font.size.default} * 1.5`),
    lineHeight: lineHeight.max,
    fontWeight: font.weight.bolder
  },
  h5: {
    fontSize: $eval(`${font.size.default} * 1.25`),
    lineHeight: lineHeight.max,
    fontWeight: font.weight.bolder
  },
  h6: {
    fontSize: $eval(`${font.size.default} * 1`),
    lineHeight: lineHeight.max,
    fontWeight: font.weight.bolder
  }
};

export const shadows = {
  default: '0 .125rem .25rem rgba($black, .075)',
  min: '0 .5rem 1rem rgba($black, .15)',
  max: '0 1rem 3rem rgba($black, .175)',
  none: 'none'
};

export const rounded = {
  default: '0.25em',
  min: '0.2em',
  max: '0.3em',
  pill: '15em',
  circle: '100%',
  0: '0'
};

export const screenWidths = {
  all: {
    size: 0,
    prop: null
  },
  sm: {
    size: 576,
    prop: 'max-width'
  },
  lg: {
    size: 992,
    prop: 'min-width'
  },
  xl: {
    size: 1200,
    prop: 'min-width'
  }
};
export const screenSubdivise = 12;
