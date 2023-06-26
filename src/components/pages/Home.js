import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../products/products";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
      className="relative h-screen max-w-full px-5rem flex flex-col items-end items justify-center  text-[#fff] transition duration-1000 overflow-hidden after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black after:bg-opacity-40"
      ref={ref}
    >
      <motion.div
        className="flex flex-col sm:gap-[2rem] sm:mr-[5rem] z-10 max-w-[40rem] "
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
          className="z-10 font-[500] m-4 sm:m-0 no-underline leading-[2rem] sm:leading-[4rem] text-[2rem] sm:text-[4.6rem] shadow-xl"
          variants={fadeInRight}
        >
          Fashion straight to your doorstep
        </motion.h1>
        <motion.h3
          className="z-10 font-[500] m-4 sm:m-0 sm:text-[1.6rem] shadow-sm"
          variants={fadeInLeft}
        >
          Get yourself fashionified without leaving your home
        </motion.h3>
        <Link className="z-10" to="/shop">
          <motion.div
            className="m-4 sm:mt-[1rem] text-[1.5rem] no-underline bg-white text-black shadow-md shadow-[#ff613a] w-[12rem] py-[0.5rem] px-[1rem] text-center transition duration-400 hover:bg-[#ff967c]"
            variants={fadeInUp}
          >
            Shop Now
          </motion.div>
        </Link>
        <img
          className="absolute object-cover top-0 left-0 h-[100%] w-[100%] transform scale-105 transition-transform duration-1000 hover:scale-[1]"
          src={require("../../assets/home-main2.jpg")}
        />
      </motion.div>
    </div>
  );
};
const Section2 = () => {
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="box-border min-h-[40rem] py-[4rem] flex flex-col justify-evenly items-center gap-8"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3,
            easing,
          },
        },
      }}
    >
      <motion.h1 className="text-[2.5rem] font-[200] m-0" variants={fadeInUp}>
        Featured items
      </motion.h1>
      <div className="box-border w-full flex-1 grid grid-cols-2 lg:grid-cols-4 gap-[2rem] py-[4rem] px-[2rem]">
        <motion.div
          className="relative flex flex-col items-center justify-center flex-1 h-full w-full bg-gray-300 transition duration-300"
          variants={fadeInUp}
          whileHover={{
            scale: 1.1,
            transition: { type: "easeInOut", duration: 0.1 },
          }}
        >
          <Link
            className=""
            to={`/shop/${products[31].name.replace(/\s/g, "-")}`}
          >
            <img className="" src={products[31].image} alt="" />
          </Link>
          <p className="flex justify-center items-center w-70% px-0.5rem h-[3rem] text-sm sm:text-base m-0 absolute top-[-20px] text-center text-white bg-gray-500 transition duration-500 ease-in-out opacity-0 px-[0.5rem] hover:opacity-100 hover:shadow-md">
            {products[31].name}
          </p>
        </motion.div>

        <motion.div
          className="relative flex flex-col items-center justify-center flex-1 h-full w-full bg-gray-300 transition duration-300"
          variants={fadeInUp}
          whileHover={{
            scale: 1.1,
            transition: { type: "easeInOut", duration: 0.1 },
          }}
        >
          <Link to={`/shop/${products[50].name.replace(/\s/g, "-")}`}>
            <img src={products[50].image} alt="" />
          </Link>
          <p className="flex justify-center items-center w-70% px-0.5rem h-[3rem] text-base m-0 absolute top-[-20px] text-center text-white bg-gray-500 transition duration-500 ease-in-out opacity-0 px-[0.5rem] hover:opacity-100 hover:shadow-md">
            {products[50].name}
          </p>
        </motion.div>
        <motion.div
          className="relative flex flex-col items-center justify-center flex-1 h-full w-full bg-gray-300 transition duration-300"
          variants={fadeInUp}
          whileHover={{
            scale: 1.1,
            transition: { type: "easeInOut", duration: 0.1 },
          }}
        >
          <Link to={`/shop/${products[55].name.replace(/\s/g, "-")}`}>
            <img src={products[55].image} alt="" />
          </Link>
          <p className="flex justify-center items-center w-70% px-0.5rem h-[3rem] text-base m-0 absolute top-[-20px] text-center text-white bg-gray-500 transition duration-500 ease-in-out opacity-0 px-[0.5rem] hover:opacity-100 hover:shadow-md">
            {products[55].name}
          </p>
        </motion.div>
        <motion.div
          className="relative flex flex-col items-center justify-center flex-1 h-full w-full bg-gray-300 transition duration-300"
          variants={fadeInUp}
          whileHover={{
            scale: 1.1,
            transition: { type: "easeInOut", duration: 0.1 },
          }}
        >
          <Link to={`/shop/${products[62].name.replace(/\s/g, "-")}`}>
            <img src={products[62].image} alt="" />
          </Link>
          <p className="flex justify-center items-center w-70% px-0.5rem h-[3rem] text-base m-0 absolute top-[-20px] text-center text-white bg-gray-500 transition duration-500 ease-in-out opacity-0 px-[0.5rem] hover:opacity-100 hover:shadow-md">
            {products[62].name}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Section3 = () => {
  return (
    <div>
      <div className="box-border container m-auto w-[100%] h-full bg-[#f7f7f7] ">
        <div className="w-full h-1/2 flex justify-between items-center">
          <div className="p-4 w-[100%] h-[50%] overflow-hidden">
            <img
              className="w-full h-[30rem] object-cover object-center transform scale-105 transition-transform duration-1000 hover:scale-100"
              src={require("../../assets/man-leather-jacket.jpg")}
              alt="man-leather-jacket"
            />
          </div>
          <div className="p-8 max-w-1/2 flex flex-col justify-center items-start gap-8">
            <p className="text-[1rem] sm:text-[2rem] font-[500]">
              Even more than you expect Fashion, Beauty, Designer and more.
              Where would you like to start? The best things are free, like our
              delivery!
            </p>
          </div>
        </div>
        <div className="w-full h-1/2 flex justify-between items-center">
          <div className="overflow-hidden w-1/2 h-full">
            <p className=" p-8 text-[1.5rem] sm:text-[2rem] font-semibold m-0 ]">
              Explore our collection of fashion and order with free delivery
            </p>
          </div>
          <div className="p-8 h-[50%] w-[50%] flex flex-col justify-center items-start gap-8">
            <img
              className="w-full h-[30rem] object-cover object-center transform scale-105 transition-transform duration-1000 hover:scale-100"
              src={require("../../assets/woman-coat.jpg")}
              alt="man-leather-jacket"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Session 4
const Section4 = () => {
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
    <motion.div
      className=" box-border max-w-[100%] flex flex-col justify-center items-center gap-[6rem] py-[8rem] px-[2rem]"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.5,
            delayChildren: 0.5,
            easing,
          },
        },
      }}
    >
      <motion.h1 className="m-0 text-[2rem] sm:text-[3rem] font-[400]" variants={fadeInUp}>
        Why you'll love shopping with us
      </motion.h1>
      <div className="max-w-full flex flex-col sm:flex-row flex-1 justify-evenly items-start gap-8">
        <motion.div
          variants={fadeInUp}
          className="flex flex-col justify-center items-center gap-8 max-w-[20rem]"
        >
          <div>
            <img
              className="bg-gray-500 h-60 w-60 rounded-full bg-no-repeat bg-cover bg-center"
              src={require("../../assets/sustainable.jpg")}
            />
          </div>
          <h3 className="m-0 font-[300] text-[1.5rem]">Sustainable</h3>
          <p className="m-0 font-[200] text-[1rem] text-center">
            Adornare luxury has set many goals relating to sustainability,
            including reaching net-zero emissions by 2040, 100% more sustainable
            procurement of cellulose fibres, cotton, linen, and other materials,
            and becoming free of single-use plastics
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col justify-center items-center gap-8 max-w-[20rem]"
        >
          <div>
            <img
              className="bg-gray-500 h-60 w-60 rounded-full bg-no-repeat bg-cover bg-center"
              src={require("../../assets/ethical.jpg")}
            />
          </div>
          <h3 className="m-0 font-[300] text-[1.5rem]">Ethical</h3>
          <p className="m-0 font-[200] text-[1rem] text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sed
            minima odio tenetur. Atque eveniet dicta quia error cumque impedit
            ea sint amet ex officia.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col justify-center items-center gap-8 max-w-[20rem]"
        >
          <div>
            <img
              className="bg-gray-500 h-60 w-60 rounded-full bg-no-repeat bg-cover bg-center"
              src={require("../../assets/fashionable.jpg")}
            />
          </div>
          <h3 className="m-0 font-[300] text-[1.5rem]">Fashionable</h3>
          <p className="m-0 font-[200] text-[1rem] text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sed
            minima odio tenetur. Atque eveniet dicta quia error cumque impedit
            ea sint amet ex officia.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className=" box-border flex flex-col flex-1 w-[100%] cursor-default">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Home;
