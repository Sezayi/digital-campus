import styled from "styled-components";

const StyledButton = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 1rem 0;
  margin: 0.5rem 1rem;
  width: 16rem;
  height: 5rem;
  background: transparent;
  color: #222222;
  border: 3px solid #222222;
  text-align: center;
  font-size: 1.6rem;

  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
    transition: 0.3s;
  }
`;

const Button = (props) => {
  return (
    <StyledButton
      href={props.href}
      target={props.target}
      rel={props.rel}
      primary
    >
     {props.title}
    </StyledButton>
  );
};

export default Button;
