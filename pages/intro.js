import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { WindupChildren, Pace, Pause } from "windups";
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
  width: 960px;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  @media (max-width: 768px) {
    margin: 0;
    position: absolute;
    top: 45%;
    overflow: hidden;
  }
`;

const StyledText = styled.h3`
  font-size: 2.4rem;
  line-height: 1.4em;
  margin-bottom: 1rem;
  text-shadow: 1px 1px #000000;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.4em;
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
`;

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

function Intro() {
  const size = useWindowSize();
  return (
    <>
      <StyledBackgroundContainer>
        <Image
          src="/images/RHDHV-background.png"
          alt="city background"
          layout="fill"
          objectFit="cover"
        />
      </StyledBackgroundContainer>
      <StyledContainerMain>
        <StyledContainer>
        
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
              </div>
            </WindupChildren>
     
        </StyledContainer>
      </StyledContainerMain>
      <Link href="/choose">
        <ButtonWrapper>
          <ButtonSecondary title="Visit Summer University Campus" />
        </ButtonWrapper>
      </Link>
    </>
  );
}

export default Intro;
