import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "../MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = () => (
  <motion.ul variants={variants}>
      <MenuItem><h3>The basics of money</h3></MenuItem>
      <MenuItem><h3>The ethereum wallet</h3></MenuItem> 
  </motion.ul>
);



export default Navigation;
