import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info, placeLink }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 mb-0 w-[60%] md:w-[80%]  mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} |           <a
            href={placeLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark hover:underline"
          >
            {place}
          </a>
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
        Education
      </h2>
      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Fullstack Web Development"
            time="2022-2023"
            place="Le Wagon"
            placeLink="https://www.lewagon.com/"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />

          <Details
            type="Front-end Web Development"
            time="2022-2023"
            place="Skillcrush"
            placeLink="https://skillcrush.com/"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />

          <Details
            type="M.Ed. in Literacy"
            time="2020-2021"
            place="American College of Education"
            placeLink="https://ace.edu/"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />

          <Details
            type="B.Sc. in Interdisciplinary Studies"
            time="2006-2010"
            place="University of North Texas"
            placeLink="https://www.unt.edu/"
            info="Earned a 4 year degree after studying ESL education for K-12."
          />

        </ul>
      </div>
    </div>
  );
};

export default Education;
