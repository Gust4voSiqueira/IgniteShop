import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray850: '#1D1D1E',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green700: '#017653',
      green500: '#00875f',
      green300: '#00b37e',

      red500: '#DF0808',
      red700: '#C80404',
    },

    fontSizes: {
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
