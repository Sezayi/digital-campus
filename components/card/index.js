import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";


const StyledCard = styled(motion.div)`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 1rem;
  max-width: 400px;
  height: 560px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

const CardHeader = styled.header`
  margin: 0rem 1rem 0rem 0rem;
  padding: 1rem 2rem 0rem 2rem;
  color: white;
  font-size: 2rem;
  font-family: TheSans, sans-serif;
`;

const CardSubHeader = styled.header`
  margin: 0rem 1rem 0rem 0rem;
  padding: 0rem 2rem 2rem 2rem;
  color: #F26849;
  font-size: 1.5rem;
  font-family: TheSans, sans-serif;
`;

const ImageWrapper = styled.div`
  
  height: 240px;
  width: 100%;
`;

const CardBody = styled.div`
  padding: 0px 32px 32px 32px;
  color: white;
`;

const StyledLink = styled.a`
  padding: 32px 32px 0px 32px;
  color: #F26849;
  font-size: 1.4em;
  font-family: TheSans, sans-serif;
`;

const Card = (props) => {
  return (
    <StyledCard
      whileHover={{
        position: "relative",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1,
        scale: 1.1,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <ImageWrapper><Image src={props.image} alt="city" objectFit="cover" width="400" height="240"/></ImageWrapper>
      <CardHeader>{props.header}</CardHeader>
      <CardSubHeader>{props.subheader}</CardSubHeader>
      <CardBody>{props.body}</CardBody>
      <StyledLink>VISIT THIS PLACE</StyledLink>
    </StyledCard>
  );
};

export default Card;
