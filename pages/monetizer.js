import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  overflow: visible;
  width: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

export default function monetizer() {
  return (
    <StyledContainer>
      <h1>Monetizer starter</h1>
    </StyledContainer>
  );
}
