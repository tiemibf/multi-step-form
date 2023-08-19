import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'ms-bg-blue': '#EFF5FF',
        'ms-sky-blue': '#BEE2FD',
        'ms-light-blue': '#ABBCFF',
        'ms-purple': '#483EFF',
        'ms-denim': '#022959',
        'ms-lightest-grey': '#F8F9FF',
        'ms-light-grey': '#D6D9E6',
        'ms-grey': '#9699AA',
        'ms-orange': '#FFAF7E',
        'ms-pink': '#F9818E',
        'ms-red': '#EE374A',
      }
    },
    plugins: [],
  }
}
export default config
