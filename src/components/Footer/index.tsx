import Image from "next/image";
const navbarNames = ["Home", "Pricing", "News Room", "Features", "Contact us"];
function Footer() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="">
          <Image
            src="/images/logo.png"
            width={200}
            height={100}
            alt="Footer Image"
            className=" object-cover"
          ></Image>
          <div className="flex space-x-6 mt-4">
            <ul className="gap-5 justify-between self-stretch my-auto text-lg mb-10 leading-5  text-neutral-900 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
              {navbarNames.map((name) => (
                <li
                  key={name}
                  className="hover:bg-orange/10 rounded-lg cursor-pointer p-2"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-gray-600 mt-4 text-center">
          © {new Date().getUTCFullYear()} Spiron AI. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
