import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { cookies } from "next/headers";
import { poppins } from "@/fonts/poppins";   

export const metadata = {
  title: "Greentekpay",
  description: "My Next.js Project",
};

export default function RootLayout({ children }) {
  const langCookie = cookies().get("lang");
  const lang = langCookie ? langCookie.value : "AZ"; 

  return (
    <html lang={lang} className={poppins.className}>  
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
