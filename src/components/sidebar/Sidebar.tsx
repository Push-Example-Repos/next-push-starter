"use client";

import { Card } from "@material-tailwind/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import Logo from "../Logo";
import SideNav from "./SideNav";
import SidebarBtn from "./SidebarBtn";
import SideNavItem from "./SideNavItem";

const Sidebar: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="sticky h-[calc(100vh-16px)] top-0 my-2 ml-2 w-full min-w-fit max-w-72">
      <Card
        placeholder=""
        className="h-full space-y-3 overflow-y-auto rounded-xl px-5 py-4 hide-scrollbar bg-white/80"
      >
        <section className="flex h-full flex-col justify-between gap-8">
          <Logo />

          <SideNav />

          <SideNavItem
            label="Need Help?"
            href="/help"
            icon={<QuestionMarkCircleIcon />}
          />
        </section>
      </Card>
    </div>
  );
};

export default Sidebar;
