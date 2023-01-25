import React, { FC } from "react";

import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

const CONTENT = [
  [
    {
      title: "The Confusion About Agile",
      paragraphs: [
        "'Agile Development' is a term that has rapidly grown in prominence in recent years. It’s become one of those terms that is bounced around so much that most people have heard it and are aware that it’s a thing, even if they might not know what kind of thing it is. Companies talk about “Going Agile”, so it’s reasonable to guess that it’s a process of some sort. That’s most people’s perception, though what it actually involves is somewhat mysterious still.",
        "So what is Agile? Well, for a start it’s not a process. Rather, it’s a way of looking at the world. You can’t “Go Agile” any more than you can “Go Buddhist”. Even if the CEO comes to believe that Buddhism might be more effective for the company, it’s just not going to work to stand up and declare, “Guys, we’re going Buddhist!”. Buddhism isn’t in and of itself going to make every team more effective. It’s not a matter of whether Buddhism is “better” or not - it’s just a different way of thinking about things that may yield some advantages if everybody on the team is on the same page. And you can say the same for any other world view. The analogy works for “Christianity”, “Atheism”, “Science”, “Marxism”, “Capitalism”, “Socialism” or any other ideology that a group of people share.",
        "Some ideologies have come to have a positive or negative connotation, depending on who you talk to. But ultimately, none of these ideologies are “good” or “bad”. Any more than nuclear power is good or bad, or guns are good or bad. They are tools that are suited for different purposes, and how they are interpreted and used depends on the groups of people who use them. And those uses can vary widely.",
      ],
    },
    {
      title: "Riding The Waterfall",
      paragraphs: [
        "OK, so Agile is not a process. It is an ideology. It’s not “good” or “bad”, it’s just a new way of thinking about things. What is it?",
        "It starts by recognising that the nature of the tasks we’re doing these days is inherently unpredictable. As we move out of the Industrial Age and into the Information Age, human workers are increasingly being asked to solve problems that haven’t been solved before and to get into the heads of other people to try and make things that they want to use. But nobody knows at the outset what the end result is going to look like. The traditional approach of using tried and tested methods to make predictable products on a large scale requires things to be thought out and mapped very thoroughly to avoid waste. So large amounts of resources can be put into the planning, with confidence that it will pay off. If you are are going to make a large building, you could just get a group of labourers together and start pouring concrete, but pretty soon you’re going to find that you forgot to put the drainage pipes in the foundation and you either have to pull the work down and start again or - more commonly because you can’t afford to do that - tack them onto the outside of the building. Obviously, since it is well known how to build a building, it would be worth the investment to have an architect draw up plans.",
        "This is what’s know as “Waterfall Development”. Where a large investment is made in up-front planning so that the end result can be predicted, which gives everyone confidence to go ahead. And Waterfall Development has been hugely effective, so companies naturally follow that blueprint without really questioning it. Until it stops working.",
      ],
    },
  ],
  [
    {
      title: "When The Waterfall Dries Up",
      paragraphs: [
        "The reason it’s starting to fail is that modern companies are undertaking tasks that are not well known and cannot be mapped out. Not only that, but the goalposts keep moving. There may be a vague idea of what the business goal is, but it’s very fuzzy, such as: “There’s an opportunity for a better ride share app”. But in modern information business, whether that app succeeds or not usually comes down to some very fine details which can be easily overlooked, if not impossible to spot at the outset.",
        "It’s natural to think that it’s just a matter of planning harder, thinking things through more thoroughly. Surely the only reason the project is failing is because the designers were lazy or the programmers incompetent? And sure, that’s been the attitude for a lot of companies. Teams have been fired and reinstated only to find that the project and the company keeps failing.",
        "So a key change in Agile thinking is to accept that this unpredictability is an inherent part of the problem, not a failing on the part of the people trying to solve it. The natural effect of that is to take a more experimental approach to product development. That is, try something small first that is not too expensive and that people don’t get too heavily invested in, and test it in the real world. Put it in the hands of people who are actually wanting to use it. Then take what you learned and iterate on it. Even be prepared to throw it away and start again. Lots of small iterations and figuring out the solution - and clarifying the goal - as you go. Agile companies often find that they end up making something completely different from what they envisioned as they realise what customers actually need. It’s humbling and somewhat miraculous to go through this process as you discover how far off you were at the start and how much better the end result is than what you could have imagined.",
        "The great thing about this is that humans are uniquely suited to doing chaotic jobs where the path is unknown and the goal posts keep shifting. It’s the kind of thing that Artificial Intelligence can only hope to emulate and one area where machines still can’t compete with us. I’d even suggest that it’s a much more natural fit for how we actually operate when we’re allowed to be ourselves. So it seems like a wonderful answer. However, there’s a catch.",
        "In the early days when Agile Development was gaining traction in Silicon Valley, a lot of startups began to take it to the extreme, in “If a little is good, then more must be better” fashion. So in pushing back against the traditional Waterfall approach, they started to make things with no plan whatsoever. They just made what they thought would be cool and made it up as they went along. There were some huge successes where small teams of 1 to 3 people built the likes of Facebook and Google. But as the sizes of the teams grew, there also came some big failures. When there are only a few people, it’s possible to be buzzing around chaotically and still be able to see what each other is doing. So Bob doesn’t need to tell you, “I’ve had a new idea and I’m following up on it” because you can look over and see what he’s doing and say, “Hey Bob, that looks cool. What are you up to?” Whatever’s happening it won’t be long before other teammates notice and catch on, and the team tends to overall stick together. But as the team grows, it becomes harder and harder to see the big picture. You can think you’re working on part of a masterpiece only to find out that 2 weeks ago the plan changed, and the work you were doing is no longer relevant. This leads to frustration, feeling like your contribution was a waste of time, resentment and finger-pointing that breaks down the team morale.",
      ],
    },
    {
      title: "Navigating Nimbly Down The Cliff Face",
      paragraphs: [
        "So we’ve mentioned 2 different kinds of Agile failure: the first is when an existing company which thinks traditionally tries to force their employees to “Go Agile”. And the second is when a startup initially has success thinking agile but it breaks down as the team grows. They are 2 different problems: the first is caused because the team doesn’t understand what Agile is, and the second is caused by lack of fluid communication in a larger team. Of course, if you did take a large team and manage to bring them all around to an agile way of thinking, you’d still then have to deal with the second issue.",
        "There is so much confusion about Agile and failure in trying to adopt it, you’d be forgiven for thinking it was all just smoke and mirrors. Except that it’s not. The answer, like most things in life, lies in the balance.",
        "When it comes to Agile, you do need to accept the uncertainty, take some risks and trust that solutions will emerge. But it’s a mistake to think you can scale it up without planning. You do need planning, just very different planning from what we’d normally expect with a Waterfall approach. If your team have to document every thought and send emails to everybody else in the company for every decision they make, and then wait for higher-ups to make decisions before proceeding, things will grind to a halt in the resulting molasses. There are just too many decisions to be made, and any of them could be critical. And the goal will shift before anybody looks up and notices it, or an obstacle will roll across the path undetected until you crash into it.",
        "Agile thinking involves a higher level of tolerance for mistakes. That doesn’t mean that incompetence should be rewarded, but just that we want to shift the balance away from making people terrified to make a single mistake. The team members need to be empowered to make decisions and keep moving in confidence that their colleagues will be able to see what they are doing, and support them in changing direction if their decision doesn’t work out. If one extreme of the spectrum is being ostracised for any small error, and the other extreme is allowing ongoing incompetence, it’s possible to live somewhere in the middle, recognising that errors are part of the process. We need to try things out in order to move forward, and find ways of making those mistakes as inexpensive as possible. The natural inclination to build a team of experts who never makes a mistake is a fallacy. We need to be empowered to take some risks, trust that our team-mates are competent and get moving.",
      ],
    },
  ],
];

export const TabTwoContent: FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex bg="white" width="100%">
      <Flex direction="column" px={{ base: 8, md: 10 }} gap={8}>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="3.125rem"
          borderBottom="1px solid #DCDCDC"
          textAlign="center"
          py={{ base: 12, md: 20 }}
        >
          <Text
            color="black"
            fontSize={{ base: "1.25rem", md: "2.125rem" }}
            lineHeight={{ base: "1.625rem", md: "2.625rem" }}
            fontWeight={600}
          >
            {"Agile Development"}
          </Text>
          <Text as="h4" color="black">
            {"Making the most of human nature"}
          </Text>
          <Flex direction="column" alignItems="center" gap={6}>
            <Text color="black">
              {
                "Agile Development is a concept that has attracted a lot of attention and at the same time created a lot of confusion. What is it, and how can we use it wisely to help us move forward into a more human-centric way of working?"
              }
            </Text>
            <Text color="black">{"Continue reading below."}</Text>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="3.125rem"
          pt={{ base: 6, md: 20 }}
        >
          {CONTENT.map((section, i) => (
            <Flex
              key={i}
              gap={20}
              direction={{ base: "column", md: "row" }}
              borderBottom={!isMobile ? "1px solid #DCDCDC" : "none"}
              paddingBottom={{ base: 12, md: 20 }}
            >
              <Flex
                direction="column"
                gap={8}
                width={{ base: "100%", md: "50%" }}
              >
                <Text
                  color="black"
                  fontSize={{ base: "1.125rem", md: "1.5rem" }}
                  lineHeight={{ base: "1.375rem", md: "1.875rem" }}
                  fontWeight={500}
                >
                  {section[0].title}
                </Text>
                <Flex direction="column" alignItems="center" gap={6}>
                  {section[0].paragraphs.map((paragraph, i) => (
                    <Text key={i} color="black">
                      {paragraph}
                    </Text>
                  ))}
                </Flex>
              </Flex>
              <Flex
                direction="column"
                gap={8}
                width={{ base: "100%", md: "50%" }}
              >
                <Text
                  color="black"
                  fontSize={{ base: "1.125rem", md: "1.5rem" }}
                  lineHeight={{ base: "1.375rem", md: "1.875rem" }}
                  fontWeight={500}
                >
                  {section[1].title}
                </Text>
                <Flex direction="column" alignItems="center" gap={6}>
                  {section[1].paragraphs.map((paragraph, i) => (
                    <Text key={i} color="black">
                      {paragraph}
                    </Text>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
