"use client";
import Image from "next/image";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactJs from "@/assets/icons/react.svg";
import Chrome from "@/assets/icons/chrome.svg";
import Github from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import {motion} from "framer-motion"
import { useRef } from "react";

const toolbox = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon
  },
  {
    title: "HTML5",
    iconType: HTMLIcon
  },
  {
    title: "CSS3",
    iconType: CSSIcon
  },
  {
    title: "React",
    iconType: ReactJs
  },
  {
    title: "Chrome",
    iconType: Chrome
  },
  {
    title: "Github",
    iconType: Github
  }
];

const hobbies = [
  {
    title: "T.Tennis",
    emoji: "🏓",
    left: "5%",
    top: "5%"
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "50%",
    top: "5%"
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%"
  },
  {
    title: "Biking",
    emoji: "🏍️",
    left: "35%",
    top: "40%"
  },
  {
    title: "Traveling",
    emoji: "🌍",
    left: "70%",
    top: "45%"
  },
  {
    title: "Chess",
    emoji: "♘",
    left: "5%",
    top: "65%"
  },
  {
    title: "Writting",
    emoji: "✍️",
    left: "45%",
    top: "70%"
  }
]

export const AboutSection = () => {
  const constraintRef = useRef(null)
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do and what inspires me." />
        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads" description="Explore the books shaping my prespectives." />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>
          <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My ToolBox"
              description="Explore the technologies and tools that I use to craft deigital experiences"
              className="" />
            <ToolBoxItems toolbox={toolbox} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
            <ToolBoxItems toolbox={toolbox} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:13s]" />
          </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." className="px-6 py-6" />
            <div className="relative flex-1" ref={constraintRef}>
              {
                hobbies.map(item => (
                  <motion.div key={item.title}
                    className="inline-flex items-center cursor-grabbing gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                    }} drag dragConstraints={constraintRef}>
                    <span className="text-medium text-gray-950">{item.title}</span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))
              }
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:1.7s]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image src={SmileMemoji} alt="location" className="size-20" />
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
