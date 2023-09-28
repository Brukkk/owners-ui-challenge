import StarBorderIcon from "@mui/icons-material/StarBorder";
import Avatar from "@mui/material/Avatar";

type Subcontratist = {
  name: string;
  rating: number;
  avatar: string;
};
export const SubcontratistCard = ({ name, rating, avatar }: Subcontratist) => {
  const formattedRating = rating.toString().replace(".", ",");
  return (
    <div className="flex w-fit snap-start items-center gap-1 text-xs">
      <Avatar alt={`${name} avatar`} src={avatar} className="h-7 w-7" />
      <span className=" mr-6 inline-block whitespace-nowrap font-medium text-[#454545]">
        {name}
      </span>
      <span className="flex gap-0.5 align-middle font-semibold text-[#304985]">
        {formattedRating}
        <StarBorderIcon className="h-4 w-4" />
      </span>
    </div>
  );
};
