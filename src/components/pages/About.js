import React, { useEffect } from "react";
import { inView, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Aabout.css";
import {
  easing,
  fadeInUp,
  fadeInDown,
  fadeInRight,
  fadeInLeft,
} from "../animations/Variants";

const Section1 = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      className="relative h-screen max-w-full  flex flex-col items-end justify-center text-white overflow-hidden transition duration-1000 after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[100%] after:bg-black after:opacity-20 "
      ref={ref}
    >
      <motion.div
        className="p-5 flex flex-col gap-[2rem] z-20 sm:max-w-[35rem] lg:max-w-[65rem] lg:pr-[20rem]"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.5,
              easing,
            },
          },
        }}
      >
        <motion.h1
          className="z-20 text-[2rem] sm:text-[4rem] font-medium"
          variants={fadeInRight}
        >
          Who are we?
        </motion.h1>
        <motion.h3
          className="z-20 font-[400] sm:text-[1.5rem]"
          variants={fadeInRight}
        >
          Adornare Luxury focuses on fashionable and sustainable clothing with an
          affordable price tag. We are currently working with 2 different
          suppliers from Europe to provide incredible quality.
        </motion.h3>

        <img
          className="absolute object-cover top-0 left-0 h-[100%] w-[100%] transform scale-105 transition-transform duration-1000 hover:transform hover:scale-100"
          src={require("../../assets/about-main.jpg")}
          alt="about-main"
        />
      </motion.div>
    </div>
  );
};

const Section2 = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      className="h-auto max-w-full py-16 px-12 flex flex-col justify-center items-center "
      ref={ref}
    >
      <motion.div
        className=" justify-center items-center flex flex-col gap-10 "
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.5,
              easing,
            },
          },
        }}
      >
        <div id="card" className="card mt-2 ">
          <div className="content">
            <span className="text-[9px] sm:text-[1.2rem]">
              It’s about that upcoming party, the catch up with friends and all
              the excitement that comes with it. We put our customers at the
              heart of everything we do; this helps us to understand how they
              feel when searching for products and ultimately, making sure they
              feel great when wearing them, whatever the occasion.
            </span>
          </div>
        </div>
        <div id="card" className="card mt-2">
          <div class="content">
            <span className="text-[9px] sm:text-[1.2rem]">
              By reacting quickly to the latest trends and interpreting them in
              a way that’s wearable for our customers, we can help them find a
              look that fits their personal style. So whether they’re looking
              for the latest trends, or simply that perfect party dress, we’ve
              got it covered.
            </span>
          </div>
        </div>
        <div id="card" className="card mt-2">
          <div class="content">
            <span className="text-[9px] sm:text-[1.2rem]">
              We love all things new and get as much of a buzz out of constantly
              updating our products as our customers do buying them. And with 50
              new products uploaded online every month, we make sure that each
              time our customers visit Adornare Luxury there’s something new to
              excite them.
            </span>
          </div>
        </div>
        <div id="card" className="card mt-2">
          <div class="content">
            <span className="text-[9px] sm:text-[1.2rem]">
              We’re passionate about what we do and most importantly, we have
              fun doing it. Sharing this positivity with our customers is
              important to us. By weaving our brand through everything we do,
              from our people and store environments, to marketing and social
              media, we make sure our customers not only look good but feel
              great too.
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <div className="flex flex-col flex-1 w-full cursor-default">
      <Section1 />
      <Section2 />
    </div>
  );
};

export default About;
