"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default () => {
  const pathname = usePathname();
  const isInComponentsPage = pathname.includes("/components");
  return (
    <div
      className={
        isInComponentsPage
          ? "sticky z-50 top-0 pb-9"
          : ""
      }
    >
      <Navbar />
    </div>
  );
};
