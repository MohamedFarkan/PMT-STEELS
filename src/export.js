import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
// import support from "../src/assets/support.svg";
import quality from "../src/assets/img/best.png";
import support from "../src/assets/img/customer-service.png";
import trust from "../src/assets/img/trust.png";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import { RiCustomerService2Fill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: quality,
    title: "BEST QUALITY MATERIALS",
    about:
      "We procure and supply only premium-grade materials that adhere to the highest industry standards.",
  },
  {
    icon: trust,
    title: "TRUSTED AND VALUED BY OUR CLIENTS",
    about:
      "We are widely trusted by our clients for delivering consistent quality and exceptional service.",
  },
  {
    icon: support,
    title: "EXCEPTIONAL SERVICES & SUPPORT",
    about:
      "We are committed to providing exceptional service and comprehensive support to ensure client satisfaction.",
  },
  // {
  //   icon: document,
  //   title: "DOCUMENTATION",
  //   about:
  //     "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  // {
  //   icon: paint,
  //   title: "INTERIOR DESIGN",
  //   about:
  //     "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  // {
  //   icon: support,
  //   title: "CUSTOMER SUPPORT",
  //   about:
  //     "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
];

export const planning = [
  {
    icon: RiCustomerService2Fill,
    title: "connect to us",
    about:
      "Our customers and clients usually reach out by giving us a call or sending us an enquiry.",
  },
  {
    icon: IoLocationSharp,
    title: "On-site visit	",
    about:
      "Our clients will conduct an on-site inspection to confirm that our inventory aligns with their needs",
  },
  {
    icon: FaHandshake,
    title: "dealing",
    about:
      "Once the customer has selected the required materials, we proceed to complete the transaction.",
  },
  {
    icon: GiTakeMyMoney,
    title: "Payment",
    about:
      "Following the dealing, customers can proceed with payment via cash, card, UPI and others etc.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Builder",
  },
];
