import Head from "next/head";
// import RobotOne from "../public/images/robotone.svg";
import Logo from "../components/logo";
import Button from "../components/button";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StartWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  return (
    <>
      <StyledContainer>
        <Head>
          <title>explorers guide to Ethereum</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <motion.div
          drag
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
        >
          <Logo />
        </motion.div>
        <TitleWrapper>
          <h1>The explorers guide to Ethereum </h1>
        </TitleWrapper>
        <StartWrapper>
          <Button href="" target="" title="Start your journey" />
          {/* <img height="300px" src={RobotOne} /> */}
        </StartWrapper>
      </StyledContainer>
    </>
  );
}
