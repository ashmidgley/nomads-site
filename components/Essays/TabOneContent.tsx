import React, { FC } from "react";

import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

const CONTENT = [
  [
    {
      title: "Basic Human Drives",
      paragraphs: [
        "Most people need to feel like there is some point to their existence. It seems to be a basic human drive, and it’s responsible for the creation of art, businesses, religions and empires.",
        "We can agree that food, shelter, health and safety are also really important. And how you prioritise these needs depends on your circumstances. So if you’re really hungry, you’re probably not going to be driven to paint a masterpiece until you find some food.",
      ],
    },
    {
      title: "How We've Done It In The past",
      paragraphs: [
        "I can remember visiting my Dad after school at the police station where he worked as a detective and wondering why he wasn’t able to get up from his desk to drive me home so I didn’t have to walk all the way. But I accepted that he was very busy doing something that was more important than saving me some legwork.",
        "This is not one of those sad stories, “Cat’s In The Cradle” style. My Dad was great. It’s more about observing the way he went to work at a certain time, finished at a certain time, and there was no possibility to break from that to do anything else. I imagine that if there was a medical emergency, he could have gotten away but certainly not because he had a flash of inspiration for a hobby he was working on, or because his 9-year-old didn’t appreciate the value of exercise.",
        "So we can make the observation that “people who work normal jobs are not free to wander while at work”. If that sentence makes you think, “Well, duh!” then we’re in good shape to continue.",
      ],
    },
  ],
  [
    {
      title: "Under The Influence",
      paragraphs: [
        "A lot of the way we think about business and work comes from the Industrial Revolution. During that period, factories arose which needed large numbers of people to do repetitive tasks for long periods of time.",
        "Naturally, most people weren’t excited or motived to do these tasks, and given the choice they would do other things. But employers were able to offer them the choice between starvation or being able to feed their families. Most people chose the lesser of two evils. Over the following couple of centuries this model became the norm.",
        "Fast forward to now. The industrial revolution undoubtedly raised the standard of living for most people in modern societies, so we can’t be too quick to knock it. But things are changing really, really fast. It’s increasingly becoming the case that the repetitive, boring tasks are able to be done by technology. Robots can perform amazingly complex tasks that until quite recently could only be carried out by humans.",
        "And so more and more people are finding themselves doing jobs that humans are better at than machines, such as designing things for other humans to use, nursing people or providing emotional counselling. Things that require more abstract thinking. This is the case in our industry, which is Software Design.",
      ],
    },
    {
      title: "Different Motivators For Different Tasks",
      paragraphs: [
        "When a human is needed to do a simple physical task, such as stamping shapes out of metal ingots on a production line, it works quite well to use a “carrot and stick” approach. It doesn’t matter how happy or content the person is who’s doing the job, you get good productivity by paying them and threatening to fire them if they don’t perform. The person is driven along by the stick and pulled along by the carrot. And if you give them a further away carrot, such as an annual bonus, even better.",
        "But lately, the things that need doing are more creative in nature or require problem solving. We’ll use Software Design as an example since it’s the most familiar, but there are many others. A lot of software companies have followed the standard model for businesses, and so you find that if you want to work in the industry you’re compelled to live in a particular city in a particular country, go in to the office at a particular time and sit at a particular desk. Then you are required to attend particular meetings and finish work at a particular time. The carrot and stick are still the same - if you’re not productive you’ll get fired. If you are, you’ll get paid. And if you are very productive you’ll get a bonus at Christmas time.",
        "Here’s the snag though. The humans in this case are not doing mindless, repetitive tasks. They’re doing artistic, creative things. For example, trying to imagine what other, very different people might be thinking when they look at a computer screen. Or trying to find a way to get a computer to do something that hasn’t been done before. If you are bored or unhappy, you can still keep doing a mindless, repetitive task. You don’t need to think about it or even really concentrate.",
        "But when the task requires problem-solving, it’s very different. If you are stressed about whether your spouse is about to break up with you, it’ll destroy your ability to get into the head of an unknown future user or imagine new ways to approach your programming. In the Industrial Revolution-inspired model, it doesn’t matter whether you’re happy or fulfilled. The job will still get done. But in a modern, creative job it matters hugely.",
      ],
    },
  ],
  [
    {
      title: "The Office",
      paragraphs: [
        "So emerges the modern phenomenon that we’re so familiar with: “The Office”. The crazy situations where office workers battle each other to establish hierarchies, hoard knowledge to make themselves indispensable or bully and belittle each other. Where people spend hours surfing news sites or youtube watching cat videos after clocking in just to bide time until they can clock off.",
        "These outward signs are just the tip of the iceberg. The actual disfunction in modern companies extends far beyond to affect the emotional wellbeing of the employees and their families.",
        "That’s not to say that all companies are dysfunctional. Some find ways to mitigate the effects and build relatively healthy cultures where people don’t feel miserable. But the general trend is towards dysfunction and inefficiency. The point is that it’s widely recognised that the traditional model of business is rapidly failing in the modern era.s",
      ],
    },
    {
      title: "Happiness And Contentment Are Critical",
      paragraphs: [
        "If you’re with me on the idea that people need to be happy and content in order to perform creative tasks, then we need to step back and ask, “How do people become happy and content?” That’s a really big and complex question, not made easier in that it varies from person to person.",
        "We’ve made a good start just by recognising that it’s not irrelevant, but the dawning realisation is that it’s actually more important than anything. In fact it’s the very reason that businesses, technology and human endeavour exist at all. We’re all trying to make life “better” which, now that the other basic needs have been met, translates to “happiness and fulfilment”.",
      ],
    },
  ],
  [
    {
      title: "People Are Not Machines",
      paragraphs: [
        "The next proposition is that 'people are not machines'. By this, I mean that we are by nature quite chaotic and unpredictable, whereas machines are designed to be be reliable, precise and predictable. We are soft and weak, whereas machines are hard and strong. We think and function in mysterious, fuzzy ways, whereas machines are well understood and can easily be fixed if they malfunction. Humans are much harder, if not impossible, to fix if they break.",
        "Our current work model recognises the huge success of machines - due to their strength, precision, reliability and ability to be improved and repaired - and says, “Those characteristics are great. People should be like that too.” If you described somebody as “Strong, reliable and precise”, most people would agree that describes a pretty awesome person. If you witness someone who is amazingly good at something, you’d say “He’s a machine!” It pervades our thinking and culture so deeply that humans should try to emulate machines, that we’re not even aware of it.",
        "But here’s the thing: humans are not machines. And it causes us a great deal of stress to try and emulate them. I’d suggest that it’s actually a cause of a lot of the discontent and unhappiness we see in the modern workplace. The deeply ingrained expectations that we are going to start and stop working at precise times regardless of how we’re feeling. That we will perform tasks at a predetermined rate, and that we will not have anything else going on in our lives that can distract us from performing our tasks. As much as we aspire to be machines, we’d do ourselves a big favour to accept that we are not.",
      ],
    },
    {
      title: "Finding A Balance",
      paragraphs: [
        "This brings us back to that hard question: “How do people become happy and content?” In the context of work, a good answer would seem to be, “Allow them to be humans and not machines.” At first glance that would seem impossible. The hidden assumption is that people are naturally lazy and will not work unless forced to. And that’s partly true. We are lazy - sometimes. And people are easily distracted, so they won’t concentrate unless they have to. Well, that’s true too - sometimes.",
        "But we can also apply ourselves ruthlessly at other times. We are forgetful and dreamy at times, and at others we have clarity and recall that a supercomputer couldn’t hope to emulate. We move between theses states - idleness and productivity, fatigue and exertion, vacuousness and concentration. To look at modern society from a height you’d be forgiven for thinking only the latter of each of those word-pairs exists, but it’s an illusion. They’re the opposite sides of the same coin, we just want to be machines so badly that we choose to only look at one side.",
        "I have observed over time that everything has a counterpart and in order for us to be happy there needs to be balance. I’ll give you an example: I love being in the wilderness. When there is natural beauty and greenery around me and the only sounds are the wind, water and animals, I have a huge feeling of well-being. Unless I’m hiking across a lake and I fall through the ice. Or a storm blows up with howling winds and snow and I’m stuck in a tent. Then it sucks.",
        "And I love the city. You don't have to worry about the weather killing you. The excitement and energy that you feel meeting with people, building cool technology, dining at amazing restaurants and going to live comedy are experiences I would not want to miss. But I hate sitting in traffic and large crowds of people stress me out.",
        "So you’d think, “I enjoy this thing, so if I want to be happy I need to do it all of the time.” People get fed up with the rat-race and buy a lifestyle block in the country, then work themselves into the ground trying to maintain it. The tongue-in-cheek name I’ve heard used many times is “life sentence block”. Is that weird? Well, it’s understandable if we accept the flip-flop aspect of human nature. To be happy, we need contrast. That’s why home is sooooo wonderful when you get back after a long trip, and why the countryside seems bristling with life and adventure after you’ve been cooped up inside for a long time.",
        "That’s what I think Yin and Yang is about. The concept seems to be that each aspect of life has opposing sides that need to be in balance in order to achieve contentment and happiness.",
        "The catch is that it’s dynamic - things keep moving. It’s a mistake to take a snapshot of your life and work out where your balance is, then expect everything to stay like that. You have to keep constantly re-evaluating where you are between those extremes and adjusting accordingly. So I might need to spend 80% of my time in the country and 20% in the city now, but when I was younger it was probably the other way around.",
        "And it applies to every activity you undertake, all the time. The amount of time you spend with your partner vs doing things on your own. How much time you spend working vs relaxing. How much time you spend sleeping vs being awake. If you think about people who live at the extremes, they rarely seem healthy or happy. People who work all the time and never relax. Those who sleep all the time and never get up. People who become hermits and never socialise. Those who party all the time and can’t bear to be alone.",
      ],
    },
  ],
];

export const TabOneContent: FC = () => {
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
            {"Happiness And Fulfulment In The Modern Workplace"}
          </Text>
          <Text as="h4" color="black">
            {"A key to productivity"}
          </Text>
          <Flex direction="column" alignItems="center" gap={6}>
            <Text color="black">
              {
                "We need to design a work environment that recognises human nature for what it is, and takes advantage of its brilliance when it happens. Don’t expect it to happen consistently or at a business-owner’s convenience. Take a leap of faith that, given the right circumstances and free to pursue happiness and well-being, most humans will naturally become productive some of the time, and when they do it'll be fantastic."
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
        <Flex
          direction="column"
          justifyContent="center"
          gap="3.125rem"
          borderBottom="1px solid #DCDCDC"
          py={{ base: 12, md: 20 }}
        >
          <Text
            color="black"
            fontSize="1.5rem"
            lineHeight="1.875rem"
            fontWeight={500}
          >
            {"Conclusion"}
          </Text>
          <Flex direction="column" alignItems="center" gap={6}>
            <Text color="black">
              {
                "Let's leave with this two-part conjecture: that we humans are happiest when we can find balance, and we can maintain happiness only by constantly tweaking that balance. Given that, how do we redesign our model of work to allow for it? It seems almost impossible, because in order for an organisation to function, people need to be reliable, punctual and productive. Right? How can we organise creatures that are temperamental, unpredictable and may or may not produce something?"
              }
            </Text>
            <Text color="black">
              {
                "Our answer is that we need to design a work environment that recognises human nature for what it is, and takes advantage of its brilliance when it happens. Don't expect it to happen consistently or at a business-owner's convenience. Take a leap of faith that, given the right circumstances and free to pursue happiness and well-being, most humans will naturally become productive some of the time, and when they do it'll be fantastic. You just have to be able to wait and capture the results when they happen. And they will happen."
              }
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
