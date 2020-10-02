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

class Galerie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    const { windowWidth } = this.state;
    let carouselSlidesToShow;
    if (windowWidth > 991) {
      carouselSlidesToShow = 3;
    } else {
      carouselSlidesToShow = 2;
    }

    return (
      //<div>Current window width: {windowWidth}</div>;<h2>Galerie</h2>
      <>
        <Carousel
          center
          infinite
          showArrows
          showIndicator
          slidesToShow={carouselSlidesToShow}
        >
          {GALERIE_DATA.filter((el) => el.id < this.props.maxImages).map(
            ({ id, title, url }) => (
              <ImageContainer key={id}>
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
  }
}

export default Galerie;
