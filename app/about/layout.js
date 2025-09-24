import React from "react";
import AboutNavbar from "../Component/AboutNavbar";

const AboutLayout = ({ children }) => {
  return (
    <div>
      <AboutNavbar />
      {children}
    </div>
  );
};

export default AboutLayout;
