import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";

export const Header = () => {
  return (
    <header className="sticky left-0 right-0 top-0 flex justify-between bg-white p-7 text-[#304985]">
      <MenuIcon className=" cursor-pointer" />
      <div className="flex max-h-6 gap-6">
        <Badge
          className="cursor-pointer items-center"
          badgeContent="11"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          slotProps={{
            badge: {
              className:
                "h-3 w-3 bottom-1.5 right-1.5 min-w-0  bg-[#BD2020] p-0.5 text-[8px] leading-tight text-white",
            },
          }}
        >
          <ChatBubbleOutlineIcon className="h-5 w-5" />
        </Badge>
        <Badge
          className="cursor-pointer"
          badgeContent="11"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          slotProps={{
            badge: {
              className:
                "h-3 w-3 bottom-1.5 right-1.5 min-w-0  bg-[#BD2020] p-0.5 text-[8px] leading-tight text-white",
            },
          }}
        >
          <NotificationsNoneIcon />
        </Badge>
      </div>
    </header>
  );
};
