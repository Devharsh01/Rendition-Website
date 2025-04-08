/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        luckiest: ['"Luckiest Guy"', "cursive"],
        bungee: ['"Bungee Tint"', "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "text-md": "2px 2px 4px rgba(0, 0, 0, 0.5)",
      },
      transform: ["preserve-3d"],
      perspective: ["1000"],

      colors: {
        "red-01": "var(--red-01)",
        "red-02": "var(--red-02)",
        "red-03": "var(--red-03)",
        "red-04": "var(--red-04)",
        "red-05": "var(--red-05)",
        "red-06": "var(--red-06)",
        "red-07": "var(--red-07)",

        "blu-01": "var(--blue-01)",
        "blu-02": "var(--blue-02)",
        "blu-03": "var(--blue-03)",
        "blu-04": "var(--blue-04)",
        "blu-05": "var(--blue-05)",
        "blu-06": "var(--blue-06)",
        "blu-07": "var(--blue-07)",

        "whi-01": "var(--white-01)",
        "whi-02": "var(--white-02)",
        "whi-03": "var(--white-03)",
        "whi-04": "var(--white-04)",
        "whi-05": "var(--white-05)",
        "whi-06": "var(--white-06)",
        "whi-07": "var(--white-07)",

        "black-01": "var(--black-01)",
        "black-02": "var(--black-02)",
        "black-03": "var(--black-03)",
        "black-04": "var(--black-04)",
        "black-05": "var(--black-05)",
        "black-06": "var(--black-06)",
        "black-07": "var(--black-07)",
      },
    },
  },
  plugins: [],
};
