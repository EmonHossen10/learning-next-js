import Button from "@/app/Component/Button";
import Image from "next/image";
import img from "@/public/mission.png";

const Mission = () => {
  return (
    <div>
      <h1>Our Mission</h1>
      <p>
        To empower individuals and organizations to achieve their goals through
        innovative technology solutions.
      </p>
      <Button></Button>
      <Image placeholder="blur" src={img} alt="Our Mission" />
    </div>
  );
};

export default Mission;
