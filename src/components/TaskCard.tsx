import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Chip from "@mui/material/Chip";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";

export const TaskCard = () => {
  return (
    <li className="list-none rounded-xl bg-white p-4 font-semibold text-[#454545] shadow-[0_1px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="flex justify-between">
        <span className=" text-sm  ">Elegir página web</span>
        <MoreVertIcon className="text-[#304985]" />
      </div>
      <p className=" text-xs leading-6">Vence: septiembre 27, 2023 </p>
      <Chip
        label="Marketing"
        className="mb-2 mt-1 h-auto bg-[#6DEABD] px-2 py-1 text-[10px] text-[#304985] [&>.MuiChip-label]:px-0"
      />
      <div className="flex items-center justify-between">
        <AvatarGroup max={4} className=" w-fit justify-end">
          <Avatar alt="Remy Sharp" src={Avatar1} className=" border-none" />
          <Avatar alt="Travis Howard" src={Avatar2} className=" border-none" />
          <Avatar alt="Cindy Baker" src={Avatar3} className=" border-none" />
        </AvatarGroup>
        <div className="flex gap-1">
          <ChatBubbleOutlineIcon className=" w-5" />
          <span>3</span>
          <AttachFileIcon className=" w-5" />
          <span>3</span>
        </div>
      </div>
    </li>
  );
};
