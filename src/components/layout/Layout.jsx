import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#f7f7f7] min-h-screen w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
