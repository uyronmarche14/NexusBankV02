import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/bing_1240946.png";
import menu from "@/public/icons8-menu (1).svg";

export const Navbar = () => {
  return (
    <div className="relative top-0 left-0 right-0 z-50 px-4 py-6">
      <nav className="mx-auto max-w-7xl">
        <div
          className="backdrop-blur-md bg-background-DEFAULT/80 rounded-2xl px-8 py-4 
        flex items-center justify-between shadow-xl border border-white/10 
        hover:border-white/20 transition-all duration-300"
        >
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              width={45}
              height={45}
              alt="Logo"
              className="hover:rotate-45 transition-transform duration-500 ease-in-out"
            />
            <Link
              className="font-bold text-2xl bg-gradient-to-r from-primary-dark via-accent-DEFAULT to-secondary 
              bg-clip-text hover:opacity-80 transition-all duration-300"
              href={"/"}
            >
              NexusBank
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {["Home", "Services", "Contact", "About"].map((item, index) => (
              <Link
                key={index}
                className="relative font-medium text-primary-dark/90 hover:text-primary-dark 
                transition-colors duration-300 text-lg group"
                href={item === "Home" ? "/" : `/pages/${item.toLowerCase()}`}
              >
                {item}
                <span
                  className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-accent-DEFAULT 
                transition-all duration-300 group-hover:w-full"
                />
              </Link>
            ))}
          </div>

          {/* User Section */}
          <div className="flex items-center gap-6">
            <p
              className="hidden sm:block font-semibold text-primary-dark px-4 py-2 
            bg-white/5 rounded-xl border border-white/10"
            >
              RMR Q. UY
            </p>

            <Link href={"/pages/auth/login"}>
              <button
                className="bg-accent-DEFAULT text-white px-8 py-2.5 rounded-xl 
              font-medium hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 
              transition-all duration-300 border border-accent-DEFAULT/20"
              >
                Login
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors duration-200">
              <Image
                src={menu}
                width={28}
                height={28}
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
