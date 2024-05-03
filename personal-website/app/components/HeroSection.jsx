import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="flex flex-col md:flex-row sm:items-center">
            <div className="md:w-1/2 md:mr-10 sm:text-left">
                <h1 className="mb-4 text-3xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold whitespace-no-wrap text-transparent">
                    <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                        👋 Hi, I'm Charmie! 
                    </span>
                </h1>
                <p className="text-base sm:text-lg lg: text-xl">I'm a full-stack web developer with a passion for creativity and a drive for building. With expertise in JavaScript, I specialize in crafting projects with React on the frontend, complemented by Node.js and Express.js on the backend, while utilizing both SQL (PostgreSQL) and noSQL (MongoDB) for comprehensive database management. I thrive on learning new technologies and solving problems through project building, drawing from my background in healthcare to foster collaboration, attention to detail, and adaptability.
                Exploring authenticity through my life's journey has shaped me into who I am today. Whether diving into a new programming language/technology, actively pursuing my hobbies🏂🎤🧘‍♀️🏓, or traveling the world, I immerse myself in my interests with unwavering dedication. As a woman in the technology field, let's collaborate and spark innovation together! 👩‍💻✨
                </p>
                <div className="flex flex-col md:flex-row mt-4">
                    <button className="px-6 py-3 rounded-full mr-4 mb-4 bg-rose-200 hover:bg-indigo-400 text-white border border-white w-full sm:w-fit">Hire Me</button>
                    <button className="px-6 py-3 rounded-full mr-4 mb-4 bg-rose-600 hover:bg-indigo-800 text-white w-full sm:w-fit">Download CV</button>
                </div>
            </div>
            <div className="md:w-1/2 md:ml-10">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative md:w-3/4 md:ml-20">
                    <Image
                        src="/images/personalPhoto.jpeg"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    /> 
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
