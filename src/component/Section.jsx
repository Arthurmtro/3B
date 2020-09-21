import styled, { css } from "styled-components";

import media from "../utils/style";

export const Section = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 0;
  ${(props) =>
    props.dark &&
    css`
      background: #292929;
      h2 {
        color: #fff;
      }
      h3 {
        color: #fff;
      }
      div {
        color: #979797;
      }
      p {
        color: #979797;
      }
    `}
`;

export const SectionTitle = styled.h2`
  font-size: 2em;
  margin: 0.65em 0;
  ${media.xs`
    font-size:1.5em;
  `}
`;

export const ContactOptions = styled.h2`
  width: 70%;
  margin: 0.65em auto;
  font-family: "Open Sans";
  border: 1px solid #ffffff54;
  .info {
    font-family: "Open Sans";
    font-size: 2em;
  }

  ${media.xs`
  width: 90%;
    font-size:1em;

    .info {
      font-size: 1em;
    }
  `};
`;
