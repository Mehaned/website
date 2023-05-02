import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
// import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
// import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "../utils/Title";
// import { truncate } from "lodash";
import { github } from "../assets";
import link from "../assets/link.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";




const Stories = ({ story: {name, title, news ,url,source_code_link ,source_codee_link
} }) => {
    const splideOptions = {
        perPage: 3,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        autoplay : {
          delay: 1000,
          disableOnInteraction: false,
      },
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1},
          425: { perPage: 1},
        },
      };
  return (
    <>
      <div className="nike-container mb-11 sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0" id='stories'>
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider" >{name}</p>
      <Title title={title} />
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        The following projects demonstrate my skills and expertise through concrete examples of my work. They showcase my ability to solve complex problems, work with different technologies, and effectively manage projects, reflecting my practical experience in these areas.
        </motion.p>
      </div>
        <div className="mt-7">
          <Splide options={splideOptions} >
            {news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5 ">
                <div className="relative  overflow-hidden grid items-center gap-4 mt-5 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                  <div className="flex items-center justify-center">
                    <img
                      src={val.img}
                      alt={`img/story/${i}`}
                      className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                    />
                  </div>
                  <div className='absolute  inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(url, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(source_codee_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={link}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>

                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
