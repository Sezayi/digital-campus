import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Linebreaker, WindupChildren, Pace, Pause } from "windups";
import Button from "../components/button";
import Image from "next/image";

const StyledBackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

const StyledContainerMain = styled(motion.div)`
  margin: auto;
  width: 60%;
  padding: 10px;
  height: 600px;
  @media (max-width: 768px) {
    margin: auto;
    width: 100vw;
    padding: 8px;
  }
`;

const StyledContainer = styled(motion.div)`
  margin: 0;
  position: absolute;
  top: 45%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  @media (max-width: 768px) {
    margin: 0;
    position: absolute;
    top: 45%;
  }
`;

const StyledText = styled.h3`
  font-size: 2.4rem;
  line-height: 1.4em;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 2em;
  }
`;


const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 10%;
  right: 10%;
`;

function Intro() {
  if (typeof window === "undefined") return null;
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
      <StyledContainerMain>
        <StyledContainer>
          <Linebreaker width={260}>
            <WindupChildren>
              <div>
                {" "}
                <Pause ms={2500} />
                <StyledText>
                  <Pace ms={50}>
                    {"Become part of a movement that makes positive change happen in our organisation today so that we secure a prosperous, peaceful and liveable planet for tomorrow."}
                  </Pace>
                  <Pause ms={1000} />
                </StyledText>
                <StyledText>
                  {"Let's travel to..."}
                </StyledText>
                <StyledText>
                  <Pace ms={80}>
                     <Pause ms={1500} />
                    <div
                      style={{
                        marginTop: "1em",
                      }}
                    >
                      <span
                        style={{
                          color: "#F05F3E",
                          fontSize: "3rem",
                          lineHeight: "1em",
                        }}
                      >
                        {"HYPER ISLAND"}
                      </span>
                    </div>
                  </Pace>
                </StyledText>
              </div>
            </WindupChildren>
          </Linebreaker>
        </StyledContainer>
      </StyledContainerMain>
      <Link href="/choose">
        <ButtonWrapper>
          <Button title="CHOOSE DESTINATION" />
        </ButtonWrapper>
      </Link>
    </>
  );
}

export default Intro;
