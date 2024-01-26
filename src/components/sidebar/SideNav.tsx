import { FC } from "react";
import { List } from "@material-tailwind/react";
import SideNavList from "./SideNavList";

interface SideNavProps {
  open: number;
  handleOpen: (index: number) => void;
}

const SideNav: FC<SideNavProps> = ({ open, handleOpen }) => {
  return (
    <List placeholder="">
      <SideNavList open={open} handleOpen={handleOpen} />
    </List>
  );
};

export default SideNav;
