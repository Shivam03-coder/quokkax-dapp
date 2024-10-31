"use client";
import { NavbarLinksData } from "@/data";
import { TNavbarLinks } from "@/types";
import { useState } from "react";
import Link from "next/link";
import GradualSpacing from "@/components/ui/gradual-spacing";
import WalletConnect from "../wallet";

const AppHeader = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <nav className="flex mx-5 px-2 py-3 mt-4 rounded-xl bg-primary text-light">
      <div className="flex flex-1 px-3 justify-between h-full items-center">
        {/* Logo */}
        <Link href="/" className="flex max-w-[14.375rem] h-full items-center">
          <GradualSpacing
            className="font-orbitron text-secondary"
            text="QUOKAA-X"
          />
        </Link>
        {/* Menu */}
        <div className="space-x-5 flex items-center">
          {NavbarLinksData.map((item) => (
            <NavbarLinks
              key={item.id}
              item={item}
              setActive={setActive}
              active={active}
            />
          ))}
          <WalletConnect />
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;

type NavbarLinksProps = {
  item: TNavbarLinks;
  active: number;
  setActive: (active: number) => void;
};

const NavbarLinks: React.FC<NavbarLinksProps> = ({
  item,
  active,
  setActive,
}) => {
  return (
    <Link href={item.href} passHref>
      <button
        onClick={() => setActive(item.id)}
        className={`${
          active === item.id ? "bg-light text-black" : "text-light"
        } px-3 uppercase font-poppins font-medium rounded-md bg-primary text-light py-2`}
      >
        {item.label}
      </button>
    </Link>
  );
};
