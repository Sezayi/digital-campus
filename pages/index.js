import Head from "next/head";
// import explorebg from "../public/images/explorebg.svg";
import Logo from "../components/logo";
import Button from "../components/button";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";


// const BackgroundContainer = styled.div`
//   width: 100%;
//   height: 100vh;
//   position: absolute;
//   z-index: -1;
//   overflow: hidden;
// `;

const StyledTitle = styled.h1`
color: #ffffff;
margin-top: 1rem
font-size: 5rem;
@media (max-width: 768px) {
  font-size: 3rem;
}`

const StyledContainer = styled.div`
  height: 75vh;
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

const DragContainer = styled(motion.div)`
  margin-top: 3rem;
`
export default function Home() {
  return (
    <>
      <StyledContainer>
        <Head>
          <title>explorers guide to Ethereum</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <DragContainer
          drag
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
        >
          <Logo />
        </DragContainer>
        <TitleWrapper>
          <StyledTitle>The explorers guide to Ethereum </StyledTitle>
        </TitleWrapper>
        <Link href="/choose">
          <StartWrapper>
            <Button title="Start your journey" />
            {/* <img height="300px" src={RobotOne} /> */}
          </StartWrapper>
        </Link>
      </StyledContainer>
      {/* <BackgroundContainer>
        <img src={explorebg} alt="bgimage" />
      </BackgroundContainer> */}
    </>
  );
}
