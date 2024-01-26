"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";

const PageHeading: FC = () => {
  const path = usePathname();

  return (
    <h2 className="gradient-text bg-gradient-push text-2xl font-bold">
      {
        {
          "/home": "Home",
          "/chats": "Contacts",
          "/channels": "Channels",
          "/spaces": "Spaces",
          "/notifications": "Notifications",
          "/createContact": "Create Contact",
          "/createChannel": "Create Channel",
        }[path]
      }
    </h2>
  );
};

export default PageHeading;
