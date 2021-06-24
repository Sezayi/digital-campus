import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const StyledCard = styled(motion.div)`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 1rem;
  max-width: 400px;
  height: 640px;
  background-image: linear-gradient(to bottom right, #1B747B 0%, #123D5C  60%, #123D5C  100%);
  border-radius: 4px;
  -moz-box-shadow: 4px 6px 0px 6px #123D5C;
  -webkit-box-shadow: 4px 6px 0px 6px #123D5C;
  box-shadow: 4px 6px 0px 4px #013153;
`;

const CardHeader = styled.header`
  margin: 1rem 1rem 0rem 0rem;
  padding: 1rem 2rem 0rem 2rem;
  color: white;
  font-size: 2rem;
  font-family: TheSans, sans-serif;
  @media (max-width: 768px) {
    margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 2rem 0rem 2rem;
  }
`;

const CardSubHeader = styled.header`
  margin: 0rem 1rem 0rem 0rem;
  padding: 0rem 2rem 2rem 2rem;
  color: #f26849;
  font-size: 1.5rem;
  font-family: TheSans, sans-serif;
`;

const ImageWrapper = styled.div`
  height: 240px;
  width: 100%;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all .2s ease-in-out;
  }
`;

const CardBody = styled.div`
  padding: 0px 32px 32px 32px;
  color: white;
`;

const StyledLink = styled.a`
  font-family: Oswald, sans-serif;
  display: inline-block;
  padding: 1rem 2.4rem 1rem 2.4rem;
  letter-spacing: 0.1em;
  margin: 0.5rem 1rem;
  color: #F26849;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  background-color: #FFFFFF;
  border-radius: 0.25rem;
  &:hover {
    color: #FFFFFF;
    background-color: #F26849;
    transition: all .2s ease-in-out;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
          alt="city"
          objectFit="cover"
          width="400"
          height="240"
          placeholder="blur"
        />
      </ImageWrapper>
      <ContentWrapper>
        <CardHeader>{props.header}</CardHeader>
        <CardSubHeader>{props.subheader}</CardSubHeader>
        <CardBody>{props.body}</CardBody>
        <StyledLink>VISIT THIS PLACE</StyledLink>
      </ContentWrapper>
    </StyledCard>
  );
};

export default Card;
