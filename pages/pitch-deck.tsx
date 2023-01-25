import React from "react";

import { Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { HeroHeader, PageContent } from "../components";

export default function PitchDeck() {
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <HeroHeader
        backgroundUrl={
          isMobile
            ? "images/mobile/banner-pitch-deck.jpg"
            : "images/desktop/banner-pitch-deck.jpg"
        }
        heading="Let's Just Talk"
        subtitle="There's no substitute for conversation."
      />
      <PageContent>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 0, md: 20 }}
        >
          <Flex direction="column" gap={8}>
            <Text color="black">
              {"Hi, we're Rational Nomads, and this is our pitch deck."}
            </Text>
            <Text color="black">
              {
                "The main thing that you should know about us is that we don't believe in pitch decks. It's too easy to create a fantasy, and the only thing you can be sure of is that we'll be different from what you imagine."
              }
            </Text>
            <Text color="black">
              {"What we believe in are real relationships."}
            </Text>
            <Text color="black">
              {
                "So we're not even gonna try to pitch. Instead, let's just make it ridiculously easy to start working with us. A conversation, in person, is the starting point for a very small and low-key project. Something that has value to you, and you're prepared to pay $500 for."
              }
            </Text>
            <Text color="black">
              {
                "We use that to introduce you to our process and get to know yours. From your perspective, we look like a single person. Someone you can put on your team like a new hire, but who has the range of skills, ability and quality control of a full high-performance team."
              }
            </Text>
          </Flex>
          <Flex direction="column" gap={8}>
            <Text color="black">
              {
                "Once we iterate on and finish that small task, you evaluate what the experience was like for you, and we evaluate what it was like for us. If we agree to, we can break off another chunk of stuff you need done and do that. You can scale up or down what you want us to do however and whenever you like."
              }
            </Text>
            <Text color="black">
              {
                "We don't have to get married. We don't even have to date. Let's just have a chat and learn a little about each other, and if that works out we can do a bit of work together."
              }
            </Text>
            <Text color="black">{"Look forward to hearing from you."}</Text>
            <Button
              variant="client"
              onClick={() => router.push("/hire")}
              maxWidth="13.188rem"
            >
              {"CHAT WITH US"}
            </Button>
          </Flex>
        </Flex>
      </PageContent>
    </>
  );
}
