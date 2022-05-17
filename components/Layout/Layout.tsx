import Footer from "@components/Footer/Footer";
import NavBar from "@components/NavBar/NavBar";
import React, { ReactElement, ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
