import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import About from "../components/section/About";
import Blog from "../components/section/Blog";
import Contact from "../components/section/Contact";
import Work from "../components/section/Work";
import Section from "../components/Section";

export default function Home({ articles }) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>Mohak Bajaj | Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="container px-4 mx-auto lg:px-32 lg:pt-20">
        <Hero />
        <Navigation />

        <div className="hidden md:block py-20" />
        <div className="py-20">
          <Section
            id="work"
            title="My Work"
            description="Here's my list collection of featured project i developed. Feel free to explore."
          />
          <Work />

          <Section
            id="blog"
            title="My Blog"
            description="The following are some of the writings that i have made in my spare time"
          />
          <Blog articles={articles} />

          <Section
            id="about"
            title="About Me"
            description="Hi i am Mohak Bajaj, a Passionate Developer from India. While i am proficient in Full Stack developmentr, My Expertise is in Backend Development."
          />
          <About />

          <Section
            id="contact"
            title="Contact"
            description="Let's Have a Chat! Feel free to contact me if you have any question or want to work together."
          />
          <Contact />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:3000/api/blog/?limit=3`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}
