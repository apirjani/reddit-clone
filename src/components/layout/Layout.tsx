import React from "react";
import Navbar from "../navbar/Navbar";

type layoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
