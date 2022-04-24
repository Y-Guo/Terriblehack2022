import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { SectionDescription } from "components/misc/Typography.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://www.vyopta.com/wp-content/uploads/2019/01/iStock-952039816.jpg");
`;
//https://media.istockphoto.com/vectors/blockchain-abstract-background-vector-id911033734?k=20&m=911033734&s=612x612&w=0&h=_YqaEsQoSr3P2bmHgBDN5wC9fdy-9XKmj0zWf1Dh2VM=
//https://www.vyopta.com/wp-content/uploads/2019/01/iStock-952039816.jpg
//https://blog.pixlr.com/wp-content/uploads/2021/10/Pixlr-NFT-Art-Glitched-Vaporwave.png

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-50`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0 text-center`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500`;

export default ({
  heading = "Book Music & Comedy Events anywhere in New York",
  description = "Our cloud provisions the best servers, with fast SSD, powerful Xeon Processors, whenever you need it. Oh, and we have 99.9% SLA",
  primaryButtonText = "Search Events Near Me",
  primaryButtonUrl = "#"
}) => {
  const logoLink = (
    <LogoLink href="https://terriblehack.website/">
      TerribleHack2022
    </LogoLink>
  );
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">
        About
      </NavLink>
      <NavLink href="/">
        Features
      </NavLink>
      <NavLink href="/pay">
        Pay
      </NavLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader logoLink={logoLink} links={navLinks} />
        <Content>
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
          <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
        </Content>
      </HeroContainer>
    </Container>
  );
};
