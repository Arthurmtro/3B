import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import ButtonLink from './ButtonLink';

import Name from './Name';

import media from '../utils/style';

const Base = styled.div`
  color: white;
  max-height: 72px;
  line-height: 62px;
  width: 100vw;
  z-index: 10000;
  background: linear-gradient(#302921 50%, #00000000);
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

const MenuItem = styled(ButtonLink)`
  font-family: 'Raleway';
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
  const { noMenu } = props;
  return (
    <Base>
      <Flex>
        {!noMenu ? (
          <MenuBox>
            <ul>
              <li>
                <MenuItem>
                  <a href="tarifs" style={{ color: 'white' }}>
                    Tarifs
                  </a>
                </MenuItem>
              </li>
            </ul>
          </MenuBox>
        ) : (
          <></>
        )}
        <NameBox pt={2}>
          <Name />
        </NameBox>
        {!noMenu ? (
          <MenuBox>
            <ul>
              <li>
                <MenuItem>
                  <a href="galerie" style={{ color: 'white' }}>
                    Galerie
                  </a>
                </MenuItem>
              </li>
            </ul>
          </MenuBox>
        ) : (
          <></>
        )}
      </Flex>
    </Base>
  );
}
export default NavBar;
