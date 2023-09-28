import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import Avatar4 from "../assets/AvatarCarlos.png";

export const formatTime = (time: string) =>
  new Date("1970-01-01T" + time + ":00").toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

export const chooseAvatar = (i: number) => {
  switch (i) {
    case 0:
      return Avatar1;
    case 1:
      return Avatar2;
    case 2:
      return Avatar3;
    default:
      return Avatar4;
  }
};
