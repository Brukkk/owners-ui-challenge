export const formatTime = (time: string) =>
  new Date("1970-01-01T" + time + ":00").toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
