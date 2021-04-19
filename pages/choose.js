import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "../components/card";
import RobotMonetizer from "../components/RobotMonetizer";
import RobotSocialite from "../components/RobotSocialite";
import RobotObserver from "../components/RobotObserver";

//IMAGES
// import explorebg from "../public/images/explorebg.svg";

// const BackgroundContainer = styled.div`
//   width: 100%;
//   height: 100vh;
//   z-index: -1;
//   background-size: cover;
//   background-image: url(${explorebg})
// `;

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
          <StyledPagetitle>Choose your explorer</StyledPagetitle>
        </Link>
      </StyledContainer>
      <CharacterContainer>
        <Link href="/monetizer">
          <StyledA >
            <Card
              header="Monetizer"
              image={<RobotMonetizer />}
              body="A monetizer is someone that likes, broadly speaking, the process of converting something into money."
            />
          </StyledA >
        </Link>
        <Link href="/monetizer">
          <StyledA >
            <Card
              header="Socialite"
              image={<RobotSocialite />}
              body="A socialite generally spends a significant amount of time attending various fashionable social gatherings."
            />
          </StyledA >
        </Link>
        <Link href="/monetizer">
          <StyledA >
            <Card
              header="Observer"
              image={<RobotObserver />}
              body="An observer is one who engages in observation or in watching an experiment."
            />
          </StyledA >
        </Link>
      </CharacterContainer>
    </>
  );
}

export default Choose;
