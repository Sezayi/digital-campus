import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "../components/card";
import RobotTwo from "../components/RobotTwo";

const StyledContainer = styled(motion.div)`
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CharacterContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

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
          <h1>Choose your character</h1>
        </Link>
      </StyledContainer>
      <CharacterContainer>
        <Card
          header="Monetizer"
          image={<RobotTwo />}
          body="A monetizer is someone that likes, broadly speaking, the process of converting something into money."
        />
        <Card
          header="Socialite"
          image={<RobotTwo />}
          body="A socialite generally spends a significant amount of time attending various fashionable social gatherings."
        />
        <Card
          header="Observer"
          image={<RobotTwo />}
          body="An observer is one who engages in observation or in watching an experiment."
        />
      </CharacterContainer>
    </>
  );
}

export default Choose;
