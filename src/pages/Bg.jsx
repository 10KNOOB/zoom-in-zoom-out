import React from 'react'
import BG from "../img/others/tree-bg.png";
import "./token.css";

const Bg = () => {
  return (
    <section id="hero">
        <div className=" relative h-[460px] bg-gradient-to-b  from-cyan-500 to-blue-800  w-full bg-cover bg-center mix-blend-overlay">
          <div className="tokenbg "></div>
          <div className="flex md:hidden">
            <img
              src={BG}
              className="w-full h-[460px] object-cover absolute mix-blend-overlay"
              alt="background"
            />{" "}
          </div>

          <div className="flex flex-col min-h-[460px] justify-center items-center gap-y-6 md:gap-y-10">
            <h1 className="text-[50px] mb-7 text-white font-poppins">
              Two Tokens
            </h1>
          </div>
        </div>{" "}
      </section>
  )
}

export default Bg