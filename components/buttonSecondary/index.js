import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.a)`
  font-family: Oswald, sans-serif;
  display: inline-block;
  border-radius: 3px;
  padding: 1.4rem 0;
  margin: 0.5rem 1rem;
  width: 24rem;
  height: 5rem;
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  text-align: center;
  font-size: 1.6rem;
  text-decoration: none;

  &:hover {
    color: #ffffff ;
    border: 1px solid #519E8E ;
    background: #519E8E;
    cursor: pointer;
  }
`;

const ButtonSecondary = (props) => {
  return (
    <StyledButton
      whileHover={{scale: 1.1}}
      href={props.href}
      target={props.target}
      rel={props.rel}
      primary
    >
      {props.title}
    </StyledButton>
  );
};

export default ButtonSecondary;
