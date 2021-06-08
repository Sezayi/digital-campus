import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.a)`
  font-family: Oswald, sans-serif;
  display: inline-block;
  padding: 1rem 2rem 1rem 2rem;
  margin: 0.5rem 1rem;
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  text-align: center;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: #ffffff ;
    background: #F26849;
    border: 1px solid #F26849;
    cursor: pointer;
    transition: all 0.4s ease 0s;
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
