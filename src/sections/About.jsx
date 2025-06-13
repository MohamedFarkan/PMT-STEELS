import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation.js";

const About = () => {
  return (
    <div
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]"
      id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6">
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl">
          ABOUT US
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold">
          PMT STEEL CORPORATION
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <p className="text-3xl italic text-gray-50 mt-[60px]">
          Built on trust, Delivered with strength — PMT Steel powers projects
          with quality steel in every shape <br />
          and size.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
        <p className="text-white text-lg text-justify">
          PMT Steel Corporation is a trusted name in the steel industry,
          delivering high-quality steel products to meet the diverse needs of
          construction, manufacturing, and engineering sectors. Based in
          Chennai, we specialize in offering a wide range of steel types and
          profiles — from angles and channels to sheets, rods, and custom cuts —
          ensuring reliability, durability, and precision in every supply. With
          a strong commitment to quality and customer satisfaction, we have
          built long-standing relationships with contractors, fabricators, and
          industrial clients who rely on us for timely deliveries and
          competitive pricing. At PMT Steel Corporation, we don’t just supply
          steel — we build trust, strengthen structures, and support your
          success.
        </p>
        {/* <motion.button
          variants={zoomInVariants}
          className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 font-bold rounded-lg text-black">
          READ MORE
        </motion.button> */}
      </motion.div>
    </div>
  );
};
export default About;
