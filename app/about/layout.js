import React from "react";
import AboutNavbar from "../Component/AboutNavbar";


export const metadata = {
  title: "About Us",
  description: "Learn more about our mission and values",
};
const AboutLayout = ({ children }) => {
  
  return (
    <div>
      <AboutNavbar />
      {children}
    </div>
  );
};

export default AboutLayout;
