"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoLogOut } from "react-icons/io5";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
export default function MainNavLink({
  navLink,
}: {
  user: { image?: string; name?: string; role?: string } | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navLink: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  additionalRoutes: any;
}) {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isActive = (href: any) => {
    // Remove query parameters from href for comparison
    const cleanHref = href.split("?")[0];
    const cleanPathname = pathname.split("?")[0];

    // If href is exactly `/dashboard`, match it exactly
    if (cleanHref === "/dashboard") {
      return cleanPathname === "/dashboard";
    }
    if (cleanHref === "/admin-dashboard") {
      return cleanPathname === "/admin-dashboard";
    }

    // For other routes, match using startsWith
    return cleanPathname.startsWith(cleanHref);
  };

  return (
    <div className="flex flex-col min-h-screen pb-6 bg-white">
      <Link href={"/"} className="border-b-2 px-8 h-[85px] py-5">
        <Image src={logo} alt="logo" width={1000} height={1000} className="h-full w-auto" />
      </Link>
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navLink?.map(
            (link: {
              name: string;
              href: string;
              icon: React.ComponentType<{ className?: string }>;
            }) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-3 font-normal text-base rounded-md ${
                  isActive(link.href)
                    ? "bg-whiteDarker/20 text-whiteDarker"
                    : "hover:bg-[#8B4C84]/10 text-whiteDarker"
                }`}
              >
                <div className="rounded">
                  <link.icon className="min-w-6 min-h-6" />
                </div>
                {link.name}
              </Link>
            )
          )}
        </div>
      </nav>
      <div className="mt-auto p-4 space-y-1">
        <button
          className="flex items-center gap-3 px-3 py-3 rounded-md cursor-pointer text-whiteDarker bg-whiteDarker/10 w-full font-medium text-base"
        >
          <IoLogOut className="min-w-6 min-h-6" />
          Log Out
        </button>
      </div>
    </div>
  );
}
