import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};



const MenuItem = ({ children }) => {
  return (
    <motion.div
      variants={variants}
    >
      <div>{children}</div>
    </motion.div>
  );
};

export default MenuItem;