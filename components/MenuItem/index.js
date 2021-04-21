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

const StyledLink = styled.a`
  padding: 8px;
  color: #f35b04;
  font-size: 1.5em;
`;

const MenuItem = ({ children }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <StyledLink>{children}</StyledLink>
    </motion.li>
  );
};

export default MenuItem;