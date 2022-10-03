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
  text: '#FFFFFF',
}

export const palette = {
  primary: {
    main: Colors.primary,
    light: Colors.primary,
    dark: Colors.primary,
    contrastText: Colors.text,
  },
  secondary: {
    main: Colors.secondary,
    light: Colors.secondary,
    dark: Colors.secondary,
    contrastText: Colors.backgroundColor,
  },
  backgroundColor: {
    main: Colors.backgroundColor,
    light: Colors.backgroundColor,
    dark: Colors.backgroundColor,
    contrastText: Colors.text,
  },
  textColor: {
    main: Colors.text,
    light: Colors.text,
    dark: Colors.text,
    contrastText: Colors.backgroundColor,
  },
}
