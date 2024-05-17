import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/kenney-ind-img.png";
import project2 from "../../public/images/projects/christy-website-img.png";
import project3 from "../../public/images/projects/super-sticky-notes.png";
import project4 from "../../public/images/projects/memory-match.png";
import project5 from "../../public/images/projects/guess-the-word.png";
import project6 from "../../public/images/projects/weather-app.png";
import project7 from "../../public/images/projects/react-job-Board.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          trasition={{ duration: 0.02 }}
          priority 
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          trasition={{ duration: 0.02 }}
          priority 
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        {/* <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span> */}
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Kayla Kenney | Projects Page</title>

        <meta name="description" content="font-end web developer"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl"
            // text="Something Awesome Coming Soon!"
            text="Code: Where Dreams Transform into Reality"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"> 
            <div className="col-span-12">
              <FeaturedProject
                title="Kenney Industries"
                img={project1}
                summary="A business website for a machining company in Dallas, TX. Built using
                React, Tailwind, JS, HTML, CSS. Experienced working with the client to meet the needs
                of their company."
                link="https://kenneyind.com/"
                github="https://github.com/k-kenney/kenney-ind"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Christina Healing Arts"
                img={project2}
                link="https://www.christinahealingarts.com/"
                github="https://github.com/k-kenney/christinahealingarts"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Guess the Word"
                img={project5}
                link="https://k-kenney.github.io/guess-the-word/"
                github="https://github.com/k-kenney/guess-the-word"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="React Job Board"
                img={project7}
                summary="A React.js job board website that leverages the React.js library and various React packages to enhance its functionality. I implemented a JSON server as the backend to retrieve endpoints, ensuring seamless CRUD operations for displaying newly created jobs."
                link="https://github.com/k-kenney/react-job-board"
                github="https://github.com/k-kenney/react-job-board"
                type="Featured Project"
              />
            </div>


            

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Super Sticky Notes"
                img={project3}
                link="https://codesandbox.io/s/sticky-note-ui-421s0d"
                github="https://codesandbox.io/s/sticky-note-ui-421s0d"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Weather App"
                img={project6}
                link="https://weather-app-beta-plum.vercel.app/"
                github="https://github.com/k-kenney/weather-app"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Magic Memory"
                img={project4}
                summary="A React learning project. I used useEffect, state, and props to create an interactive memory matching game.
                This game also keeps track of how many turns a player has taken. Match them all correctly to win."
                link="https://magic-memory-mu.vercel.app/"
                github="https://github.com/k-kenney/memory-game"
                type="Featured Project"
              />
            </div>

          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
