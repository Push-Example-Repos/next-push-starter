"use client";

import { Card } from "@material-tailwind/react";
import {
  DocumentDuplicateIcon,
  QrCodeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import Logo from "../Logo";
import SideNav from "./SideNav";
import SidebarBtn from "./SidebarBtn";
import SideNavItem from "./SideNavItem";

const Sidebar: FC = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="sticky top-0 h-screen w-full min-w-fit max-w-72">
      <Card
        placeholder=""
        className="h-screen space-y-3 overflow-y-auto rounded-none rounded-r-xl bg-background-black px-5 py-4 hide-scrollbar bg-white/80"
      >
        <section className="flex h-full flex-col justify-between gap-8">
          <Logo />

          <SideNav open={open} handleOpen={handleOpen} />

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
