import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Poppins as FontPoppins,
  Rubik as FontRubik,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontPoppins = FontPoppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add the weights you need
  variable: "--font-poppins",
});

export const fontRubik = FontRubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add the weights you need
  variable: "--font-rubik",
});
