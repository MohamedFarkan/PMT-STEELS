import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation.js";
import { allservices } from "../export.js";

const Services = () => {
  return (
    <div id="services" className="w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[90%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]">
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl">
          WHY PMT?
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-[40px] font-bold text-center">
          Why Clients Prefer Us
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]">
          {allservices.map((item, index) => (
            <motion.div
              variants={zoomInVariants}
              className="flex justify-center items-start gap-5 p-8"
              key={index}>
              <img
                src={item.icon}
                alt="icon"
                className="w-[70px] border-2 border-yellow-500 hover:bg-yellow-500 rounded-lg p-2 cursor-pointer"
              />
              <div className="flex flex-col justify-center items-start gap-3">
                <h1 className="text-xl font-bold text-black">{item.title}</h1>
                <p className="text-[18px]">{item.about}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Services;
