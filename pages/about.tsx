import React from "react";

import { Text, useBreakpointValue } from "@chakra-ui/react";

import { HeroHeader, PageContent } from "../components";

export default function About() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <HeroHeader
        backgroundUrl={
          isMobile
            ? "images/mobile/banner-about.jpg"
            : "images/desktop/banner-about.jpg"
        }
        heading="Who We Are"
        subtitle="Spread across the United States, New Zealand, Australia, India and the Netherlands; we use communication technology to pool our diverse talents and experience."
        message="We look and behave like a single person, but we have the capabilities of a team of people."
        alignContent="center"
      />
      <PageContent>
        <Text as="h2" color="#528361">
          Our Principles
        </Text>
        <Text color="black">{"We believe that humans are not machines."}</Text>
        <Text color="black">
          {
            "To operate at their best, indivudals need to be empowered to make decisions for themselves and feel in control of their own wellbeing."
          }
        </Text>
        <Text color="black">
          {
            "It's possible for an autonomous group of individuals to produce a cohesive, high quality output. If the processes and culture are designed to enable that, anything is possible."
          }
        </Text>
        <Text color="black">
          {
            "A work-life balance is key. We strongly encourage all our members to build their work around their lives, rather than build their life around their work."
          }
        </Text>
      </PageContent>
    </>
  );
}
