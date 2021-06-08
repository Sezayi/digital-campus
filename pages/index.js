import Head from "next/head";
import Button from "../components/button";
import styled from "styled-components";
import Logo from "../components/logo";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const StyledBackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 64px;
  top: 64px;
  z-index: 1000;
`;

const StyledTitle = styled.h1`
  color: #ffffff;
  font-size: 6rem;
  margin: 0rem 0rem 3rem 0rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const StyledSub = styled.h2`
  color: #ffffff;
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const StyledMainContainter = styled.div`
  margin-bottom: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
          color: 0x2aa18d,
          backgroundColor: 0x222222,
          backgroundAlpha: 0.4,
          maxDistance: 28.0,
          spacing: 20.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <StyledBackgroundContainer>
        <Image
          src="/images/wereld.jpg"
          alt="city background"
          layout="fill"
          objectFit="cover"
        />
      </StyledBackgroundContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <StyledContainer ref={vantaRef}>
        <StyledMainContainter>
          <Head>
            <title>Royal Haskoning University Campus</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <TitleWrapper>
            <StyledSub>Welcome to</StyledSub>
            <StyledTitle>Summer University Campus</StyledTitle>
          </TitleWrapper>
          <Link href="/intro">
            <StartWrapper>
              <Button title="Start exploring" />
            </StartWrapper>
          </Link>
        </StyledMainContainter>
      </StyledContainer>
    </>
  );
}
