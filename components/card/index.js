import styled from "styled-components";
import { motion } from "framer-motion";

const StyledCard = styled(motion.div)`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 1rem;
  max-width: 400px;
  height: 480px;
  background-color: #272727;
  border-radius: 4px;
`;

const CardHeader = styled.header`
  margin: 0rem 1rem 0rem 0rem;
  padding: 1rem 2rem 1rem 2rem;
  color: white;
  font-size: 2rem;
  font-family: Oswald, sans-serif;
`;

const ImageWrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

const CardBody = styled.div`
  padding: 0px 32px 32px 32px;
  color: white;
`;

const StyledLink = styled.a`
  padding: 32px 32px 0px 32px;
  color: #f35b04;
  font-family: Oswald, sans-serif;
`;

const Card = (props) => {
  return (
    <StyledCard
      whileHover={{
        position: "relative",
        backgroundColor: "#272727",
        zIndex: 1,
        scale: 1.2,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <ImageWrapper>{props.image}</ImageWrapper>
      <CardHeader>{props.header}</CardHeader>
      <CardBody>{props.body}</CardBody>
      <StyledLink>START EXPLORING</StyledLink>
    </StyledCard>
  );
};

export default Card;
