import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "../components/card";
import Image from "next/image";


//IMAGES



const StyledContainerWrapper = styled.div`
  height: 100vh;
  z-index: 100;
  background-image: linear-gradient(to bottom right, #1B747B 0%, #123D5C  60%, #123D5C  100%);
`;

const StyledContainer = styled(motion.div)`
  height: 320x;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const StyledPagetitle = styled.h1`
  font-size: 5rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;


const CharacterContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledA = styled.a`
text-decoration: none;
cursor: pointer;
`

function Choose() {
  return (
    <>

<StyledContainerWrapper>
      <StyledContainer
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          },
        }}
      >
        <Link href="/">
          <StyledPagetitle>Choose your starting point</StyledPagetitle>
        </Link>
      </StyledContainer>
      <CharacterContainer>
        <Link href="/monetizer">
          <StyledA >
            <Card
              header="VUCA tower"
              image={"/images/citybg.png"}
              body="A monetizer is someone that likes, broadly speaking, the process of converting something into money."
            />
          </StyledA >
        </Link>
        <Link href="/socialite">
          <StyledA >
            <Card
              header="Hardware Harbor"
              image={"/images/citybg.png"}
              body="A socialite generally spends a significant amount of time attending various fashionable social gatherings."
            />
          </StyledA >
        </Link>
        <Link href="/observer">
          <StyledA >
            <Card
              header="A-Island"
              image={"/images/citybg.png"}
              body="An observer is one who engages in observation, follows events closely and comments publicly on them."
            />
          </StyledA >
        </Link>
        <Link href="/observer">
          <StyledA >
            <Card
              header="A-Island"
              image={"/images/citybg.png"}
              body="An observer is one who engages in observation, follows events closely and comments publicly on them."
            />
          </StyledA >
        </Link>
      </CharacterContainer>
      </StyledContainerWrapper>
  
    </>
  );
}

export default Choose;
