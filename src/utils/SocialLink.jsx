import React from 'react'
import github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import linkedIn from "../assets/linkedIn.png";
import codepen from "../assets/codepen.svg";
const SocialLink = () => {
  return (
   <>
   <div className={`text-{10px} p-[10px] xl:pb-12 flex justify-center items-center flex-row  gap-10 overflow-hidden`}>
   <a href="https://github.com/Mehaned" target="_blank">
      <img
        src={github}
        alt="icon/social"
        className="w-10 h-10 flex items-center cursor-pointer md:mb-[10px] md:w-10 md:h-10 sm:w-10 sm:h-10 transition-all duration-200 hover:scale-110"
      />
    </a>
   <a href="https://www.linkedin.com/in/mehaned-ahmed-063516215/" target="_blank">
      <img
        src={linkedIn}
        alt="icon/social"
        className="w-10 h-10 flex items-center cursor-pointer md:mb-[10px] md:w-10 md:h-10 sm:w-10 sm:h-10 transition-all duration-200 hover:scale-110"
      />
    </a>
   <a href="https://www.facebook.com/mohanad.alaa.94" target="_blank">
      <img
        src={facebook}
        alt="icon/social"
        className="w-10 h-10 flex items-center cursor-pointer md:mb-[10px] md:w-10 md:h-10 sm:w-10 sm:h-10 transition-all duration-200 hover:scale-110"
      />
    </a>
   <a href="https://codepen.io/Mehaned007" target="_blank">
      <img
        src={codepen}
        alt="icon/social"
        className="w-10 h-10 flex bg-white overflow-hidden rounded-full items-center cursor-pointer md:mb-[10px] md:w-10 md:h-10 sm:w-10 sm:h-10 transition-all duration-200 hover:scale-110"
      />
    </a>
    </div>
   </>
  )
}

export default SocialLink