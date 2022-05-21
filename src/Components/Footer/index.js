import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaGithub
    } from 'react-icons/fa'
import{
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIConLink

} from './FooterElement'

const Footer = () => {
  return (
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">How it Works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Inverstors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>App</FooterLinkTitle>
                <FooterLink to="/signin">Buy and sell</FooterLink>
                <FooterLink to="/signin">Crypto Earn</FooterLink>
                <FooterLink to="/signin">Crypto Credit</FooterLink>
                <FooterLink to="/signin">Crypto Pay</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Exchange</FooterLinkTitle>
                <FooterLink to="/signin">Exchange Home</FooterLink>
                <FooterLink to="/signin">Margin Trading</FooterLink>
                <FooterLink to="/signin">The Syndicate</FooterLink>
                <FooterLink to="/signin">Supercharger</FooterLink>
                <FooterLink to="/signin">Trading Arena</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>DeFi</FooterLinkTitle>
                <FooterLink to="/signin">Wallet</FooterLink>
                <FooterLink to="/signin">Swap</FooterLink>
                <FooterLink to="/signin">Earn</FooterLink>
                <FooterLink to="/signin">DashBoard</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
              <SocialMediaWrap>
                  <SocialLogo to='/'>
                      ₿coin
                  </SocialLogo>
                  <WebsiteRights>₿coin c {new Date().getFullYear()}
                  All rights reserved</WebsiteRights>
                  <SocialIcons>
                      <SocialIConLink href="//www.facebook.com/ra.bee.54943" target="_blank" aria-label='Facebook'>
                          <FaFacebook />
                      </SocialIConLink>
                      <SocialIConLink href="//www.instagram.com/ra.vi.neupane/" target="_blank" aria-label='Instagram'>
                          <FaInstagram />
                      </SocialIConLink>
                      <SocialIConLink href="/" target="_blank" aria-label='Youtube'>
                          <FaYoutube />
                      </SocialIConLink>
                      <SocialIConLink href="//www.github.com/Binary-Beast-Byte" target="_blank" aria-label='Github'>
                          <FaGithub />
                      </SocialIConLink>

                  </SocialIcons>
              </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    
  );
};

export default Footer;
