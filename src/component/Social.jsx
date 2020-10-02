import React from "react";

import styled from "styled-components";
import { Envelope as MailIcon } from "@styled-icons/boxicons-solid/Envelope";
import { Facebook as FacebookIcon } from "@styled-icons/entypo-social/Facebook";
import { SocialButton } from "./LinkButton";

const IconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0 auto;
  svg {
    color: white;
    width: 1.6em;
    height: 1.6em;
    padding: 2em;
    box-sizing: content-box;
  }
`;

function Social(props) {
  const { edges } = props;
  const facebook = edges.find((o) => o.type === "facebook");
  const mail = edges.find((o) => o.type === "mail");

  return (
    <IconWrapper>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label={facebook.type}
        href={facebook.url}
      >
        <FacebookIcon />
      </a>
      <SocialButton
        aria-label={mail.type}
        target="_blank"
        rel="noopener noreferrer"
        href={mail.url}
      >
        <MailIcon />
      </SocialButton>
    </IconWrapper>
  );
}

export default Social;
