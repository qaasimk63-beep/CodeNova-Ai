module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(124, 58, 237, 0.25)' },
          '50%': { boxShadow: '0 0 30px rgba(124, 58, 237, 0.8), 0 0 60px rgba(124, 58, 237, 0.4)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 58, 237, 0.5)',
        'glow-lg': '0 0 40px rgba(124, 58, 237, 0.6)',
        'glow-neon': '0 0 30px rgba(20, 184, 166, 0.6)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.6)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropFilter: {
        'blur-md': 'blur(10px)',
        'blur-lg': 'blur(20px)',
      },
      backgroundImage: {
        'cyber-grid': 'radial-gradient(circle at top left, rgba(124, 58, 237, 0.1), transparent 20%), radial-gradient(circle at bottom right, rgba(20, 184, 166, 0.1), transparent 25%), linear-gradient(180deg, #0f0f1e 0%, #1a0f2e 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        cosmic: '#3f51b5',
        neon: '#7c3aed',
        electric: '#14b8a6',
        'cyber-dark': '#0f0f1e',
        'cyber-darker': '#1a0f2e',
        'neon-pink': '#ec4899',
        'neon-cyan': '#06b6d4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
