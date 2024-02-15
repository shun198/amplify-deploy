import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['primary', 'font-noto_sans'],
    },
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['18px', '24px'],
        lg: ['20px', '28px'],
        xl: ['40px', '45px'],
        res: ['30px', '35px'],
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      margin: {
        sm: '10px',
        md: '20px',
        lg: '50px',
        xl: '100px',
      },
      padding: {
        sm: '10px',
        md: '20px',
        lg: '50px',
        xl: '100px',
      },
      width: {
        sm: '150px',
        md: '200px',
        lg: '300px',
        xl: '600px',
        res: '90%',
        half: '50%',
      },
      minWidth: {
        table: '1370px',
      },
      height: {
        sm: '50px',
        md: '100px',
        lg: '250px',
        xl: '500px',
      },
      colors: {
        'main-gray': '#F1EFEF',
        'main-blue': '#078EDF',
        'link-blue': '#0D47A1',
        'dark-blue': '#33568C',
        'dark-gray': '#5B5B5B',
        'header-gray': '#7A7A7A',
        'mail-gray': '#DFDFDF',
        'light-blue': '#87C4FF',
        'hover-blue': '#67B1F7',
        'warning-red': '#FF857D',
        'ref-red': '#D75E6D',
        'ref-yellow': '#EBB052',
        'yellow': '#FFF4E4',
        'orange': '#FF912C',
        'brown': '#AB6320',
        warning_red:'#FF857D',
        complete: '#0ECB65',
        header: '#D7EEFF',
        gray: '#AAAAAA',
      },
    },
  },
  plugins: [],
  important: '#app',
};
export default config;
