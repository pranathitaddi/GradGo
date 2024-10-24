import Link from "next/link";
import Image from "next/image";
import logo from "../gradgo.png";

export default function Navbar() {
  return (
    <div className="w-[100%] min-h-[60px] flex items-center justify-center bg-transparent box-border fixed top-0 left-0 z-10">
      <div className="bg-gray-950 w-[98%] flex items-center justify-between m-[10px] rounded-lg">
        <div>
          <Image alt="GradGo" src={logo} height={50} width={80} className="ml-5"/>
        </div>
        <div className="flex items-center flex-row">
          <Link className="m-4" href="#about">
            About Us
          </Link>
          <p className="m-4">Services</p>
          <p className="m-4">Why Us</p>
          <p className="m-4">Previous Works</p>
          <p className="m-4">Contact Us</p>
        </div>
      </div>
    </div>
  );
}
