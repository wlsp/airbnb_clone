import Router from "next/router";
import "tailwindcss/tailwind.css"
import '../styles/globals.scss'

import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 5,
  color: "#fe595e",
  className: "z-100",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
