import { List } from "@material-tailwind/react";

import { FC } from "react";

import SideNavList from "./SideNavList";

const SideNav: FC = () => {
  return (
    <List placeholder="">
      <SideNavList />
    </List>
  );
};

export default SideNav;
