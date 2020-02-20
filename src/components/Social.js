import React from 'react';
import styled from 'styled-components';
import { Envelope as MailIcon } from 'styled-icons/fa-solid/Envelope.cjs';
import { Facebook as FacebookIcon } from 'styled-icons/fa-brands/Facebook';
import scrollToElement from 'scroll-to-element';
import Link from './Link';
import ButtonLink from './ButtonLink';

const IconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0 auto;
  svg {
    color: white;
    width: 1em;
    height: 1em;
    padding: 1.5em;
  }
`;

function Social(props) {
  const { edges } = props;
  const facebook = edges.find((o) => o.node.type === 'facebook');
  const mail = edges.find((o) => o.node.type === 'mail');

  return (
    <IconWrapper>
      <Link aria-label={facebook.node.type} to={facebook.node.url}>
        <FacebookIcon />
      </Link>
      <ButtonLink
        aria-label={facebook.node.type}
        onClick={() => {
          scrollToElement(mail.node.url);
        }}
      >
        <MailIcon />
      </ButtonLink>
    </IconWrapper>
  );
}

export default Social;
