import React from "react";

import styled from "styled-components";
import Typist from "react-typist";
import media from "../utils/style";

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 17px;
  margin: 0 auto;
  font-size: 70px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: "Raleway";
  strong {
    font-weight: 800;
  }

  ${media.xs`
    font-size:28px;
    line-height: 44px;
    letter-spacing: 8px;
  `}
`;

const HeroText = (props) => {
  const { text } = props;
  if (text) {
    return (
      <StyledTypist cursor={{ show: false }}>
        <strong>{text.split(" ").slice(0, 1)}</strong>
        <br />
        {text.split(" ").slice(1).join(" ")}
      </StyledTypist>
    );
  }
  return (
    <StyledTypist cursor={{ show: false }}>
      <strong key={1}>Vous cherchez,</strong>
      <Typist.Backspace count={0} delay={1} />
      <span key={2}> du bois de chauffage de qualité ?</span>
      <Typist.Backspace count={35} delay={15} />
      <span key={3}> des professionnels rapides et efficaces ?</span>
      <Typist.Backspace count={40} delay={2000} />
      <span key={4}> dans les environs des mauges ?</span>
      <Typist.Delay ms={300} />
      <span key={5}>.</span>
      <Typist.Delay ms={600} />
      <span key={6}>.</span>
      <Typist.Delay ms={900} />
      <span key={7}>.</span>
      <Typist.Delay ms={200} />
      <Typist.Backspace count={60} delay={500} />
      <strong key={8}> Ne cherchez plus,</strong>
      <Typist.Delay ms={1500} /> Nous sommes là
    </StyledTypist>
  );
};

export default HeroText;
