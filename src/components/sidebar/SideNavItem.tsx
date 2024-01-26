import { ListItem, ListItemPrefix } from "@material-tailwind/react";

import Link from "next/link";
import { FC, useState, ReactNode } from "react";

import GradientIcon from "../ui/GradientIcon";

interface SideNavItemProps {
  label: string;
  icon: ReactNode;
  fill?: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

const SideNavItem: FC<SideNavItemProps> = ({
  label,
  icon,
  fill,
  href,
  active,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} onClick={onClick}>
      <ListItem
        placeholder=""
        className={`sideNavItem hover:bg-gradient-push-light focus:bg-black active:bg-black space-x-2 ${
          active ? "bg-black" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ListItemPrefix placeholder="">
          <GradientIcon
            icon={icon}
            isHovered={isHovered || active}
            fill={fill}
          />
        </ListItemPrefix>

        <p
          className={`prevent-select font-grotesque text-xl text-gray-900 ${
            isHovered || active
              ? "font-semibold gradient-text bg-gradient-push"
              : ""
          }`}
        >
          {label}
        </p>
      </ListItem>
    </Link>
  );
};

export default SideNavItem;
