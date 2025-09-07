"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const lisks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="md:shadow-aceternity relative mx-auto flex max-w-4xl items-center justify-between bg-white px-2 py-2 md:mt-4 md:rounded-full">
        <Image
          src="https://ui.aceternity.com/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />

        <div className="text-netural-500 mr mr-10 hidden items-center gap-4 text-sm text-neutral-500 transition duration-200 ease-out md:flex">
          {lisks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="hover:text-neutral-700"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
        <div className="shadow-aceternity top2 absolute inset-x-0 top-20  mx-auto rounded-md bg-white max-w-[90%]">
          {open && (
            <div className="flex flex-col  md:hidden max-auto items-start gap-4 text-sm text-neutral-500 p-4">
              {lisks.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="hover:text-neutral-700"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
