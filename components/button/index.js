import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.a)`
  font-family: Oswald, sans-serif;
  display: inline-block;
  padding: 1rem 2.2rem 1rem 2.2rem;
  letter-spacing: 0.1em;
  margin: 0.5rem 1rem;
  color: #ffffff;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  background-color: #F26849;
`;

// background-image: linear-gradient(to bottom right, #519E8E 0%, #123D5C  60%, #123D5C  100%);

 // backgroundImage: "linear-gradient(to bottom right, #519E8E 0%, #519E8E  100%, #123D5C  100%)",
        // transition: "0.5s all"


const Button = (props) => {
  return (
    <StyledButton
      whileHover={{
        scale: 1.2,
        cursor: "pointer",
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
