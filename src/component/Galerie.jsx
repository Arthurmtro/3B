import React from "react";
import styled from "styled-components";
import Carousel from "styled-components-carousel";

import media from "../utils/style";

import { GALERIE_DATA } from "../data/galerie";
//import LinkButton from "./LinkButton";

/*
const GalerieSection = styled.div`
  width: 85%;
  margin: 18px auto;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 15px;
  height: 100%;
  ${media.xs`
    grid-template-columns: auto auto 0;
    margin-left: 35px;
    margin-bottom: -5px;
  `}
`;
*/

const ImageContainer = styled.div`
  margin: auto;
  overflow: hidden;
  border-radius: 5px;
  height: 180px;
  ${media.xs`
    height: 100%;
  `}
`;

const Image = styled.img`
  width: 100%;
  transition: all 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  &:hover {
    transform: scale(1.4);
  }
  ${media.xs`
  `}
`;

const Galerie = ({ maxImages }) => {
  return (
    <>
      <h2>Galerie</h2>
      <Carousel center infinite showArrows showIndicator slidesToShow={3}>
        {GALERIE_DATA.filter((el) => el.id < maxImages).map(
          ({ title, url }) => (
            <ImageContainer>
              <Image src={url} alt="bug" />
            </ImageContainer>
          )
        )}
      </Carousel>
      {/*
      <LinkButton urlLink={"galerie"}>Voir plus</LinkButton>
        </Route> */}
    </>
  );
};

export default Galerie;
