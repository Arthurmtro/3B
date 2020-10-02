import React from "react";

import styled from "styled-components";
import Pattern from "../assets/pattern.gif";

const Base = styled.a`
  font-size: 20pt;
  font-family: "Pacifico", cursive;
  color: #f2edb7;
  width: 100%;
  margin: 7rem;
  white-space: nowrap;
  transition-property: transform;
  transition-duration: 0.8s;
  &:hover {
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: url(${Pattern});
    -webkit-transform: rotate(354deg);
  }
`;

function Name() {
  return <Base href="/">Bigeard, Bois et Buches</Base>;
}

export default Name;
