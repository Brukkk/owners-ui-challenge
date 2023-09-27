import { create } from "zustand";
import { Event } from "../types/Event";
import eventData from "./events.json";

interface EventStore {
  events: Event[];
  loading: boolean;
  setEvents: () => void;
  updateEvent: (date: string, hourRange: string[]) => void;
  removeEvent: (date: string, hourRange: string[]) => void;
}

const updateEvent = (
  events: Event[],
  date: string,
  rangeHour: string[],
): Event[] =>
  events.map((event) => ({
    ...event,
    date:
      event.date === date && event.rangeHour === rangeHour ? date : event.date,
    rangeHour:
      event.rangeHour === rangeHour && event.date === date
        ? rangeHour
        : event.rangeHour,
  }));

const removeEvent = (
  events: Event[],
  date: string,
  rangeHour: string[],
): Event[] =>
  events.filter(
    (event) => event.date !== date && event.rangeHour !== rangeHour,
  );

export const useEvent = create<EventStore>((set) => ({
  events: eventData,
  loading: false,
  setEvents: async () => {
    console.log("Loading...");
    set({ loading: true });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Finished loading");
    set((state) => ({ ...state, events: eventData, loading: false }));
  },
  updateEvent: (date: string, rangeHour: string[]) =>
    set((state) => ({
      ...state,
      events: updateEvent(state.events, date, rangeHour),
    })),
  removeEvent: (date: string, rangeHour: string[]) =>
    set((state) => ({
      ...state,
      events: removeEvent(state.events, date, rangeHour),
    })),
}));
