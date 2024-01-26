"use client";

import {
  CloudIcon,
  UsersIcon,
  UserPlusIcon,
  BellAlertIcon,
  PlusCircleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

import SideNavItem from "./SideNavItem";

interface SideNavListProps {
  open: number;
  handleOpen: (index: number) => void;
}

const SideNavList: FC<SideNavListProps> = ({ open, handleOpen }) => {
  const pathname = usePathname();

  const [activeItem, setActiveItem] = useState("");
  const [activeSubItem, setActiveSubItem] = useState("");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const pathParts = pathname.split("/");

    if (pathParts.length > 1) {
      setActiveItem(pathParts[1]);
      setActiveSubItem("");
    }

    if (pathParts.length > 2) {
      setActiveSubItem(pathParts[2]);
    }
  }, [pathname]);

  return (
    <>
      <SideNavItem
        label="Contacts"
        href="/contacts"
        icon={<ChatBubbleLeftRightIcon />}
        active={activeItem === "contacts"}
        onClick={() => {
          handleOpen(0);
          handleItemClick("contacts");
        }}
      />
      <SideNavItem
        label="Channels"
        href="/channels"
        icon={<UsersIcon />}
        active={activeItem === "channels"}
        onClick={() => {
          handleOpen(0);
          handleItemClick("channels");
        }}
      />

      <SideNavItem
        label="Spaces"
        href="/spaces"
        icon={<CloudIcon />}
        active={activeItem === "spaces"}
        onClick={() => {
          handleOpen(0);
          handleItemClick("spaces");
        }}
      />

      <SideNavItem
        label="Notifications"
        href="/notifications"
        icon={<BellAlertIcon />}
        active={activeItem === "notifications"}
        onClick={() => {
          handleOpen(0);
          handleItemClick("notifications");
        }}
      />

      <hr className="my-2 border-gray-500" />

      <SideNavItem
        label="Create Contact"
        href="/createContact"
        icon={<UserPlusIcon />}
        active={activeItem === "createContact"}
        onClick={() => {
          handleOpen(0);
          handleItemClick("createContact");
        }}
      />

      <SideNavItem
        label="Create Channel"
        href="/createChannel"
        icon={<PlusCircleIcon />}
        active={activeItem === "createChannel"}
        onClick={() => {
          handleOpen(0);
          handleItemClick("createChannel");
        }}
      />
    </>
  );
};

export default SideNavList;
