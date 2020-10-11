import Head from "next/head";
import RobotOne from "../public/images/robotone.svg";
import Button from "../components/button";
import styled from "styled-components";

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
        <TitleWrapper>
          <h1>The explorers guide to Ethereum </h1>
        </TitleWrapper>
        <StartWrapper>
          <Button href="" target="" title="Start your journey" />
          <img height="300px" src={RobotOne} />
        </StartWrapper>
      </StyledContainer>
    </>
  );
}
