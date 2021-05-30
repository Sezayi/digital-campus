import Head from "next/head";
import Button from "../components/button";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

//IMAGES
import explorebg from "../public/images/explorebg.svg";

const StyledBackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;
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
  justify-content: center;
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
          color: 0x0086a8,
          backgroundColor: 0x222222,
          backgroundAlpha: 0.4,
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
      <StyledBackgroundContainer>
        <Image
          src="/images/wereld.jpg"
          alt="city background"
          layout="fill"
          objectFit="cover"
        />
      </StyledBackgroundContainer>
      <StyledContainer ref={vantaRef}>
        <StyledmMainContainter>
          <Head>
            <title>ROYAL HASKONING DIGITAL CAMPUS</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Image
            src="/images/rhlogo.png"
            alt="Royal Haskoning DHV logo"
            width={292}
            height={270}
          />

          <TitleWrapper>
            <StyledTitle>ROYAL HASKONING DIGITAL CAMPUS</StyledTitle>
          </TitleWrapper>
          <Link href="/intro">
            <StartWrapper>
              <Button title="START HERE" />
            </StartWrapper>
          </Link>
        </StyledmMainContainter>
      </StyledContainer>
    </>
  );
}
