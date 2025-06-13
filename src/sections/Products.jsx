import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation.js";
import product1 from "../assets/img/10mm-iron-bar-1.webp";
import product2 from "../assets/img/pre-cast-bar-2.webp";
import product3 from "../assets/img/34-black-steel-rod-3.webp";
import product4 from "../assets/img/5inch-steel-cutter-4.webp";
import product5 from "../assets/img/ms-rod-bit-5.webp";
import product6 from "../assets/img/square-plate-6.webp";
// import product7 from "../assets/img/steel-sheets-6.webp";
// import product8 from "../assets/img/ms-rod-bit-8.webp";
import product9 from "../assets/img/round-bar-12.webp";
import product10 from "../assets/img/ms-rod-13.webp";
import product11 from "../assets/img//ms-pipe-14.webp";
import product12 from "../assets/img/steel-bheem-15.webp";
import product13 from "../assets/img/steel-angle-16.webp";
// import product14 from "../assets/img/ms-rod-17.webp";
import product15 from "../assets/img/steel-bar-18.webp";

const Products = () => {
  return (
    <div id="products" className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]">
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl">
          AVAILABLE MATERIALS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold text-center">
          OUR BEST PRODUCTS
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"></motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-full m-auto grid lg:grid-cols-4 grid-cols-1 gap-0 ">
        {/* ---p1---- */}
        <div
          id="product1"
          className="relative h-[250px] w-full overflow-hidden group">
          <img
            src={product1}
            alt="Product image"
            className="h-full w-full object-cover transform transition-transform duration-[400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-yellow-400 text-2xl font-bold mb-2">
              10mm IRON BAR
            </p>{" "}
            {/* Heading at top */}
            <p className="text-white text-lg px-4">
              High-tensile iron bar commonly used for reinforcement in concrete
              structures.
            </p>{" "}
            {/* Description below */}
          </div>
        </div>
        {/* ----p2---------- */}
        <div
          id="product2"
          className="relative h-[250px] w-full overflow-hidden group">
          <img
            src={product2}
            alt="Product image"
            className="h-full w-full object-cover transform transition-transform duration-[400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-yellow-400 text-2xl font-bold mb-2">
              PRE CAST BAR
            </p>
            <p className="text-white text-lg px-4">
              Pre-molded steel bar ideal for quick concrete construction.
            </p>
          </div>
        </div>

        {/* ------p3-------- */}
        <div
          id="product3"
          className="relative h-[250px] w-full overflow-hidden group">
          <img
            src={product3}
            alt="Product image"
            className="h-full w-full object-cover transform transition-transform duration-[400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-yellow-400 text-2xl font-bold mb-2">
              BLACK STEEL ROD
            </p>
            <p className="text-white text-lg px-4">
              Uncoated steel rod used for welding and structural work.
            </p>
          </div>
        </div>

        {/* ---p4--- */}
        <div
          id="product4"
          className="relative h-[250px] w-full overflow-hidden group">
          <img
            src={product4}
            alt="Product image"
            className="h-full w-full object-cover transform transition-transform duration-[400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-yellow-400 text-2xl font-bold mb-2">
              5-INCH STEEL CUTTER
            </p>
            <p className="text-white text-lg px-4">
              Compact steel cutter for precise metal cutting.
            </p>
          </div>
        </div>

        {/* ---p5- */}
        <div
          id="product5"
          className="relative h-[250px] w-full overflow-hidden group">
          <img
            src={product5}
            alt="Product image"
            className="h-full w-full object-cover transform transition-transform duration-[400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-yellow-400 text-2xl font-bold mb-2">
              MS - ROD BIT
            </p>
            <p className="text-white text-lg px-4">
              Mild steel bit used in construction and welding applications.
            </p>
          </div>
        </div>

        {/* ---p6- */}
        <div
          id="product6"
          className="relative h-[250px] w-full overflow-hidden group">
          <img
            src={product6}
            alt="Product image"
            className="h-full w-full object-cover transform transition-transform duration-[400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-yellow-400 text-2xl font-bold mb-2">
              SQUARE PLATE
            </p>
            <p className="text-white text-lg px-4">
              Flat steel plate used in construction, fabrication, and welding.
            </p>
          </div>
        </div>

        {/* ---p7-
        <div
          id="product7"
          className="relative h-[250px] w-full overflow-hidden group">
          <img
            src={product6}
            alt="Product image"
            className="h-full w-full object-cover transform transition-transform duration-[400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-xl font-semibold">Steel Sheets</p>
          </div>
        </div> */}
        {/* ---p8- */}
        <div
          id="product9"
          className="relative h-[250px] w-full overflow-hidden group">
          <img
            src={product9}
            alt="Product image"
            className="h-full w-full object-cover transform transition-transform duration-[400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-yellow-400 text-2xl font-bold mb-2">ROUND BAR</p>
            <p className="text-white text-lg px-4">
              Solid cylindrical steel bar for shafts and general use.
            </p>
          </div>
        </div>

        {/* ---p9- */}
        <div
          id="product10"
          className="relative h-[250px] w-full overflow-hidden group">
          <img
            src={product10}
            alt="Product image"
            className="h-full w-full object-cover transform transition-transform duration-[400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-yellow-400 text-2xl font-bold mb-2">MS - ROD</p>
            <p className="text-white text-lg px-4">
              Mild steel rod ideal for structural work and light fabrication.
            </p>
          </div>
        </div>

        {/* ---p10- */}
        <div
          id="product11"
          className="relative h-[250px] w-full overflow-hidden group">
          <img
            src={product11}
            alt="Product image"
            className="h-full w-full object-cover transform transition-transform duration-[400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-yellow-400 text-2xl font-bold mb-2">MS - PIPE</p>
            <p className="text-white text-lg px-4">
              Hollow mild steel pipe used in plumbing and supports.
            </p>
          </div>
        </div>

        {/* ---p11- */}
        <div
          id="product12"
          className="relative h-[250px] w-full overflow-hidden group">
          <img
            src={product12}
            alt="Product image"
            className="h-full w-full object-cover transform transition-transform duration-[400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-yellow-400 text-2xl font-bold mb-2">
              STEEL BEAM
            </p>
            <p className="text-white text-lg px-4">
              Heavy-duty steel beam used in load-bearing construction.
            </p>
          </div>
        </div>

        {/* ---p12- */}
        <div
          id="product13"
          className="relative h-[250px] w-full overflow-hidden group">
          <img
            src={product13}
            alt="Product image"
            className="h-full w-full object-cover transform transition-transform duration-[400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-yellow-400 text-2xl font-bold mb-2">
              STEEL ANGLE
            </p>
            <p className="text-white text-lg px-4">
              L-shaped steel section for framing and bracing structures.
            </p>
          </div>
        </div>

        {/* ---p6- */}
        <div
          id="product14"
          className="relative h-[250px] w-full overflow-hidden group">
          <img
            src={product15}
            alt="Product image"
            className="h-full w-full object-cover transform transition-transform duration-[400ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-yellow-400 text-2xl font-bold mb-2">STEEL BAR</p>
            <p className="text-white text-lg px-4">
              Solid steel bar used in industrial and structural frameworks.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Products;
