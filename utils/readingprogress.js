import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ReadingBar = styled.div`
    position: fixed;
    height: 5px;
    top: 0;
    background-color: #B94F11;
`

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight = element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <ReadingBar style={{ width: `${readingProgress}%` }} />
  );
};

export default ReadingProgress