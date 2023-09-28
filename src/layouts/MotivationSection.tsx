import { motion } from "framer-motion";
import Rewards from "../assets/rewards.png";

export const MotivationSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      id="motivation"
    >
      <h1 className=" mb-2.5 text-xl font-semibold text-[#304985] ">
        ¡Bienvenido, Sam!
      </h1>
      <p className=" font-medium text-[#454545]">¡Hoy será un gran día!</p>
      <div className="my-7 flex items-center gap-1.5 rounded-xl bg-[#304985] px-4 py-3">
        <img src={Rewards} alt="Reward image after completing a challenge" />
        <p className="  text-lg font-semibold leading-none text-white ">
          ¡Felicidades!
          <br />{" "}
          <span className=" text-base  font-normal leading-none">
            Haz completado el onboarding.
          </span>
        </p>
      </div>
    </motion.section>
  );
};
