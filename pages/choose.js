import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "../components/card";
import Image from "next/image";
import Button from "../components/button";

const StyledBackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

const StyledContainerWrapper = styled.div`
  height: 100vh;
  z-index: 1;
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
  font-size: 3rem;
  z-index: 1000;
  @media (max-width: 768px) {
    font-size: 2rem;
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
  z-index: 1000;
  text-decoration: none;
  cursor: pointer;
`;

const StartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  z-index: 9999;
`;

function Choose() {
  return (
    <>
      <StyledBackgroundContainer>
        <Image
          src="/images/choose-bg.png"
          alt="city background"
          layout="fill"
          objectFit="cover"
        />
      </StyledBackgroundContainer>
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
          <StyledPagetitle>Choose your location</StyledPagetitle>
        </StyledContainer>
        <CharacterContainer>
          <Link href="https://miro.com/app/board/o9J_l802jG8=/" passHref={true}>
            <StyledA>
              <Card
                header="Henley in Arden"
                subheader="England"
                image={"/images/RHDHV_Henley-on-Thames at sunset.png"}
              />
            </StyledA>
          </Link>
          <Link href="https://miro.com/app/board/o9J_l80zZSg=/" passHref={true}>
            <StyledA>
              <Card
                header="Brighton"
                subheader="England"
                image={"/images/RHDHV_Brighton.png"}
              />
            </StyledA>
          </Link>
          <Link href="https://miro.com/app/board/o9J_l80xX9I=/" passHref={true}>
            <StyledA>
              <Card
                header="Rotterdam"
                subheader="Netherlands"
                image={"/images/RHDHV_Rotterdam.jpeg"}
              />
            </StyledA>
          </Link>
          <Link href="https://miro.com/app/board/o9J_l80qWEk=/" passHref={true}>
            <StyledA>
              <Card
                header="Amsterdam"
                subheader="Netherlands"
                image={"/images/RHDHV_Amsterdam.jpeg"}
              />
            </StyledA>
          </Link>
          <Link href="https://miro.com/app/board/o9J_l80xxig=/" passHref={true}>
            <StyledA>
              <Card
                header="Amersfoort"
                subheader="Headquarters"
                image={"/images/RHDHV_HQ_Amersfoort.jpeg"}
              />
            </StyledA>
          </Link>
          <Link href="https://miro.com/app/board/o9J_l80-bJg=/" passHref={true}>
            <StyledA>
              <Card
                header="Singapore"
                subheader="Singapore"
                image={"/images/RHDHV_Singapore_1.jpeg"}
              />
            </StyledA>
          </Link>
          <Link href="https://miro.com/app/board/o9J_l808WfQ=/" passHref={true}>
            <StyledA>
              <Card
                header="Paris"
                subheader="France"
                image={"/images/RHDHV_Paris.jpeg"}
              />
            </StyledA>
          </Link>
          <Link href="https://miro.com/app/board/o9J_l809jbQ=/">
            <StyledA>
              <Card
                header="Houston"
                subheader="United States"
                image={"/images/RHDHV_Houston_2.jpeg"}
              />
            </StyledA>
          </Link>
          <Link href="https://miro.com/app/board/o9J_l804j1g=/" passHref={true}>
            <StyledA>
              <Card
                header="Nijmegen"
                subheader="Netherlands"
                image={"/images/RHDHV_Nijmegen.jpeg"}
              />
            </StyledA>
          </Link>
          <Link href="/" passHref={true}>
            <StyledA>
              <Card
                header="Birmingham"
                subheader="England"
                image={"/images/RHDHV_London.jpeg"}
              />
            </StyledA>
          </Link>

          <Link href="/intro">
            <StartWrapper>
              <Button title="VISIT THE SUMMER UNIVERSITY CAMPUS" />
            </StartWrapper>
          </Link>
        </CharacterContainer>
      </StyledContainerWrapper>
    </>
  );
}

export default Choose;
