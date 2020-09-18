import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SocialButton = styled.button`
  background: none !important;
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

export const ButtonStyle = styled.button`
  text-align: center;
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  height: 55px;
  text-align: center;
  border: none;
  margin: 20px auto;

  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  background-image: linear-gradient(
    to right,
    #36dbc1,
    #10a06e,
    #1df6c9,
    #10a06e
  );

  &:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 4px 14px 0 rgba(16, 160, 110, 0.75);
  }

  &:focus {
    outline: none;
  }
`;

const LinkButton = ({ children, urlLink }) => (
  <Link to={`/${urlLink}`}>
    <ButtonStyle>{children}</ButtonStyle>
  </Link>
);

export default LinkButton;
