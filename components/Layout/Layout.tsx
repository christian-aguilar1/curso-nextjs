import React, { ReactElement, ReactNode } from "react";

import Footer from "@components/Footer/Footer";
import NavBar from "@components/NavBar/NavBar";

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
