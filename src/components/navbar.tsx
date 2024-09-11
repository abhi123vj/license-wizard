import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {" "}
      <div className="hidden lg:block">
        <div className="px-8 flex h-16 items-center max-w-[88rem] mx-auto bg-neutral-950">
          <Link href="/">
            <div className="h-8 w-8 relative">
              <Image
                src="/assets/logos/license-wizard-logo.png"
                alt="License Wizard logo"
                fill={true}
              />
            </div>
          </Link>
          <div className="ml-auto">
            <Link
              href="/licenses/generate-multiple"
              className="ml-4 text-sm hover:text-yellow-200 font-medium		text-slate-300"
            >
              Generate
            </Link>
            <Link
              href="/update"
              className="ml-4 text-sm hover:text-yellow-200 font-medium		text-slate-300"
            >
              Update
            </Link>
            <Link
              href="/history"
              className="ml-4 text-sm hover:text-yellow-200 font-medium		text-slate-300"
            >
              History
            </Link>
          </div>
          <div></div>
        </div>
      </div>
      <div className="block lg:hidden"></div>
    </div>
  );
};

export default Navbar;
