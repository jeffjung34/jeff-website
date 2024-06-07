import React from 'react';
import hobbiesContent from '../content/hobbies.json'; // Ensure the path is correct

const Hobbies = () => {
  return (
    <div id="about" className="p-8 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Hobbies</h2>
      {hobbiesContent.hobbies.map((paragraph, index) => (
        <p key={index} className="mb-4 text-gray-900 dark:text-gray-100">{paragraph}</p>
      ))}
    </div>
  );
}

export default Hobbies;
