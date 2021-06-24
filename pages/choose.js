import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "../components/card";
import Image from "next/image";


//IMAGES



const StyledContainerWrapper = styled.div`
  height: 100vh;
  background-color: #000;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const StyledContainer = styled(motion.div)`
  height: 320x;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 768px) {
    height: 120px;
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
          <StyledPagetitle>Choose your location</StyledPagetitle>
        </Link>
      </StyledContainer>
      <CharacterContainer>
        <Link href="/">
          <StyledA >
            <Card
              header="Signapore"
              subheader="Singapore"
              image={"/images/RHDHV_Singapore_1.jpeg"}
              body="An observer is one who engages in observation, follows events closely and comments publicly on them. An observer is one who engages in observation, follows events closely and comments publicly on them."
            />
          </StyledA >
        </Link>
        <Link href="/">
          <StyledA >
            <Card
              header="Rotterdam"
              subheader="Netherlands"
              image={"/images/RHDHV_Rotterdam.jpeg"}
              body="An observer is one who engages in observation, follows events closely and comments publicly on them. An observer is one who engages in observation, follows events closely and comments publicly on them."
            />
          </StyledA >
        </Link>
        <Link href="/">
          <StyledA >
            <Card
              header="Rotterdam"
              subheader="Netherlands"
              image={"/images/RHDHV_Rotterdam_2.jpeg"}
              body="An observer is one who engages in observation, follows events closely and comments publicly on them. An observer is one who engages in observation, follows events closely and comments publicly on them."
            />
          </StyledA >
        </Link>
        <Link href="/">
          <StyledA >
            <Card
              header="Paris"
              subheader="France"
              image={"/images/RHDHV_Paris.jpeg"}
              body="An observer is one who engages in observation, follows events closely and comments publicly on them. An observer is one who engages in observation, follows events closely and comments publicly on them."
            />
          </StyledA >
        </Link>
        <Link href="/">
          <StyledA >
            <Card
              header="Nijmegen"
              subheader="Netherlands"
              image={"/images/RHDHV_Nijmegen.jpeg"}
              body="An observer is one who engages in observation, follows events closely and comments publicly on them. An observer is one who engages in observation, follows events closely and comments publicly on them."
            />
          </StyledA >
        </Link>
        <Link href="/">
          <StyledA >
            <Card
              header="London"
              subheader="England"
              image={"/images/RHDHV_London.jpeg"}
              body="An observer is one who engages in observation, follows events closely and comments publicly on them. An observer is one who engages in observation, follows events closely and comments publicly on them."
            />
          </StyledA >
        </Link>
        <Link href="/">
          <StyledA >
            <Card
              header="Amersfoort"
              subheader="Headquarters"
              image={"/images/RHDHV_HQ_Amersfoort.jpeg"}
              body="An observer is one who engages in observation, follows events closely and comments publicly on them. An observer is one who engages in observation, follows events closely and comments publicly on them."
            />
          </StyledA >
        </Link>
        <Link href="/">
          <StyledA >
            <Card
              header="Houston"
              subheader="United States"
              image={"/images/RHDHV_Houston_2.jpeg"}
              body="An observer is one who engages in observation, follows events closely and comments publicly on them. An observer is one who engages in observation, follows events closely and comments publicly on them."
            />
          </StyledA >
        </Link>
        <Link href="/">
          <StyledA >
            <Card
              header="Henley in Arden"
              subheader="England"
              image={"/images/RHDHV_Henley-on-Thames at sunset.png"}
              body="An observer is one who engages in observation, follows events closely and comments publicly on them. An observer is one who engages in observation, follows events closely and comments publicly on them."
            />
          </StyledA >
        </Link>
        <Link href="/">
          <StyledA >
            <Card
              header="Brighton"
              subheader="England"
              image={"/images/RHDHV_Brighton.png"}
              body="An observer is one who engages in observation, follows events closely and comments publicly on them. An observer is one who engages in observation, follows events closely and comments publicly on them."
            />
          </StyledA >
        </Link>
        <Link href="/">
          <StyledA >
            <Card
              header="Amsterdam"
              subheader="Netherlands"
              image={"/images/RHDHV_Amsterdam.jpeg"}
              body="An observer is one who engages in observation, follows events closely and comments publicly on them. An observer is one who engages in observation, follows events closely and comments publicly on them."
            />
          </StyledA >
        </Link>
      </CharacterContainer>
      </StyledContainerWrapper>
  
    </>
  );
}

export default Choose;
