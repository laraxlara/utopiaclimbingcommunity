import Head from "next/head";
import Header from "@/sections/Header";
import Section1 from "@/sections/Section1";
import Section2 from "@/sections/Section2";
import Section3 from "@/sections/Section3";
import Section4 from "@/sections/Section4";
import Section5 from "@/sections/Section5";
import Section6 from "@/sections/Section6";
import Section7 from "@/sections/Section7";
import Section8 from "@/sections/Section8";
import Section9 from "@/sections/Section9";
import Section10 from "@/sections/Section10";
import SectionPool from "@/sections/SectionPool";
import EventsSection from "@/sections/EventsSection";
import Section11 from "@/sections/Section11";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Utopia Climbing Community</title>
        <meta
          name="description"
          content="Discover Utopia Climbing Community: An Oasis for Climbers and Nature Lovers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />

        <link rel="alternate" href="http://localhost:3000" hrefLang="sr" />
        <link rel="alternate" href="http://localhost:3000/en" hrefLang="en" />
      </Head>
      <main>
        <div className="content-wrapper">
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
          <SectionPool />
          <EventsSection />
          <Section11 />
          <Section6 />
          <Footer />
        </div>
      </main>
    </>
  );
}
