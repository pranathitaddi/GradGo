import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-[100%] min-h-[60px] flex items-center justify-center bg-transparent box-border fixed top-0 left-0 z-10">
      <div className="bg-gray-950 w-[98%] flex items-center justify-between m-[10px] rounded-lg">
        <div>
          <p className="m-4">Logo</p>
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
