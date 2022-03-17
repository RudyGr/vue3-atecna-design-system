const config = {
  content: ['./**/*.{css,vue}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      transparent: 'transparent',
      focus: '#0080FF',
      actions: {
        darker: '#FF3E24',
        default: '#FF5942',
        lighter: '#FF7458',
        primary: '#FFF6F5',
      },
      neutral: {
        primary: '#FBFBFB',
        secondary: '#F9F6F6',
        tertiary: '#E8EFEE',
      },
      neutral1: {
        primary: '#0B1D43',
        secondary: '#6B7894',
        tertiary: '#8892A8',
        quaternary: '#F4F5F5',
      },
      neutral2: {
        primary: '#EAE8E8',
      },
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
    boxShadow: {
      primary:
        '0px 3px 3px rgba(0, 0, 0, 0.02), 0px 6px 5px rgba(0, 0, 0, 0.03), 0px 12px 10px rgba(0, 0, 0, 0.04), 0px 25px 18px rgba(0, 0, 0, 0.04), 0px 0px 80px rgba(0, 0, 0, 0.07);',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Inter', 'sans-serif'],
      serif: ['Inter', 'sans=serif'],
    },
    fontSize: {
      sm: ['0.875rem', '1.05rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.5rem'],
      xl: ['1.25rem', '1.875rem'],
      '2xl': ['1.5rem', '1.95rem'],
      '3xl': ['2rem', '2.4rem'],
      '4xl': ['3rem', '3.6rem'],
      '5xl': ['3.5rem', '4.2rem'],
    },
  },
  plugins: [],
};

export default config;
