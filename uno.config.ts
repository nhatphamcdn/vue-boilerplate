import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({ /* preset options */}),
  ],
  theme: {
    colors: {
      accent: {
        300: '#5dffb6',
        500: '#42b883',
      },
      primary: '#42b883',
      secondary: '#5dffb6',
      border: '#eee',
      foreground: 'rgba(0, 0, 0, .87)',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
  },
})