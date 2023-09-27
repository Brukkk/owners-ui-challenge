import Button from "@mui/material/Button";
import { AnimatePresence, motion } from "framer-motion";
import { EventCard } from "../components/EventCard";
import { useEvent } from "../lib/stores/useEvent";

export const OrderSection = () => {
  const { events } = useEvent();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="order"
      className=" mb-8"
    >
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
      <motion.div
        layout
        className="relative flex h-72 w-full flex-row items-center justify-center gap-16 min-[375px]:h-[262px]"
      >
        <AnimatePresence>
          {/* Only render the first event in our store and let Framer Motion deal when the component mount and unmount */}
          {events.length > 0 && (
            <EventCard
              key={
                events[0].date + events[0].rangeHour[0] + events[0].rangeHour[1]
              }
              {...events[0]}
            />
          )}
          {events.length === 0 && (
            <p className="text-xl font-medium text-[#304985] opacity-80">
              No more events
            </p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};
