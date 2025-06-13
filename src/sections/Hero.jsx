import heroimg from "../assets/heroimg.png";
import backgroundImage from "../assets/img/bg-7_bgcolor.png";
import backgroundImage1 from "../assets/img/bg-5.png";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation.js";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4">
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl">
          Best steel providers
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[50px] font-bold">
          We assure to satisfy your needs
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <p className="text-white text-[20px]">
          All kind of Ferrous and Non - Ferrous available
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex justify-center items-center gap-5">
          <Link to="contact" spy={true} offset={-100} smooth={true}>
            <motion.button
              variants={zoomInVariants}
              className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold">
              REACH US
            </motion.button>
          </Link>

          {/* <motion.button
            variants={zoomInVariants}
            className="border-white hover:border-yellow-500 hover:text-yellow-500 border-2 px-10 py-3 rounded-lg text-white font-bold">
            REACH US
          </motion.button> */}
        </motion.div>
      </motion.div>
      <div className="w-[40%] flex flex-col justify-end items-end">
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          src={heroimg}
          alt="Hero image"
          className="lg:h-[600px] h-[300px] lg:mb-[-100px]"
        />
      </div>
    </div>
  );
};
export default Hero;
