import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';

function App() {
  let [showContent, setShowContent]=useState(false);

  useGSAP(() => {
    const tl= gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%"
    }).to(".vi-mask-group", {
      scale:10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }

    })
  });

  useGSAP(() =>{
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function(e){
      // console.log(e.clientX, e.clientY);
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent])

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black"/>
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>

              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />

        </svg>
      </div>
      {showContent && 
        <div className="main w-full">
          <div className="landing w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl text-white -mt-[8px] leading-none">Rockstar</h3>
              </div>
            </div>
            
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img src="./sky.png" className="absolute sky scale-[1.2] top-0 left-0 w-full h-full object-cover" alt="sky image" />
              <img src="./bg.png" className="absolute bg scale-[1.1] top-0 left-0 w-full h-full object-cover" alt="background" />
              <div className="text text-white flex flex-col gap-3 absolute top-10 left-1/2 -translate-x-1/2">
                <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-20">auto</h1>
              </div>
              <img src="./girlbg.png" className="absolute character bottom-[-52%] left-1/2 -translate-x-1/2 scale-[0.8]" alt="girl" />

            
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll Down</h3>
              </div>
              <img src="./ps5.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65px]" alt="" />
            </div>
          </div>

          <div className="w-full h-screen flex items-center justify-center px-10 bg-black overflow-hidden">
            <div className="cntnr flex items-center text-white w-full h-[50%]">
              <div className="limg relative w-1/2 h-full">
                <img className="absolute scale-[1.1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />
              </div>
              <div className="rg w-[30%]">
                <h1 className="text-6xl">Still Running</h1>
                <h1 className="text-6xl">Not Hunting</h1>
                <p className="mt-10 font-[Helvetica_Now_Display] text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptas cum quia pariatur dolores maiores autem molestias eligendi consequatur impedit. Pariatur perferendis perspiciatis iure id quo nihil aliquam sequi culpa!</p>
                <p className="mt-3 font-[Helvetica_Now_Display] text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus qui dolorum ratione blanditiis magnam deserunt libero, repudiandae facilis quos? Odio quo incidunt iste veritatis quidem ducimus nam amet cupiditate?</p>
                <p className="mt-10 font-[Helvetica_Now_Display] text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptas cum quia pariatur dolores maiores autem molestias eligendi consequatur impedit. Pariatur perferendis perspiciatis iure id quo nihil aliquam sequi culpa!</p>
              </div>
            </div>
            
          </div>

        </div>
      }
    </>
  )
}

export default App
