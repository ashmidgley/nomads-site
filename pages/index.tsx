import Head from "next/head";

import {
  HomeHeader,
  HomeSectionFive,
  HomeSectionFour,
  HomeSectionOne,
  HomeSectionThree,
  HomeSectionTwo,
} from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rational Nomads</title>
        <meta
          name="description"
          content="A radically different way to create a remarkable user experience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
    </>
  );
}
