import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation.js";
import { planning } from "../export.js";

const Working = () => {
  return (
    <div id="working" className="w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]">
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl">
          STEP BY STEP
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-[40px] font-bold text-center">
          HOW ITS WORKING
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start gap-[20px] mt-[30px] ">
          {planning.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-5 border-2 border-yellow-500 rounded-mg p-6 transform transition-transform lg:hover:-translate-y-4 duration-500">
              <div>
                <item.icon className="size-[80px] bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full" />
              </div>
              <h1 className="text-2xl font-bold uppercase">{item.title}</h1>
              <p className="text-[20px] text-gray-600 text-center">
                {item.about}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Working;
