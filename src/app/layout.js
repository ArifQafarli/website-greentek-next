import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientProviders from "@/providers/ClientProviders"; 

export const metadata = {
  title: "Greentekpay",
  description: "My Next.js Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <Header />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
