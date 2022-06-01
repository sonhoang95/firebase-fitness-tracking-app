import React from 'react';
import Title from '../components/Title';

const Navbar = () => {
  return (
    <header>
      <div className="bg-blue-700 py-8 mb-8">
        <Title
          title="Fitness Tracking App"
          position="center"
          largeTitle={true}
        />
      </div>
    </header>
  );
};

export default Navbar;
