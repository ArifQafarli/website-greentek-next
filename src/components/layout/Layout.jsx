
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { cookies } from "next/headers";

export const metadata = {
  title: "Greentekpay",
  description: "My Next.js Project",
};

export default function RootLayout({ children }) {
  const langCookie = cookies().get("lang");
  const lang = langCookie ? langCookie.value : "az"; // SSR-də cookie oxunur

  return (
    <html lang={lang}>
      <body>
        <LanguageProvider initialLang={lang}>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
