import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { TaskCard } from "../components/TaskCard";
import { useTask } from "../lib/stores/useTask";

const MORE_TASKS_NUMB = 2;

const container = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 1,
    },
  },
};

export const GrowthSection = () => {
  const { tasks, taskView, allTasks, setView, toggleAllViews } = useTask();
  const ref = useRef<null | HTMLButtonElement>(null);
  const slicedTasks = tasks.slice(0, taskView);

  const handleMoreViews = () => {
    setView(MORE_TASKS_NUMB);
    setTimeout(() => {
      ref.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  const handleAllViews = () => {
    if (!allTasks && taskView < tasks.length) {
      // [BUG] When reaching the bottom without clicking "View all" button, you need to click twice. Maybe due to the setters
      setTimeout(() => {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }, 100);
    }
    toggleAllViews();
  };
  return (
    <motion.section
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      id="growth"
      className="relative mb-8"
    >
      <div className="mb-5 flex items-center justify-between text-[#304985]">
        <h2 className=" leading-1 inline-block text-lg font-semibold leading-tight ">
          Tareas por completar
        </h2>
        <Button
          onClick={handleAllViews}
          variant="text"
          className=" py-1 text-sm font-semibold normal-case leading-none tracking-normal text-[#304985] "
        >
          Ver {allTasks || taskView >= tasks.length ? "menos" : "todas"}
        </Button>
      </div>
      {/*TAREAS*/}
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        <AnimatePresence>
          {slicedTasks.map((task) => (
            <TaskCard key={task.name + task.dueDate} {...task} />
          ))}
        </AnimatePresence>
      </motion.ul>
      <div
        className={`absolute bottom-4 left-0 right-0 flex h-36 items-end justify-center rounded-xl bg-gradient-to-t from-white to-white/80 
        ${taskView >= tasks.length ? "invisible" : ""}`}
      >
        <IconButton ref={ref} onClick={handleMoreViews}>
          <KeyboardArrowDownRoundedIcon className="h-8 w-8 text-[#304985]" />
        </IconButton>
      </div>
    </motion.section>
  );
};
