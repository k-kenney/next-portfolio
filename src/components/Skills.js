import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadoow-dark cursor-pointer absolute dark:text-dark dark:bg-light'
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y, transition: {duration: 1.5}}}
        viewport={{once: true}}
        >
            {name}
        
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadoow-dark cursor-pointer
        dark:text-dark dark:bg-light'
        whileHover={{scale:1.05}}>Web</motion.div>
        <Skill name="HTML" x="-25vw" y="-2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactjS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Web Design" x="15vw" y="-10vw" />
        <Skill name="Figma" x="32vw" y="-5vw" />
        <Skill name="TailwindCSS" x="0vw" y="-20vw" />
        <Skill name="Sass" x="-25vw" y="11vw" />
        <Skill name="GitHub" x="18vw" y="16vw" />

    </div>
    </>
  )
}

export default Skills