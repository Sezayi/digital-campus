import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.a)`
  font-family: Oswald, sans-serif;
  display: inline-block;
  border-radius: 3px;
  padding: 1.4rem 0;
  margin: 0.5rem 1rem;
  width: 16rem;
  height: 5rem;
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  text-align: center;
  font-size: 1.6rem;
  text-decoration: none;

  &:hover {
    color: #b8c300;
    border: 1px solid #b8c300;
    cursor: pointer;
  }
`;

const ButtonSecondary = (props) => {
  return (
    <StyledButton
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
