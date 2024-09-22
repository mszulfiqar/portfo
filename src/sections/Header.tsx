"use client";
import { useState, useEffect } from 'react';

export const Header = () => {
  const [showNav, setShowNav] = useState(true); // To track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // If scrolling down and scrolled more than 100px, hide the navbar
      setShowNav(false);
    } else {
      // If scrolling up, show the navbar
      setShowNav(true);
    }

    setLastScrollY(currentScrollY); // Update the last scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); 


  return (
    <div className={`flex justify-center items-center fixed top-5 w-full transition-transform duration-300 z-10 ${
      showNav ? '=translate-y-0' : '-translate-y-[55px]'
    }`}>
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur ">
        <a href="#home" className="nav-item">Home</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#project" className="nav-item">Project</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  )
};
