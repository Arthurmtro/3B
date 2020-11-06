import React from "react";

import styled from "styled-components";
import ImageForest from "../assets/wood.jpg";

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  position: relative;
`;

const Overlay = styled.div`
  width: 80%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BgImage = styled.div`
  width: 100vw;
  height: 100vh; // or whatever
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0,0,0,0.3)),
    url(${ImageForest});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  object-fit: cover !important; // or whatever
  object-position: 0% 0% !important; // or whatever
  font-family: "object-fit: cover !important; object-position: 0% 0% !important;"; // needed for IE9+ polyfill
`;

const Hero = (props) => {
  const { children, fluid, Image } = props;
  return (
    <Container>
      <BgImage fluid={fluid} Image={Image} />
      <Overlay>{children}</Overlay>
    </Container>
  );
};

export default Hero;
