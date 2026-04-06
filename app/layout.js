import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ui/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gunawan Wibisono - Portfolio",
  description: "DevOps Engineer & System Administrator based in Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
