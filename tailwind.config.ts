import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        muted: 'rgba(0, 0, 0, 0.6)',
      },
      screens: {
        'sm': '640px',   // Mobile landscape / Small tablets
        'md': '768px',   // Tablets
        'lg': '1024px',  // Desktop
        'xl': '1280px',  // Large desktop
        '2xl': '1536px', // Extra large desktop
      },
    },
  },
  plugins: [],
};
export default config;
