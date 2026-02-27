import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import PageFX from "@/components/PageFX";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrainsMono",
  display: "swap",
});

export const metadata = {
  title: "Andrés López | Portfolio",
  description: "Portafolio personal de desarrollo FullStack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable}`}>
      <body>
        <Header />
        <Separator />
        <PageFX>{children}</PageFX>
      </body>
    </html>
  );
}
