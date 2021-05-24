import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import MenuItem from "../MenuItem";
import MenuDivider from "../MenuDivider";
import Link from "next/link";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Styledp = styled.a`
  color: #fff;
  font-size: 1em;
  line-height: 1.6;
  padding: 16px;
  font-family: Oswald, sans-serif;
`;
const Wrapper = styled.div`
  margin-bottom: 16px;
`;

const Line = styled.hr`
  color: rgba(0, 0, 0, 0.25);
  width: -200px;
`;

const CharacterTitle = styled.h4`
  font-size: 1.6em;
  margin: 32px 0px 16px 24px;
`;

const Navigation = (props) => (
  <motion.ul variants={variants}>
    <MenuItem>
      <Link href={props.link}>
        <Wrapper>
          <Styledp>{props.title}</Styledp>
        </Wrapper>
      </Link>
    </MenuItem>
    <MenuDivider>
      <Line />
      <CharacterTitle>{props.character}</CharacterTitle>
    </MenuDivider>
    <MenuItem>
      <Link href={props.link1}>
        <h3>{props.title1}</h3>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link href={props.link2}>
        <h3>{props.title2}</h3>
      </Link>
    </MenuItem>
    <MenuItem>
      <h3>{props.title3}</h3>
    </MenuItem>
    <MenuItem>
      <h3>{props.title4}</h3>
    </MenuItem>
    <MenuItem>
      <h3>{props.title5}</h3>
    </MenuItem>
    <MenuItem>
      <h3>{props.title5}</h3>
    </MenuItem>
  </motion.ul>
);

export default Navigation;
