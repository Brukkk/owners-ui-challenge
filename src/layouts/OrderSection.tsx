import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { SubcontratistCard } from "../components/SubcontratistCard";
export const OrderSection = () => {
  return (
    <section id="order" className=" mb-8">
      <div className="mb-5 flex items-center justify-between text-[#304985]">
        <h2 className=" leading-1 inline-block text-lg font-semibold leading-tight ">
          Próximos eventos
        </h2>
        <Button
          variant="text"
          className=" py-1 text-sm font-semibold normal-case leading-none tracking-normal text-[#304985] "
        >
          Ver calendario
        </Button>
      </div>
      <div className=" rounded-xl bg-white p-5 shadow-[0_1px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="mb-2.5 flex items-start justify-between">
          <div className="flex gap-4">
            <div className=" space-y-2 text-right text-sm font-medium leading-tight text-neutral-600 text-opacity-60">
              <p>Sept</p>
              <p className="text-lg leading-tight text-[#304985] text-opacity-100 ">
                14
              </p>
              <p>2023</p>
            </div>
            <Divider
              orientation="vertical"
              variant="fullWidth"
              className=" h-20 border border-[#304985] border-opacity-20"
            />
            <div className=" space-y-2.5 text-sm font-medium leading-tight">
              <p className=" text-[#797979]">9 am - 5 pm</p>
              <p className=" text-[#304985]">Interior & Exterior paint</p>
              <p className=" text-[#454545]">Client: John Doe</p>
            </div>
          </div>
          <MoreVertIcon className="h-6 w-6 cursor-pointer text-[#304985]" />
        </div>
        <p className="mb-1 text-xs text-[#454545]">Sub contratista/s:</p>
        <div className="flex snap-x gap-8 overflow-x-scroll pb-2">
          {[
            {
              name: "John Doe",
              rating: 4.5,
            },
            {
              name: "Jane Smith",
              rating: 3.2,
            },
            {
              name: "Michael Johnson",
              rating: 2.8,
            },
            {
              name: "Emily Davis",
              rating: 4.1,
            },
            {
              name: "Robert Wilson",
              rating: 3.7,
            },
            {
              name: "Jennifer Brown",
              rating: 4.6,
            },
          ].map(({ name, rating }, i) => (
            <SubcontratistCard key={i} name={name} rating={rating} />
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <Button
            variant="text"
            className="min-w-[150px] rounded-lg bg-[#E6EEFE] p-4 text-sm  font-semibold leading-tight text-[#304985]"
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            className=" rounded-lg bg-[#304985] p-4 leading-tight"
          >
            Reprogramar
          </Button>
        </div>
      </div>
    </section>
  );
};
