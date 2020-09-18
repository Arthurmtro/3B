import React from "react";
import styled from "styled-components";

import media from "../utils/style";

import { TARIFS_DATA } from "../data/tarifs.js";

const TarifsSection = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  border: 1px solid #898989;
  margin: 0 auto;
  width: 70%;
  ${media.xs`
    width: 92%;
  `}
`;

const TarifsContainer = styled.div`
  display: block;
  border: 1px solid #898989;
  min-width: 25%;
`;

const Title = styled.p`
  font-weight: bolder;
  font-size: larger;
  margin: 0;
  padding: 35px;
  ${media.xs`
    font-size: smaller;
    padding: 20px 0px;
  `}
`;

const Price = styled.p`
  border-top: 1px solid #898989;
  border-bottom: 1px solid #898989;
  padding: 25px 0;
  margin: 0;
  ${media.xs`
    font-size: smaller;
    padding: 15px;
  `}
`;

const Tarifs = () => {
  return (
    <>
      <TarifsSection>
        {TARIFS_DATA.map(({ title, details }) => (
          <TarifsContainer key={title}>
            <Title>{title}</Title>
            {details.map((price) => (
              <Price>{price}</Price>
            ))}
          </TarifsContainer>
        ))}
      </TarifsSection>
      <p style={{ fontSize: "smaller", marginTop: "10px" }}>
        *Tarifs TTC sur place, hors frais de livraison
      </p>
    </>
  );
};

export default Tarifs;
