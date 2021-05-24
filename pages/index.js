import Head from "next/head";
import Logo from "../components/logo";
import Button from "../components/button";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

//IMAGES
import explorebg from "../public/images/explorebg.svg";

const StyledTitle = styled.h1`
color: #ffffff;
margin-top: 1rem
font-size: 5rem;
@media (max-width: 768px) {
  font-size: 3rem;
}`;

const StyledmMainContainter = styled.div`
margin-bottom: 4em;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`

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

const DragContainer = styled(motion.div)`
  margin-top: 3rem;
`;


export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x81A7F8,
          backgroundColor: 0x222222,
          maxDistance: 24.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      
        <StyledContainer ref={vantaRef}>
          <StyledmMainContainter>
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
          </StyledmMainContainter>
        </StyledContainer>
    </>
  );
}
