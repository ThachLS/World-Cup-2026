import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Example primary color
        secondary: '#FBBF24', // Example secondary color
      },
      spacing: {
        '128': '32rem', // Custom spacing
        '144': '36rem',
      },
    },
  },
  plugins: [],
};

export default config;