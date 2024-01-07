import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileimg from "@/public/profile-img.png"
function Logo() {
  return (
    <Link href="/">
      <div className="w-16 rounded-full overflowhidden border border-solid  border-dark">
        <Image src={profileimg} alt="moz" className="w-full h-auto rounded-full "/>
      </div>
      <span>moz</span>
    </Link>
  );
}

export default Logo;
