import React from "react";
import styled from "styled-components";
import { Flex, Box } from "@rebass/grid";
//import { Link } from "react-router-dom";

import { SocialButton } from "./LinkButton";
import Name from "./Name";
import media from "../utils/style";

const Base = styled.div`
  color: white;
  max-height: 72px;
  line-height: 62px;
  width: 100vw;
  z-index: 10000;
  background: linear-gradient(#0e0a07 50%, #00000000);
  position: fixed;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }
  display: flex;
  justify-content: space-evenly;
`;

const MenuBox = styled(Box)`
  ${media.xs`
    display: none;
  `}
`;

const NameBox = styled(Box)`
  ${media.xs`
    text-align:center;
  `}
`;

const MenuItem = styled(SocialButton)`
  font-family: "Raleway";
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  height: 62px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  ${media.sm`
     margin-right: 15px;
   `}
`;

function NavBar(props) {
  return (
    <Base>
      <Flex>
        <MenuBox>
          <ul>
            <li>
              <MenuItem href="#tarifs" style={{ color: "white" }}>
                Tarifs
              </MenuItem>
            </li>
          </ul>
        </MenuBox>
        <NameBox pt={2}>
          <Name />
        </NameBox>
        {/* 
        <MenuBox>
          <ul>
            <li>
              <MenuItem>
                <Link to="/galerie" style={{ color: "white" }}>
                  Galerie
                </Link>
              </MenuItem>
            </li>
            <li>
              <MenuItem>
                <Link to="/tp" style={{ color: "white" }}>
                  tp
                </Link>
              </MenuItem>
          </ul>
        </MenuBox>
            </li>*/}
      </Flex>
    </Base>
  );
}
export default NavBar;
