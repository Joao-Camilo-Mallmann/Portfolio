export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dev: '#4d91ea',
        editor: '#eaa64d',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'bounce-in': 'bounce-in 0.8s ease-out forwards',
        'pulse-slower': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'bounce-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3) rotate(-10deg)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05) rotate(2deg)',
          },
          '70%': {
            transform: 'scale(0.9) rotate(-1deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) rotate(0deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
