import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const StyledCard = styled(motion.div)`
  padding: 0 0 32px;
  margin: 1rem;
  max-width: 320px;
  height: 240px;
  background-image: linear-gradient(
    to right bottom,
    rgb(18, 61, 92) 0%,
    rgb(18, 61, 92) 60%,
    rgb(27, 116, 123) 100%
  );
  -webkit-box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.5);
`;


const ImageWrapper = styled.div`
  height: 120px;
  width: 100%;
  mix-blend-mode: lighten;
  opacity: 0.9;
`;

const CardHeader = styled.header`
  position: absolute;
  margin: -7rem 1rem 0rem 0rem;
  padding: 0.5rem 1rem 0rem 1rem;
  color: white;
  font-size: 1.5rem;
  font-family: TheSans, sans-serif;
`;

const CardSubHeader = styled.header`
  position: absolute;
  margin: -4.5rem 0rem 0rem 0rem;
  padding: 0rem 1rem 0rem 1rem;
  color: #f26849;
  font-size: 1rem;
  font-family: TheSans, sans-serif;
`;

const StyledLink = styled.a`
  font-family: Oswald, sans-serif;
  display: inline-block;
  padding: 1rem 2.4rem 1rem 2.4rem;
  letter-spacing: 0.1em;
  margin: 3.4rem 1rem;
  color: #f26849;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  background-color: #ffffff;
  &:hover {
    color: #ffffff;
    background-color: #f26849;
    transition: all 0.2s ease-in-out;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const Card = (props) => {
  return (
    
    <StyledCard
      whileHover={{
        position: "relative",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1,
        scale: 1.05,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <ImageWrapper>
        <Image
          src={props.image}
          placeholder="blur"
          quality="50"
          alt="city"
          objectFit="cover"
          width="320"
          height="160"
        />
      </ImageWrapper>
      <CardHeader>{props.header}</CardHeader>
      <CardSubHeader>{props.subheader}</CardSubHeader>
      <ContentWrapper>
        <StyledLink>LET'S SPRINT</StyledLink>
      </ContentWrapper>
    </StyledCard>
  
  );
};

export default Card;
