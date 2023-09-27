import Button from "@mui/material/Button";
import { EventCard } from "../components/EventCard";
import { useEvent } from "../lib/stores/useEvent";

export const OrderSection = () => {
  const { events } = useEvent();
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
      <div className=" flex flex-row gap-16">
        {events.map((event) => (
          <EventCard key={event.date + event.rangeHour} {...event} />
        ))}
      </div>
    </section>
  );
};
