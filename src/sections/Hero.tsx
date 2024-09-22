import memojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image";
import Arrowdown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg"

export const HeroSection = () => {
  return (
    <div className="relative">
    <div id="home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip" >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
      }}></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="6s"><SparkleIcon className="size-8 text-emerald-300/20"/></HeroOrbit>
      <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="6s"><SparkleIcon className="size-5 text-emerald-300/20"/></HeroOrbit>
      <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s"><div className="size-2 bg-emerald-300/20 rounded-full"/></HeroOrbit>
      <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s"><SparkleIcon className="size-10 text-emerald-300/20"/></HeroOrbit>
      <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s"><StarIcon className="size-12 text-emerald-300"/></HeroOrbit>
      <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="6s"><StarIcon className="size-8 text-emerald-300"/></HeroOrbit>
      <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="6s"><div className="size-2 bg-emerald-300/20 rounded-full"/></HeroOrbit>
      <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="6s"><SparkleIcon className="size-14 text-emerald-300/20"/></HeroOrbit>
      <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s"><div className="size-3 bg-emerald-300/20 rounded-full"/></HeroOrbit>
      <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="6s"><StarIcon className="size-28 text-emerald-300"/></HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-semibold">Available for new projects</div>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto px-2">
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Expectional User Experiences</h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">
          I specialize in transforming designs into functional, high-performing web applications.
          Lest's discuss your next project.
        </p>
      </div>
    </div>
      <div className="flex flex-col md:flex-row justify-center items-center absolute top-[95%] md:top-[90%] lg:top-[86%] left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4 z-50">
      <a href="#project"><button className="inline-flex items-center gap-2 border cursor-pointer border-white/15 px-6 h-12 rounded-xl"><span className="font-semibold">Explore My Work</span><Arrowdown className="size-4" /></button></a>
        <button className="inline-flex items-center gap-2 border cursor-pointer border-white bg-white text-gray-900 h-12 px-6 rounded-xl"><span className="font-semibold">👋</span><span>Let&apos;s Connect</span></button>
      </div>

      </div>
  );
};
