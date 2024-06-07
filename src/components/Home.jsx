import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Home = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const fadeInDelayed = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <animated.div style={fadeIn} className="text-5xl font-bold text-gray-900 dark:text-gray-100">Hi! My name is Jeff</animated.div>
      <animated.div style={fadeInDelayed} className="text-2xl mt-4 text-gray-900 dark:text-gray-100">I am currently a 4th year student at Duke University</animated.div>
    </div>
  );
}

export default Home;
