import React from "react";
import Footer from "../../components/elements/Footer";
import Header from "../../components/elements/Header";

const MainLayout = ({ children }: any) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
