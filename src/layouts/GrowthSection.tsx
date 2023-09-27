import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { TaskCard } from "../components/TaskCard";

export const GrowthSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="growth"
      className="mb-8"
    >
      <div className="mb-5 flex items-center justify-between text-[#304985]">
        <h2 className=" leading-1 inline-block text-lg font-semibold leading-tight ">
          Tareas por completar
        </h2>
        <Button
          variant="text"
          className=" py-1 text-sm font-semibold normal-case leading-none tracking-normal text-[#304985] "
        >
          Ver todas
        </Button>
      </div>
      {/*TAREAS*/}
      <ul className="space-y-4">
        {[0, 1, 2].map((i) => (
          <TaskCard key={i} />
        ))}
      </ul>
    </motion.section>
  );
};
