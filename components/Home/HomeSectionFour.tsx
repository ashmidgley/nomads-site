import React, { FC } from "react";

import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { TestimonialCard } from "./TestimonialCard";
import { TestimonialContent } from "./TestimonialContent";

const TESTIMONIALS = [
  {
    name: "Brett Collins",
    title: "Lead Developer, ZERO",
    message:
      "When pressure is high, Nomads get all hands on deck to ensure we have boost capacity. When pressure is low, Nomads chip away at our development backlog and technical debt. Rational Nomads have enabled us to focus on what's most important by taking care of what is often pushed to the side.",
  },
  {
    name: "Ethan Fisher",
    title: "Product Design Lead, ZERO",
    message:
      "The Nomads model gives my team more capacity without the cost of more management. They plug into our design system and deliver value consistently, freeing me up to work on the most important work.",
  },
  {
    name: "Pearl Pan",
    title: "Designer, Rational Nomads",
    message:
      "As a working Nomad for 2 years, I’ve absolutely loved the journey so far. The amount I’ve learnt is immeasurable and I am able to freely travel anywhere in the world while still working and being part of the RN community. ",
  },
  {
    name: "Ash Midgley",
    title: "Developer, Rational Nomads",
    message:
      "During my 6-month tenure with Nomads I've worked from Thailand, Indonesia and all over New Zealand. If you value freedom and independence, you will not find a more supportive and flexible group of people to work with.",
  },
  {
    name: "Aditya Sharma",
    title: "Designer, Rational Nomads",
    message:
      "We work as a team and win as a team at Rational Nomads. I love the attention to detail given to work and the fact that I interact with folks much smarter than myself.",
  },
  {
    name: "Hien Tran",
    title: "Administrator, Rational Nomads",
    message:
      "I love being a Nomad. It allows me to balance my life with my work. The enormous freedom to pursue my travel passion and to see the world has forever change me as person.",
  },
  {
    name: "Lynn Nagel",
    title: "VP of Product, WageWorks",
    message:
      "Besides the awesome and award-winning results, the best part of working with Rational Nomads is the collaboration",
  },
];

export const HomeSectionFour: FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex direction="column" py={{ base: 0, md: 24 }}>
      <Flex direction="column" px={{ base: 8, xl: 64 }} mb={28}>
        <Flex justifyContent="center">
          <Text as="h1">{"Testimonials"}</Text>
        </Flex>
        <Flex
          gap={{ base: 10, md: 16 }}
          mt={{ base: 8, md: 20 }}
          direction={{ base: "column", md: "row" }}
        >
          <TestimonialContent
            name="n3o"
            title="Chief Architect, ZERO"
            message="Rational Nomads are rare in that they formed their DAO from the human and culture perspective first and foremost, so they embody the principles of the next wave of human organization. They have enabled us to scale up productivity when needed and scale it back without spending time recruiting, managing or letting go of team members, making them an invaluable partner to us at ZERO."
          />
          <TestimonialContent
            name="Stacy Hunt"
            title="Pioneering Nomad"
            message="Giving people the control to blend their work into their lives as they wish creates a thrilling next-gen work environment, which people are attracted to rather than compelled into. Finding a way to turn that fuzzy human-centric productivity into a consistent, high quality product for clients is groundbreaking. It’s something I’m proud and excited to be associated with."
          />
        </Flex>
      </Flex>
      <Carousel
        centerMode
        centerSlidePercentage={isMobile ? 90 : 30}
        showArrows={!isMobile}
        showStatus={false}
        showThumbs={false}
      >
        {TESTIMONIALS.map((testimonial, i) => (
          <TestimonialCard key={i} mb={12}>
            <TestimonialContent
              name={testimonial.name}
              title={testimonial.title}
              message={testimonial.message}
            />
          </TestimonialCard>
        ))}
      </Carousel>
    </Flex>
  );
};
