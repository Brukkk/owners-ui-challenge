import { create } from "zustand";
import { Event } from "../types/Event";
import eventData from "./events.json";

interface EventStore {
  events: Event[];
  //loading: boolean;
  //setEvents: () => void;
  removeEvent: (date: string, hourRange: string[]) => void;
}

const removeEvent = (
  events: Event[],
  date: string,
  rangeHour: string[],
): Event[] => {
  console.log(date, rangeHour);
  return events.filter(
    (event) =>
      event.date !== date ||
      event.rangeHour[0] !== rangeHour[0] ||
      event.rangeHour[1] !== rangeHour[1],
  );
};

export const useEvent = create<EventStore>((set) => ({
  events: eventData,
  // Tried to setup up an async load state to fetch the data on component mount but had a few trouble trying to debug it
  // loading: false,
  /*
  setEvents: async () => {
    console.log("Loading...");
    set({ loading: true });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Finished loading");
    set((state) => ({ ...state, events: eventData, loading: false }));
  },
  */
  removeEvent: (date: string, rangeHour: string[]) =>
    set((state) => ({
      ...state,
      events: removeEvent(state.events, date, rangeHour),
    })),
}));
