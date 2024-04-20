import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 30 }}
        whileInView={{ y: -20 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark hover:underline"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full ms:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[60px] top- w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-7">
        <Details
            position="Software Developer Intern"
            company="Nau Bank"
            companyLink="https://www.frigate.global/"
            time="2023-Present"
            address="Remote, Global"
            work="Collaborate with the global development team to Assist in building front-end 
            and back-end structures using Flutterflow, Java and PostgreSQL. 
          "
          />
          <Details
            position="Freelance Web Developer"
            company="Self-Employed"
            companyLink="https://kaylachristinekenney.com/"
            time="2023-Present"
            address="Remote, Europe"
            work="Consult with clients to develop responsive and visually stunning 
            custom websites using React.js, Next.js, JavaScript, HTML, Sass,
            Vite, Tailwind, GitHub and more."
          />

          <Details
            position="Curriculum Writer"
            company="Quality Schools International"
            companyLink="https://www.qsi.org/"
            time="2022-2023"
            address="Remote"
            work="Collaborated with a team of 12 providing professional experience 
            to create the literacy curriculum for 35+ schools in 30+ different countries."
          />

          <Details
            position="5th Grade Classroom Teacher"
            company="Kyiv International School"
            companyLink="https://kyiv.qsi.org/"
            time="2021-2022"
            address="Kyiv, Ukraine"
            work="Taught all subjects using the US Common Core curriculum and 
            analyzed data from assessment results to design intervention
            plans resulting in 90% of students making progress toward goals. 
            In addition, I optimized online learning for students in all subjects after
            evacuating Ukraine with 100% attendance."
          />

          <Details
            position="4th Grade Classroom Teacher"
            company="QSI International School of Yerevan"
            companyLink="https://yerevan.qsi.org/"
            time="2018-2021"
            address="Yerevan, Armenia"
            work="Planned and implemented 7 lessons per day and communicated with 
            parents & guardians on an as needed basis
            to provide updates on student progress and support home learning."
          />

          <Details
            position="Year 1 Classroom Teacher"
            company="New Cairo British International School"
            companyLink="https://ncbis.co.uk/"
            time="2016-2018"
            address="Cairo, Egypt"
            work="Planned weekly for and conducted lessons to teach math, inquiry, 
            and literacy to native and international students aged 4-6 on a team of 3 teachers."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
