// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import plugin from "tailwindcss/plugin";

const containerWrapperPlugin = plugin(function ({ addComponents }) {
  addComponents({
    ".container-wrapper": {
      "max-width": "1440px",
      width: "90%",
      margin: "0 auto",
    },
  });
});

export default containerWrapperPlugin;
