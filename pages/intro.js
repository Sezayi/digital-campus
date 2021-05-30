import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Linebreaker,
  WindupChildren,
  useWindupString,
  Pace,
  Pause,
  CharWrapper,
} from "windups";
import ButtonSecondary from "../components/buttonSecondary";

const StyledContainerMain = styled(motion.div)`
  margin: auto;
  width: 60%;
  padding: 10px;
`;

const StyledContainer = styled(motion.div)`
  margin: 0;
  position: absolute;
  top: 45%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const StyledText = styled.h3`
  font-size: 2.4rem;
  line-height: 1.4em;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.2em;
  }
`;

const StyledTextTwo = styled.h3`
  font-size: 2.4rem;
  line-height: 1.4em;
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.2em;
  }
`;

const ButtonWrapper = styled.div`
position: fixed;
bottom: 10%;
right: 10%;

`;

function Intro() {
  return (
    <>
      <StyledContainerMain>
        <StyledContainer>
          <Linebreaker width={310}>
            <WindupChildren>
              <div>
                <StyledText>
                  <Pace ms={50}>
                    {
                      "Become part of our movement enabling you to make change happen in your career, your organization and, above all, your life."
                    }
                  </Pace>
                  <Pause ms={1000} />
                </StyledText>
              </div>

              <StyledTextTwo>
                <Pace ms={80}>
                  <div>{"Welcome to.."}</div>
                  <Pause ms={1500} />
                  <span
                    style={{
                      color: "#0086a8",
                      marginTop: "3rem",
                      fontSize: "3rem",
                    }}
                  >
                    {"HYPER ISLAND"}
                  </span>
                </Pace>
              </StyledTextTwo>
            </WindupChildren>
          </Linebreaker>
        </StyledContainer>
      </StyledContainerMain>
      <ButtonWrapper>
      <ButtonSecondary title="START NOW" />
      </ButtonWrapper>
    </>
  );
}

export default Intro;
