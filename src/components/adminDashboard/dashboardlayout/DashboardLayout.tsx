"use client";

import React, { useEffect, useRef, useState } from "react";
import { RiCustomerServiceFill } from "react-icons/ri";

import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { LiaNewspaper } from "react-icons/lia";
import { MdPayment } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";

import athletImage from "@/assets/icons/income.png";
import SideBar from "../navigationBar/SideBar";
import TopBar from "../navigationBar/TopBar";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const navLink = [
    { name: "Dashboard", href: "/dashboard", icon: MdOutlineDashboard },
    { name: "Supplier List", href: "/dashboard/supplier", icon: BsBoxSeam },
    { name: "Buyer List", href: "/dashboard/buyer", icon: BsCartCheck },
    { name: "Verification", href: "/dashboard/verification", icon: FaPeopleGroup },
    {
      name: "Payment",
      href: "/dashboard/payment",
      icon: MdPayment,
    },
    {
      name: "Live Support",
      href: "/dashboard/liveSupport",
      icon: LiaNewspaper,
    },
  ];

  const additionalRoutes = [
    {
      name: "Settings",
      href: "/dashboard",
      icon: IoSettingsSharp,
    },
    { name: " Help", href: "/dashboard/help", icon: RiCustomerServiceFill },
  ];
  const user = {
    name: "John Doe",
    role: "admin",
    img: athletImage,
    email: "q4A0Q@example.com",
  };

  return (
    <div className="flex ">
      <div className="max-h-screen h-full sticky top-0 z-50">
        <SideBar
          additionalRoutes={additionalRoutes}
          navLink={navLink}
          isOpen={isOpen}
          user={user}
          navRef={navRef}
        />
      </div>
      <div className="w-full">
        <div className="sticky top-[3px] z-40">
          <TopBar setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div className="min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
