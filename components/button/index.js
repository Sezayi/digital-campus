import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.a)`
  font-family: Oswald, sans-serif;
  display: inline-block;
  border-radius: 3px;
  padding: 1.7rem;
  margin: 0.5rem 1rem;
  height: 5rem;
  color: #ffffff;
  text-align: center;
  font-size: 1.5rem;
  text-decoration: none;
  background-image: linear-gradient(to bottom right, #519E8E 0%, #123D5C  60%, #123D5C  100%);
`;

const Button = (props) => {
  return (
    <StyledButton
      whileHover={{
        scale: 1.1,
        cursor: "pointer",
        backgroundImage: "linear-gradient(to bottom right, #519E8E 0%, #519E8E  100%, #123D5C  100%)",
        transition: "0.5s all"
      }}
      href={props.href}
      target={props.target}
      rel={props.rel}
      primary
    >
      {props.title}
    </StyledButton>
  );
};

export default Button;
