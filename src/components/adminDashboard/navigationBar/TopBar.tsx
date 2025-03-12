import { Menu, X } from "lucide-react";
import Image from "next/image";
import img from "@/assets/images/propic.jpg";
import { Dispatch, SetStateAction } from "react";

export default function TopBar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header className="border-b-2 bg-white h-18 ">
      <div className="flex items-center justify-between lg:justify-end px-6 py-3 w-full">
        <button className="lg:hidden " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>

        <div className="flex w-full justify-end items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center sm:text-lg sm:px-4 px-3 py-1 sm:py-2 gap-2">
              <Image
                className="w-10 h-10 rounded-full"
                src={img}
                alt="User Avatar"
              />
              <div className="flex flex-col">
                <h3 className="text-base font-medium">Super Admin</h3>
                <p className="text-xs text-light font-normal">bill.sanders@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
