import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // If scroll down, hide the navbar
      setShowNavBar(false);
    } else {
      // If scroll up, show the navbar
      setShowNavBar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full transition-transform duration-300 ${showNavBar ? 'translate-y-0' : '-translate-y-full'} flex justify-between items-center p-4 shadow-md bg-gray-200 dark:bg-gray-800`}>
      <div className="flex items-center">
        <img src="jeff.jpg" alt="Logo" className="h-10 w-10 mr-2" />
        <span className="text-xl font-bold text-gray-800 dark:text-gray-200">Jeff's Portfolio</span>
      </div>
      <div className="flex space-x-6">
        <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Experience</a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Projects</a>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">More About Me</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">Contact</a>
      </div>
    </nav>
  );
}

export default NavBar;
