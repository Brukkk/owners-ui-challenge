import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Chip from "@mui/material/Chip";
import { motion } from "framer-motion";
import { chooseAvatar } from "../lib/helpers";
import { Task } from "../lib/types/Task";

export const TaskCard = ({
  name,
  dueDate,
  sector,
  stakeholders,
  commentQuantity,
  fileQuantity,
}: Task) => {
  return (
    <motion.li
      layoutId={`${name}${dueDate}`}
      initial={{ x: 100, scale: 0 }}
      animate={{ x: 0, scale: 1 }}
      exit={{ x: "-200%" }}
      className="list-none rounded-xl bg-white p-4 font-semibold text-[#454545] shadow-[0_1px_4px_0px_rgba(0,0,0,0.25)]"
    >
      <div className="flex justify-between">
        <span className=" text-sm  ">{name}</span>
        <MoreVertIcon className="text-[#304985]" />
      </div>
      <p className=" text-xs leading-6">Vence: {dueDate} </p>
      <Chip
        label={sector}
        className="mb-2 mt-1 h-auto bg-[#6DEABD] px-2 py-1 text-[10px] text-[#304985] [&>.MuiChip-label]:px-0"
      />
      <div className="flex items-center justify-between">
        <AvatarGroup max={4} className=" w-fit justify-end">
          {stakeholders.map((id, i) => (
            <Avatar
              key={id + i}
              alt={id}
              src={chooseAvatar(i)}
              className="border-none"
            />
          ))}
        </AvatarGroup>
        <div className="flex gap-1">
          <ChatBubbleOutlineIcon className=" w-5" />
          <span>{commentQuantity}</span>
          <AttachFileIcon className=" w-5" />
          <span>{fileQuantity}</span>
        </div>
      </div>
    </motion.li>
  );
};
