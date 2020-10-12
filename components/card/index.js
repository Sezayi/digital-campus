import styled from "styled-components";
import { motion } from "framer-motion";


const StyledCard = styled(motion.div)`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 1rem;
  width: 300px;
  height: 460px;
  background-color: #4e4e4e;
  box-shadow: rgba(245, 245, 245, 0.07) 0px 14px 66px, rgba(245, 245, 245, 0.03) 0px 10px 17px, rgba(245, 245, 245, 0.05) 0px 4px 7px
  border-radius: 8px;
`;

const CardHeader = styled.header`
  padding: 1rem 2rem 1rem 2rem;
  color: white;
  font-size: 1.6rem;
`;

const ImageWrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

const CardBody = styled.div`
  padding: 0px 32px 16px 32px;
  color: white;
`;

const StyledLink = styled.a`
  padding: 32px 32px 0px 32px;
  color: #f35b04;
`;


const Card = (props) => {
  return (
    <StyledCard whileHover={{
      position: 'relative',
      background: 'grey',
      zIndex: 1,
      scale: 1.2,
      transition: {
        duration: .2
      }
    }}>
      <ImageWrapper>{props.image}</ImageWrapper>
      <CardHeader>{props.header}</CardHeader>
         <CardBody>{props.body}</CardBody>
         <StyledLink>START EXPLORING</StyledLink>
    </StyledCard>

  );
};

export default Card;
