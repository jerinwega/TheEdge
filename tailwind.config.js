/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class", // <-- important!
  theme: {
    extend: {
      colors: {
        backgroundPrimary: '#0D0D0D',
        backgroundCard: '#1A1A1A',
        textPrimary: '#FFFFFF',
        textSecondary: '#B0B0B0',
        textInactive: '#AAAAAA',
        accentWolvesYellow: '#FDB913',
        accentManUnitedRed: '#DA291C',
        accentForestRed: '#FF0000',
        accentBrightonBlue: '#0057B8',
        dateSelectorActiveBg: '#2E2E2E',
        dateTextActive: '#FFFFFF',
        iconInactive: '#7F7F7F',
        iconActive: '#FFFFFF',
        logoRed: '#c10007',
        shadowColor: 'rgba(255, 255, 255, 0.03)'
      },
    },
  },
  plugins: [],
}