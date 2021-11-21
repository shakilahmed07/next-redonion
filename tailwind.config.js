module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "header-banner":
          "url('https://i.ibb.co/GnYBX6d/banner-background.png')",
      }),
    },
  },
  variants: {
    backgroundImage: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
