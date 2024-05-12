import { Inter, Noto_Serif } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
});

export const fonts = {
  body: `${inter.style.fontFamily}, system-ui, sans-serif`,
  heading: `${notoSerif.style.fontFamily}, system-ui, sans-erif`,
};
