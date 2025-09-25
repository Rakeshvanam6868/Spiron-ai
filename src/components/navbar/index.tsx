import Image from "next/image";
import * as React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const navbarNames=["Home","Pricing","News Room","Features","Contact us"];

function NavBar() {
  return (
    <>
      <nav className="flex justify-center align-center z-50 relative">
        <div className="max-w-[1000px] flex  gap-20 items-center fixed justify-between mx-auto mt-5 py-2 px-8  bg-white/50 backdrop-blur-sm drop-shadow-lg rounded-full ">
          <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
            <Image
              src="/images/logo.png"
              alt="LOGO"
              sizes="100vw"
              style={{
                width: "100px",
                height: "auto",
              }}
              width={0}
              height={0}
            />
          </div>
          <ul className="gap-5 justify-between self-stretch my-auto text-sm leading-5 text-neutral-900 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
            {navbarNames.map((name)=>(
              <li key={name} className="hover:bg-orange/10 rounded-lg cursor-pointer p-2">{name}</li>
            ))}
            {/* <li className="hover:bg-orange/10 rounded-lg cursor-pointer p-2">Home</li>
            <li>Pricing</li>
            <li>News Room</li>
            <li>Features</li>
            <li>Contact us</li> */}
          </ul>
          <Link
            href="/dashboard"
            className="bg-orange drop-shadow-xl px-4 py-2 rounded-full text-white"
          >
            Free Trial
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
