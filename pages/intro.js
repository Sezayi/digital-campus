import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Linebreaker, WindupChildren, Pace, Pause } from "windups";
import ButtonSecondary from "../components/buttonSecondary";
import Image from "next/image";

const StyledBackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

const StyledContainerMain = styled(motion.div)`
  margin: auto;
  width: 50%;
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
  margin-bottom: 1rem;
  text-shadow: 1px 1px #000000;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 2em;
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
`;

const StyledLinkWrapper = styled.div`
  margin-top: 2em;
`;



const StyledLink = styled.a`
  color: #ffffff;
  font-size: 2rem;
  line-height: 1em;
  text-decoration: none;
  text-shadow: none;
  padding: 1rem 2rem 1rem 2rem;
  border: 1px solid white;
  &:hover {
    color: #ffffff;
    background: #F26849 ;
    transition: all 0.4s ease 0s;
    padding: 1rem 2rem 1rem 2rem;
    border: 1px solid #F26849;
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
                    {
                      "It's time to rethink the spaces we live, work and thrive in. From changing business landscapes to climate challenges. We are all operating in uncertain environments"
                    }
                  </Pace>
                  <Pause ms={1000} />
                </StyledText>
                <StyledText>
                  <Pace ms={50}>
                    {
                      "That's why this summer we launch our University Campus. An online learning experience to shape the environments of tomorrow together."
                    }
                  </Pace>
                </StyledText>
                <StyledText>
                  <Pace ms={80}>
                    <Pause ms={1500} />
                    <StyledLinkWrapper>
                      <StyledLink
                        href="/choose"
                      >
                        {"Visit Summer University Campus"}
                      </StyledLink>
                      </StyledLinkWrapper>
                  </Pace>
                </StyledText>
              </div>
            </WindupChildren>
          </Linebreaker>
        </StyledContainer>
      </StyledContainerMain>
      <Link href="/choose">
        <ButtonWrapper>
          <ButtonSecondary title="Skip" />
        </ButtonWrapper>
      </Link>
    </>
  );
}

export default Intro;
