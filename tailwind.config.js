/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class", // <-- important!
  theme: {
    extend: {
      fontFamily: {
        bungee: ['BungeeTint'],
        mrDafoe: ['MrDafoe'],
        lato: ['Lato'],
        latoBold: ['LatoBold'],
        latoBlack: ['LatoBlack'],
      },
      colors: {
        backgroundPrimary: '#0D0D0D',
        backgroundCard: '#1A1A1A',
        textPrimary: '#FFFFFF',
        textSecondary: '#B0B0B0',
        textInactive: '#AAAAAA',
        iconInactive: '#7F7F7F',
        iconActive: '#FFFFFF',
        logoRed: '#c10007',
        shadowColor: 'rgba(255, 255, 255, 0.03)',
        animatedBorder: 'rgba(255, 255, 255, 0.2)'
      },
    },
  },
  plugins: [],
}