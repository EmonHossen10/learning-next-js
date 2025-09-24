import Image from "next/image";
import React from "react";
import img from "../public/notFound.jpg";

const NotFound = () => {
  return (
    <div>
      <Image src={img} alt="Not Found" width={600} height={600} />
    </div>
  );
};

export default NotFound;
