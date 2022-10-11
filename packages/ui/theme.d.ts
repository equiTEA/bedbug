import '@mui/material/styles'

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
