import { motion } from "framer-motion";
import Lottie from "lottie-react";

import workingProject from "@src/assets/lotties/working-project.json";
import { animate, exit, initial } from "@src/assets/pageTransitions";

const ConstructionPage: React.FC = () => {
  return (
    <>
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="mt-3 flex items-center justify-center p-10"
      >
        <div className="mt-5 flex w-3/4 flex-col items-center justify-between sm:mt-2">
          <div className="flex w-full flex-row items-center justify-center p-5 sm:w-1/2">
            <Lottie animationData={workingProject} loop={true} />
          </div>
          <div className="mt-3 flex w-full flex-col items-center p-3 text-center ">
            <h1 className="open-sans-600 text-3xl sm:text-6xl">Oops, Sorry!</h1>
            <p className="open-sans-500 mt-5 text-center text-xl opacity-80">
              This page is currently under construction
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ConstructionPage;
