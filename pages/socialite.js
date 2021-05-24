import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";
import useDimensions from "../utils/usedimensions";
import MenuToggle from "../components/MenuToggle";
import Navigation from "../components/Navigation";
import RobotSocialite from "../components/RobotSocialite";
import ReadingProgress from "../utils/readingprogress";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
  width: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: visible;
  width: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 960px;
  margin: auto;
  padding: 0px 16px;
`;

const StyledTitle = styled.h2`
  color: #fff;
`;

const StyledBodyText = styled.p`
  color: #fff;
  font-size: 1.2em;
  line-height: 1.6;
`;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function monetizer() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const target = React.createRef();

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation
          title="Choose Explorer"
          character="Socialite"
          link="/choose"
          title1="Proof of Humanity"
          link1="#blockchain"
          title2="NFT"
          link2="#smart"
        />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <ReadingProgress target={target}/>
      <div ref={target}>
      <StyledContainer>
        <h1>Socialite starter</h1>
        <RobotSocialite />
      </StyledContainer>
      <StyledContentContainer >
        <StyledTitle id="blockchain">Proof of Humanity</StyledTitle>
        <StyledBodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          architecto quisquam hic laudantium nesciunt nihil, deleniti ipsum
          culpa odit sequi cupiditate. Eaque dignissimos dolorum saepe dolor
          labore fugit ratione, atque numquam beatae voluptate, esse a amet
          explicabo sit voluptates quia optio odio veniam iure facere cumque
          tempore molestiae at ea! Suscipit illo placeat minima iure vero.
          Dignissimos odio enim iste necessitatibus quos aliquam. Obcaecati
          numquam enim optio nemo qui, eos quisquam culpa eligendi aspernatur
          incidunt totam necessitatibus et officia iste!
        </StyledBodyText>
        <StyledBodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          architecto quisquam hic laudantium nesciunt nihil, deleniti ipsum
          culpa odit sequi cupiditate. Eaque dignissimos dolorum saepe dolor
          labore fugit ratione, atque numquam beatae voluptate, esse a amet
          explicabo sit voluptates quia optio odio veniam iure facere cumque
          tempore molestiae at ea! Suscipit illo placeat minima iure vero.
          Dignissimos odio enim iste necessitatibus quos aliquam. Obcaecati
          numquam enim optio nemo qui, eos quisquam culpa eligendi aspernatur
          incidunt totam necessitatibus et officia iste!
        </StyledBodyText>
        <StyledBodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          architecto quisquam hic laudantium nesciunt nihil, deleniti ipsum
          culpa odit sequi cupiditate. Eaque dignissimos dolorum saepe dolor
          labore fugit ratione, atque numquam beatae voluptate, esse a amet
          explicabo sit voluptates quia optio odio veniam iure facere cumque
          tempore molestiae at ea! Suscipit illo placeat minima iure vero.
          Dignissimos odio enim iste necessitatibus quos aliquam. Obcaecati
          numquam enim optio nemo qui, eos quisquam culpa eligendi aspernatur
          incidunt totam necessitatibus et officia iste!
        </StyledBodyText>
        <StyledTitle id="smart">NFT</StyledTitle>
        <StyledBodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          architecto quisquam hic laudantium nesciunt nihil, deleniti ipsum
          culpa odit sequi cupiditate. Eaque dignissimos dolorum saepe dolor
          labore fugit ratione, atque numquam beatae voluptate, esse a amet
          explicabo sit voluptates quia optio odio veniam iure facere cumque
          tempore molestiae at ea! Suscipit illo placeat minima iure vero.
          Dignissimos odio enim iste necessitatibus quos aliquam. Obcaecati
          numquam enim optio nemo qui, eos quisquam culpa eligendi aspernatur
          incidunt totam necessitatibus et officia iste!
        </StyledBodyText>
      </StyledContentContainer>
      </div>
    </>
  );
}
