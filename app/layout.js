import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gunawan Wibisono - Portfolio",
  description: "Professional portfolio of Gunawan Wibisono",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          {children}
          <ThemeToggle />
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}