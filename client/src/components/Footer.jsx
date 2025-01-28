import React from 'react';
import styled from 'styled-components';

import logo from '../mini_logo.png';

const FooterContainer = styled.footer`
  background-color: rgba(31, 41, 55, 0.8); /* Semi-transparent dark shade */
  color: white;
  margin-top: auto;
  width: 100%;
  text-align: center;
  backdrop-filter: blur(20px); /* Adds a slight blur effect */
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  color: #9ca3af;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Logo = styled.img`
  height: 35px;
  filter: brightness(0) invert(1);
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  gap: 0.5rem;

  &:hover {
    color: white;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterText>
                    <FooterLink href="https://elisha-noel.vercel.app/" target='_blank'>
                        <Logo src={logo} alt="Logo" />
                        Elisha Noel.
                    </FooterLink>
                </FooterText>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
