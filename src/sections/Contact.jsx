import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation.js";
// import { GoPaperAirplane } from "react-icons/go";
import { PiAddressBookFill } from "react-icons/pi";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import Swal from "sweetalert2";

//url = https://script.google.com/macros/s/AKfycbwZQb9HlskjyEZDu3bV50vc4CUX6mHW9IjG51l7KtuCmTFpNlEJVNuG4KJXX8wSthW-/exec

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    //alert("Thanks for reaching out. We'll contact you soon..");
    Swal.fire({
      title: "Message sent!",
      text: "Thanks for reaching out. We'll contact you soon..",
      icon: "success",
    });
    const url =
      "https://script.google.com/macros/s/AKfycbw6zBLKXDb_oMRoFiynYl29Hp12obdez1RSKB8rDaUyrU-hrOGU7ukxvOjDjYfQaxb2/exec";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `name=${e.target.name.value}&email=${e.target.email.value}&mobile=${e.target.mobile.value}&message=${e.target.message.value}`,
    })
      .then(form.reset())
      .then((res) => res.text())
      .then((data) => {
        alert(data);
        alert("Message sent");
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]"
      id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6">
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl">
          CONTACT US
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold">
          REACH US FOR ANY QUERY
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        {/* <div className="items-center border-[2px] border-yellow-500 py-2 rounded text-black 
        bg-yellow-500 mt-[30px] pb-[20px] px-[2px]"> */}

        {/* <p className="flex items-center text-[21px]  mt-[30px] bg-gray-50 pl-0 pt-0 pb-0 px-[10px] py-[2px] rounded-3xl italic">
          <MdLocationPin className="cursor-pointer text-[40px] mr-2 bg-yellow-500 rounded-full lg:p-1 transition-shadow duration-300 hover:shadow-[0_0_8px_3px_rgba(250,204,21,0.6)]" />{" "}
          No:6, Kambar Street, T.M.P. Nagar, Padi, Chennai - 600 050
        </p> */}
        <a
          href="https://maps.app.goo.gl/YZnZqTuDbJY455Hz8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-[21px]  mt-[30px] bg-gray-50 pl-0 pt-0 pb-0 px-[10px] py-[2px] rounded-3xl italic">
          <MdLocationPin className="cursor-pointer text-[40px] mr-2 bg-yellow-500 rounded-full lg:p-1 transition-shadow duration-300 hover:shadow-[0_0_8px_3px_rgba(250,204,21,0.6)]" />
          No:6, Kambar Street, T.M.P. Nagar, Padi, Chennai - 600 050
        </a>

        <p className="italic flex items-center text-[21px] mt-[10px] bg-gray-50 pl-0 pt-0 pb-0 px-[10px] py-[2px] rounded-3xl">
          <a href="tel:+919840807858">
            {" "}
            <IoMdCall className="cursor-pointer mr-2 text-[40px] rounded-full border-black bg-yellow-500 p-1 transition-shadow duration-300 hover:shadow-[0_0_8px_3px_rgba(250,204,21,0.6)]" />{" "}
          </a>
          <a href="tel:+919840807858">+91 98408 07858 </a> /{" "}
          <a href="tel:+919499045443"> +91 94990 45443</a>
        </p>

        {/* <a
          href="tel:+919840807858"
          className="italic flex items-center text-[21px] mt-[10px] bg-gray-50 pl-0 pt-0 pb-0 px-[10px] py-[2px] rounded-3xl">
          <IoMdCall className="cursor-pointer mr-2 text-[40px] rounded-full border-black bg-yellow-500 p-1 transition-shadow duration-300 hover:shadow-[0_0_8px_3px_rgba(250,204,21,0.6)]" />
          +91 98408 07858
        </a>
        <a
          href="tel:+919499045443"
          className="italic flex items-center text-[21px] mt-[10px] bg-gray-50 pl-0 pt-0 pb-0 px-[10px] py-[2px] rounded-3xl">
          <IoMdCall className="cursor-pointer mr-2 text-[40px] rounded-full border-black bg-yellow-500 p-1 transition-shadow duration-300 hover:shadow-[0_0_8px_3px_rgba(250,204,21,0.6)]" />
          +91 94990 45443
        </a> */}

        <a
          href="mailto:mohammedtawfiq008@gmail.com"
          className="italic flex items-center text-[21px] mt-[10px] bg-gray-50 pl-0 pt-0 pb-0 px-[10px] py-[2px] rounded-3xl">
          <MdEmail className="cursor-pointer text-[40px] mr-2 bg-yellow-500 rounded-full p-1 transition-shadow duration-300 hover:shadow-[0_0_8px_3px_rgba(250,204,21,0.6)]" />
          mohammedtawfiq008@gmail.com
        </a>
        <p
          draggable="false"
          className="text-2xl italic text-black mt-[30px] pl-0 pb-0 pt-0 p-1 bg-gray-100">
          <i className="mr-2 border-black bg-yellow-500 p-1 transition-shadow duration-300 hover:shadow-[0_0_8px_3px_rgba(250,204,21,0.6)]">
            GSTIN
          </i>
          33BBBPN0263P1ZL
        </p>
        {/* </div> */}
      </motion.div>
      {/* -----submit form------- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
        <motion.form
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-start gap-4 w-full">
          <input
            type="text"
            placeholder="Enter fullname"
            name="name"
            required
            className="px-6 py-3 border-[2px] border-white text-black rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            className="px-6 py-3 border-[2px] border-white text-black rounded-lg w-full"
          />
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Enter Mobile Number"
            name="mobile"
            required
            className="px-6 py-3 border-[2px] border-white text-black rounded-lg w-full"
          />
          <textarea
            name="message"
            id=""
            placeholder="Enter your message"
            rows="6"
            required
            className="px-6 py-3 border-[2px] border-white text-black rounded-lg w-full"></textarea>
          <motion.button
            variants={zoomInVariants}
            className="bg-yellow-500 px-10 py-4 text-black font-bold rounded-lg w-full text-[20px] transition-shadow duration-300 hover:shadow-[0_0_8px_3px_rgba(250,204,21,0.6)] ">
            {/* <GoPaperAirplane className="" />*/}Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};
export default Contact;
