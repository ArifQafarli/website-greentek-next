// import React from "react";
// import Header from "../Header";
// import Footer from "../Footer";

// const Layout = ({ children }) => {
//   return (
//     <div className="bg-[#f7f7f7] min-h-screen w-full">
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "Greentekpay",
  description: "My Next.js Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
