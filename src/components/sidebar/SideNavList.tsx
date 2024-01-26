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

const SideNavList: FC = () => {
  const pathname = usePathname();

  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const pathParts = pathname.split("/");

    setActiveItem(pathParts[1]);
  }, [pathname]);

  return (
    <>
      <SideNavItem
        label="Contacts"
        href="/chats"
        icon={<ChatBubbleLeftRightIcon />}
        active={activeItem === "chats"}
        onClick={() => {
          handleItemClick("chats");
        }}
      />
      <SideNavItem
        label="Channels"
        href="/channels"
        icon={<UsersIcon />}
        active={activeItem === "channels"}
        onClick={() => {
          handleItemClick("channels");
        }}
      />

      <SideNavItem
        label="Spaces"
        href="/spaces"
        icon={<CloudIcon />}
        active={activeItem === "spaces"}
        onClick={() => {
          handleItemClick("spaces");
        }}
      />

      <SideNavItem
        label="Notifications"
        href="/notifications"
        icon={<BellAlertIcon />}
        active={activeItem === "notifications"}
        onClick={() => {
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
          handleItemClick("createContact");
        }}
      />

      <SideNavItem
        label="Create Channel"
        href="/createChannel"
        icon={<PlusCircleIcon />}
        active={activeItem === "createChannel"}
        onClick={() => {
          handleItemClick("createChannel");
        }}
      />
    </>
  );
};

export default SideNavList;
