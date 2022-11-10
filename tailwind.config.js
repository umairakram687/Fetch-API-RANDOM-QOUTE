/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      // width: "100%",
      // margin: "0px auto",
      // maxWidth: "1170px",
      // backgroundColor: "#000",
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};
