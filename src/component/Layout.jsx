import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styledNormalize from "styled-normalize";

import Navbar from "./Navbar";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${styledNormalize}

  html {
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  body, input, select, textarea {
    font-size: 14pt;
    line-height: 1.5;
    font-family: 'Open Sans';
  }

  p {
    margin-bottom: 64px;
    color: #666;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.3em;
    color: #292929;
  }

  .info {
  }

`;

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  img {
    margin-bottom: 0;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100vw;
  text-align: center;
  color: #fff;
  background-color: #000;
  img {
    margin-bottom: 0;
  }
`;

const FooterText = styled.a`
  font-size: 0.7em;
  padding: 2em;
  color: #c6844c;
`;

const Layout = ({ children }) => (
  <Body>
    <GlobalStyle />
    <Navbar />
    {children}
    <Footer>
      <FooterText
        href="https://github.com/arthurmtro"
        target="_blank"
        rel="noopener noreferrer"
      >
        © {new Date().getFullYear()} - Sîte développé par{" "}
        <strong> Arthur Monteiro </strong>, tout simplement
      </FooterText>
    </Footer>
  </Body>
);

export default Layout;
