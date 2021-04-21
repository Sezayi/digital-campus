import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "../MenuItem";
import Link from "next/link";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = (props) => (
  <motion.ul variants={variants}>
      <MenuItem><Link href={props.link}><h3>{props.title}</h3></Link></MenuItem>
      <MenuItem><h3>{props.title2}</h3></MenuItem>
      <MenuItem><h3>{props.title3}</h3></MenuItem>
      <MenuItem><h3>{props.title4}</h3></MenuItem>
      <MenuItem><h3>{props.title5}</h3></MenuItem>
      <MenuItem><h3>{props.title5}</h3></MenuItem>
  </motion.ul>
);



export default Navigation;
