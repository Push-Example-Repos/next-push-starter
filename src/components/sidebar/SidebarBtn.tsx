import { FC, ReactElement, MouseEventHandler } from "react";
import { Button } from "@material-tailwind/react";
import GradientIcon from "../ui/GradientIcon";

interface SidebarBtnProps {
  icon: ReactElement;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SidebarBtn: FC<SidebarBtnProps> = ({ icon, label, onClick }) => {
  return (
    <Button
      placeholder=""
      className="flex items-center gap-1.5 px-3 py-1.5"
      onClick={onClick}
    >
      <div className="rounded-lg bg-black p-1">
        <GradientIcon icon={icon} isHovered={true} />
      </div>

      <p className="text-xs">{label}</p>
    </Button>
  );
};

export default SidebarBtn;
