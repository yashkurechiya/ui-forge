import { Navbar } from '@/components/Navbar'
import React from 'react'
import ui from "/assets/ui-design.png"

const About = () => {
    return (
        <div className='bg-black min-h-screen py-10 flex flex-col'>
            <Navbar />
            <div className="container  py-20 text-center justify-center flex flex-col">

                <h1 className="text-8xl about-h font-bold  bg-white/10 bg-clip-text text-center absolute w-full   top-20 left-1  tracking-widest drop-shadow-[0_2px_1px_rgba(255,255,255,0.5)]  ">PANELE</h1>
                <h1 className="text-4xl about-h relative mt-5 tracking-widest font-bold mb-4 text-white/90">About Us</h1>
                <div className="flex  justify-center">

                    <p className="text-gray-400 text-justify justify-center flex max-w-6xl items-center    leading-relaxed text-lg    ">
                        At UI Forge, we are passionate about crafting exceptional user interfaces that empower developers and designers alike. Our mission is to provide a comprehensive library of high-quality, customizable components and templates that streamline the design and development process. With a focus on innovation, usability, and aesthetics, we aim to be the go-to resource for anyone looking to create stunning digital experiences. Whether you're building a simple website or a complex application, UI Forge is here to help you forge your vision into reality with ease and efficiency.
                    </p>
                   
                </div>
              <div className="w-full  items-center flex justify-center">
                    <img 
                        src={ui} 
                        alt="UI Design" 
                        className="w-full h-auto max-w-4xl rounded-xl text-center flex justify-center shadow-2xl"
                    />
                </div>
            </div>

        </div>
    )
}

export default About
