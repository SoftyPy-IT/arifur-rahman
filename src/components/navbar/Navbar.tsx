"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { TFeatures } from "@/types/types";
import { IoMenuSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import useFeatures from "@/hooks/useFeatures";
import { AiOutlineClose } from "react-icons/ai";
import React, { useEffect, useState } from "react";

type Route = {
  navItem: string;
  route: string;
};

const routes: Route[] = [
  { navItem: "Home", route: "/" },
  { navItem: "About", route: "/about" },
  { navItem: "Events", route: "/events" },
  { navItem: "Gallery", route: "/gallery" },
  { navItem: "Articles", route: "/articles" },
  { navItem: "Videos", route: "/media" },
  { navItem: "Contact", route: "/contact" },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const features: TFeatures = useFeatures();
  const pathName = usePathname();
  const [openSidebar, setOpenSideBar] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init();
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setScrolling(false);
        }, 1000);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed z-20 w-full">
      <nav className="">
        <div
          className={`absolute inset-0 backdrop-blur-md bg-white/10 border-b border-white/20 ${
            scrolling ? "bg-white/20" : ""
          } transition-all duration-500`}
        />

        <div className="container mx-auto flex items-center justify-between px-3 lg:px-0 my-0 lg:py-0 md:h-[90px] relative z-10">
          {/* Logo with special background */}
          <div className="relative z-30 flex items-end h-full">
            <div className="w-[130px] relative">
              {/* Background with extended left and angled right side */}
              <div className="absolute inset-0 bg-[#122238] p-10 md:p-[46px] -mt-[3px] md:-mt-8 lg:w-[350px] -ml-[120px] clip-path-angled-right my-2" />

              {/* Logo */}
              <div className="relative flex md:justify-center md:items-end md:h-[60px]">
                <Link href={"/"}>
                  <Image
                    src={features?.logo || ""}
                    alt="logo"
                    height={60} // set height explicitly
                    width={85} // width according to aspect ratio
                    className=""
                  />
                </Link>
              </div>

              <style jsx>{`
                .clip-path-angled-right {
                  clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
                }
              `}</style>
            </div>
          </div>

          {/* Desktop navigation items */}
          <div
            data-aos="fade-down"
            data-aos-duration="500"
            className="lg:flex hidden gap-7 transition-all duration-1000 relative text-black "
          >
            {routes.map((item, idx) => (
              <Link className="group relative" key={idx} href={item.route}>
                <button
                  className={`font-medium text-black transition-colors duration-300 ${
                    pathName === item.route ? "text-black font-semibold" : ""
                  } ${
                    pathName === item.route && scrolling
                      ? "text-black font-bold"
                      : ""
                  }`}
                >
                  {item.navItem}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full ${
                      pathName === item.route ? "w-full" : ""
                    }`}
                  ></span>
                </button>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="block lg:hidden">
            {/* Overlay */}
            <div
              className={`${
                openSidebar ? "fixed inset-0 bg-black/40 backdrop-blur-sm" : ""
              } transition-all duration-300`}
              onClick={() => setOpenSideBar(false)}
            ></div>

            {!openSidebar && (
              <button
                onClick={() => setOpenSideBar(!openSidebar)}
                className="relative z-10 p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20"
              >
                <IoMenuSharp className="text-2xl text-white" />
              </button>
            )}

            {/* Mobile sidebar with glassmorphism */}
            <div
              className={`fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-xl border-l border-white/20 shadow-2xl transition-transform duration-500 z-50 ${
                openSidebar ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="p-5 flex justify-end">
                <button
                  onClick={() => setOpenSideBar(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <AiOutlineClose className="text-xl text-white" />
                </button>
              </div>

              <div className="flex flex-col mt-10">
                {routes?.map((item, idx) => (
                  <Link
                    href={item.route}
                    key={idx}
                    onClick={() => setOpenSideBar(false)}
                  >
                    <div
                      className={`py-4 px-8 hover:bg-white/10 transition-colors duration-300 border-b border-white/5 ${
                        pathName === item.route
                          ? "bg-white/15 text-white font-medium"
                          : "text-white/90"
                      }`}
                    >
                      {item.navItem}
                      {pathName === item.route && (
                        <div className="w-1 h-6 bg-orange-400 rounded-full absolute left-0"></div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
