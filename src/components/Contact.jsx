import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const Contact = () => {
  const ref = useRef(null); // Create a ref
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <motion.div
      ref={ref} // Attach the ref to the motion.div
      className="flex flex-col md:flex-row justify-between p-6"
      variants={listVariant}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <div className="w-full md:w-1/2 p-4">
        <motion.form className="bg-slate-800 text-slate-300 p-6 rounded-lg shadow-md">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl text-indigo-400"
          >
            Let's Keep in Touch
          </motion.h2>
          <motion.div variants={itemVariant} className="formItem mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 block w-full border bg-slate-700 border-slate-600 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </motion.div>
          <motion.div variants={itemVariant} className="formItem mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-1 block w-full border border-slate-600 bg-slate-700 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </motion.div>
          <motion.div variants={itemVariant} className="formItem mb-4">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows={10}
              placeholder="Write Your Message..."
              className="mt-1 block w-full border border-slate-600 rounded-md shadow-sm p-2 bg-slate-700 text-slate-300 focus:outline-none focus:ring focus:ring-indigo-500"
            ></textarea>
          </motion.div>
          <button className="formButton w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-500 transition duration-200">
            Send
          </button>
        </motion.form>
      </div>

      <div className="cSection w-full md:w-1/2 p-4">
        <motion.div
          className="flex items-center justify-center h-full"
          variants={itemVariant}
        >
          <div className="w-full h-auto">
            <ContactSvg />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
