import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { formatTime } from "../lib/helpers";
import { useEvent } from "../lib/stores/useEvent";
import { Event } from "../lib/types/Event";
import { BasicModal } from "./BasicModal";
import { SubcontratistCard } from "./SubcontratistCard";

export const EventCard = ({
  name,
  client,
  date,
  rangeHour,
  subcontractors,
}: Event) => {
  const { removeEvent } = useEvent();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRemove = () => {
    handleClose();
    // Delay simulation for Fade transition on Modal to unmount
    setTimeout(() => {
      removeEvent(date, rangeHour);
    }, 500);
  };
  const month = date.split(" ")[1];
  const dayNumber = date.split(" ")[0];
  const year = date.split(" ")[2];

  return (
    <div className=" min-w-[324px] rounded-xl bg-white p-5 shadow-[0_1px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="mb-2.5 flex items-start justify-between">
        <div className="flex gap-4">
          <div className=" space-y-2 text-right text-sm font-medium leading-tight text-neutral-600 text-opacity-60">
            <p>{month}</p>
            <p className="text-lg leading-tight text-[#304985] text-opacity-100 ">
              {dayNumber}
            </p>
            <p>{year}</p>
          </div>
          <Divider
            orientation="vertical"
            variant="fullWidth"
            className=" h-20 border border-[#304985] border-opacity-20"
          />
          <div className=" space-y-2.5 text-sm font-medium leading-tight">
            <p className=" text-[#797979]">
              {formatTime(rangeHour[0])} - {formatTime(rangeHour[1])}
            </p>
            <p className=" text-[#304985]">{name}</p>
            <p className=" text-[#454545]">Client: {client}</p>
          </div>
        </div>
        <MoreVertIcon className="h-6 w-6 cursor-pointer text-[#304985]" />
      </div>
      <p className="mb-1 text-xs text-[#454545]">Sub contratista/s:</p>
      <div className="flex snap-x gap-8 overflow-x-auto pb-2">
        {subcontractors.map(({ name, rating }, i) => (
          <SubcontratistCard key={i} name={name} rating={rating} />
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        <Button
          onClick={handleOpen}
          variant="text"
          className="min-w-[150px] rounded-lg bg-[#E6EEFE] p-4 text-sm  font-semibold leading-tight text-[#304985]"
        >
          Cancelar
        </Button>
        <BasicModal open={open} onClose={handleClose}>
          <>
            <p id="modal-modal-title">¿Estás seguro?</p>
            <p
              id="modal-modal-description"
              className="mt-2 text-[#454545] text-opacity-60"
            >
              Una vez eliminado el evento, no hay vuelta atrás.
            </p>
            <div className="mt-4 flex justify-end gap-4">
              <Button
                onClick={handleClose}
                variant="text"
                className=" rounded-lg bg-[#E6EEFE]  text-sm  font-semibold text-[#304985]"
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                //color="error"
                className=" rounded-lg  bg-[#BD2020]"
                onClick={handleRemove}
              >
                Eliminar
              </Button>
            </div>
          </>
        </BasicModal>
        <Button
          variant="contained"
          className=" rounded-lg bg-[#304985] p-4 leading-tight"
        >
          Reprogramar
        </Button>
      </div>
    </div>
  );
};
