import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';

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

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh; // or whatever

   // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
  }
`;

const Hero = (props) => {
  const { children, fluid } = props;
  return (
    <Container>
      <BgImage fluid={fluid} />
      <Overlay>{children}</Overlay>
    </Container>
  );
};

export default Hero;
