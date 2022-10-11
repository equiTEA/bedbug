import { lighten, darken } from '@mui/system'

declare module '@mui/material/styles' {
  interface Theme {}

  interface Palette {
    backgroundColor: Palette['primary']
    textColor: Palette['primary']
  }
  interface PaletteOptions {
    backgroundColor: PaletteOptions['primary']
    textColor: PaletteOptions['primary']
  }

  interface PaletteColor {
    backgroundColor: PaletteOptions['primary']
    textColor: PaletteOptions['primary']
  }

  interface SimplePaletteColorOptions {}
  interface ThemeOptions {}
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    backgroundColor: true
    textColor: true
  }
}

const Colors = {
  primary: '#D2223C',
  secondary: '#CAFDFF',
  backgroundColor: '#3E4D5D',
  success: '#00FFA3',
  text: '#FFFFFF',
}

export const palette = {
  primary: {
    main: Colors.primary,
    light: lighten(Colors.primary, 0.25),
    dark: darken(Colors.primary, 0.25),
    contrastText: Colors.text,
  },
  secondary: {
    main: Colors.secondary,
    light: lighten(Colors.secondary, 0.25),
    dark: darken(Colors.secondary, 0.25),
    contrastText: Colors.backgroundColor,
  },
  backgroundColor: {
    main: Colors.backgroundColor,
    light: lighten(Colors.backgroundColor, 0.25),
    dark: darken(Colors.backgroundColor, 0.25),
    contrastText: Colors.text,
  },
  textColor: {
    main: Colors.text,
    light: lighten(Colors.text, 0.25),
    dark: darken(Colors.text, 0.25),
    contrastText: Colors.backgroundColor,
  },
  success: {
    main: Colors.success,
    light: lighten(Colors.success, 0.25),
    dark: darken(Colors.success, 0.25),
    contrastText: Colors.text,
  },
}
