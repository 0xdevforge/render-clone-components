"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import "./box.css";
import { useEffect, useRef } from "react";

import localfont from "next/font/local"

const regular = localfont(
  {
    src: [
      {
      path:"../../OTF/GeneralSans-Medium.otf"
      }
    ],
    variable:"--font-regularGeneral"
  }
)

export const Box = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  useEffect(() => {}, [isInView]);

  return (
    <div className="">
      <motion.div
        ref={ref}
        className={`index text-[#544D49] py-32 ${regular.className}`}
        style={{ fontWeight: "500" }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="group-wrapper">
          <div className="group">
            <div className="overlap">
              <div className="flexcontainer-wrapper">
                <div className="flexcontainer">
                  <motion.p className="text" variants={textVariants}>
                    <span className={`text-wrapper ${regular.className}`}>
                      Let&apos;s face it – it&apos;s tough to convey the depth of your coding skills on a resume. Traditional
                      <br />
                    </span>
                  </motion.p>
                  <motion.p className="text" variants={textVariants}>
                    <span className="text-wrapper">
                      resumes often provide only a surface-level view of your coding skills. Sure, you can list your{" "}
                      <br />
                    </span>
                  </motion.p>
                  <motion.p className="text" variants={textVariants}>
                    <span className="text-wrapper">
                      tech stack and mention a couple of capstone projects, but does that really capture the <br />
                    </span>
                  </motion.p>
                  <motion.p className="text" variants={textVariants}>
                    <span className="text-wrapper">
                      essence of what you bring to the table? We don&apos;t&nbsp;&nbsp;think so.
                      <br />
                    </span>
                  </motion.p>
                  <motion.p className="text" variants={textVariants}>
                    <span className="text-wrapper">
                      <br />
                    </span>
                  </motion.p>
                  <motion.p className="text" variants={textVariants}>
                    <span className="text-wrapper">
                      It&apos;s challenging for potential employers to understand the full extent of your abilities based on
                      <br />
                    </span>
                  </motion.p>
                  <motion.p className="text" variants={textVariants}>
                    <span className="text-wrapper">a list of technologies or projects alone.</span>
                  </motion.p>
                </div>
              </div>
              <div className="overlap-group">
                <motion.img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/65cbc3ac66f84948b9d10210/releases/65d1e8fe7d55ec7307938ee3/img/rectangle-92.svg"
                  variants={textVariants}
                />
                <motion.div className="div" variants={textVariants} />
                <motion.div className="rectangle-2" variants={textVariants} />
              </div>
              <motion.div className="rectangle-3" variants={textVariants} />
            </div>
            <div className="overlap-2">
              <div className="flexcontainer-2">
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    Your code tells a story – your story. It&apos;s not just
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    about what languages you know or what <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    projects you&apos;ve worked on. It&apos;s about the
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    problem-solving skills, the creativity, and the
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    passion that you bring to the table. <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    It&apos;s about the problems you&apos;ve solved, the
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    challenges you&apos;ve overcome, and the
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    solutions you&apos;ve crafted. But how do you
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">convey that on a resume?</span>
                </motion.p>
              </div>
              <motion.div className="rectangle-4" variants={textVariants} />
              <motion.div className="rectangle-5" variants={textVariants} />
            </div>
            <div className="overlap-group-2">
              <div className="flexcontainer-3">
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    In a competitive job market, standing out is key.
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    But how do you differentiate yourself when
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    everyone else is listing the same tech stack and
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    projects? <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    Without a way to showcase your coding
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    skills in a unique and impactful manner, it&apos;s
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">
                    challenging for students to stand out
                    <br />
                  </span>
                </motion.p>
                <motion.p className="span-wrapper" variants={textVariants}>
                  <span className="span">differentiate themselves effectively.</span>
                </motion.p>
              </div>
              <motion.div className="rectangle-6" variants={textVariants} />
              <motion.div className="rectangle-7" variants={textVariants} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};