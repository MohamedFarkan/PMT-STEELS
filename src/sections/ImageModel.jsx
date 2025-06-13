import { useState } from "react";
import { motion } from "framer-motion";
import product1 from "../assets/img/10mm-iron-bar-1.webp";
import product2 from "../assets/img/pre-cast-bar-2.webp";
import product3 from "../assets/img/34-black-steel-rod-3.webp";
import product4 from "../assets/img/5inch-steel-cutter-4.webp";
import product5 from "../assets/img/ms-rod-bit-5.webp";
import product6 from "../assets/img/square-plate-6.webp";
import product9 from "../assets/img/round-bar-12.webp";
import product10 from "../assets/img/ms-rod-13.webp";
import product11 from "../assets/img/ms-pipe-14.webp";
import product12 from "../assets/img/steel-bheem-15.webp";
import product13 from "../assets/img/steel-angle-16.webp";
import product15 from "../assets/img/steel-bar-18.webp";

const productList = [
  { id: "product1", src: product1, desc: "10mm Iron Bar" },
  { id: "product2", src: product2, desc: "Pre Cast Bar" },
  { id: "product3", src: product3, desc: "Black Steel Rod" },
  { id: "product4", src: product4, desc: "5-Inch Steel Cutter" },
  { id: "product5", src: product5, desc: "MS - Rod Bit" },
  { id: "product6", src: product6, desc: "Square Plate" },
  { id: "product9", src: product9, desc: "Round Bar" },
  { id: "product10", src: product10, desc: "MS - Rod" },
  { id: "product11", src: product11, desc: "MS - Pipe" },
  { id: "product12", src: product12, desc: "Steel Beam" },
  { id: "product13", src: product13, desc: "Steel Angle" },
  { id: "product15", src: product15, desc: "Steel Bar" },
];

const Products = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    console.log("Opening modal for index:", index);
    setSelectedIndex(index);
  };
  const closeModal = () => setSelectedIndex(null);
  const moveNext = () =>
    setSelectedIndex((prev) => (prev + 1) % productList.length);
  const movePrev = () =>
    setSelectedIndex(
      (prev) => (prev - 1 + productList.length) % productList.length
    );

  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
        {productList.map((product, index) => (
          <div
            key={product.id}
            className="cursor-pointer"
            onClick={() => openModal(index)}>
            <img
              src={product.src}
              alt={product.desc}
              className="h-[250px] w-full object-cover"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-white text-xl">
              ✖
            </button>
            <button
              onClick={movePrev}
              className="absolute left-2 text-white text-xl">
              ⬅
            </button>
            <button
              onClick={moveNext}
              className="absolute right-2 text-white text-xl">
              ➡
            </button>
            <img
              src={productList[selectedIndex].src}
              alt="Selected"
              className="max-w-md"
            />
            <p className="text-white text-center">
              {productList[selectedIndex].desc}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Products;
