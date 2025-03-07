import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/bing_1240946.png";
import menu from "@/public/icons8-menu (1).svg";

export const Navbar = () => {
  return (
    <div className=" top-0 left-0 right-0 z-50 px-4 py-8 font-sm">
      <nav className="mx-auto max-w-8xl px-48">
        <div className="backdrop-blur-md bg-background-DEFAULT/60 rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg border border-secondary-light/10 hover:border-secondary-light/20 transition-all duration-300">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              width={40}
              height={40}
              alt="Logo"
              className="hover:rotate-45 transition-transform duration-300 ease-in-out"
            />
            <Link
              className="font-bold text-2xl bg-gradient-to-r from-primary-dark to-secondary bg-clip-text text-primary-dark hover:opacity-80 transition-opacity duration-300"
              href={"/"}
            >
              NBank
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Services", "Contact", "About"].map((item, index) => (
              <Link
                key={index}
                className="relative font-medium text-primary-dark hover:text-secondary transition-colors duration-300 group"
                href={
                  item === "Home"
                    ? "/"
                    : item === "Services"
                      ? "/pages/services"
                      : item === "Contact"
                        ? "/pages/Contact"
                        : `/${item.toLowerCase()}`
                }
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* User Section */}
          <div className="flex items-center gap-4">
            <p className="hidden sm:block font-bold text-primary-darkbg-primary-dark px-6 py-2.5 rounded-xl ">
              RMR Q. UY
            </p>

            <Link href={"/pages/auth/login"} className=" ">
              <button className="bg-primary-dark text-primary-dark px-8 py-2.5 rounded-xl font-medium hover:shadow-lg hover:-translate-y-1 active:translate-y-[1px] transition-all duration-300 border-2 border-primary-dark  ">
                Login
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden">
              <Image
                src={menu}
                width={24}
                height={24}
                alt="Menu"
                className="text-primary-dark"
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
