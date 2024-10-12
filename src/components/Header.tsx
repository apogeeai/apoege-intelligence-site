import React from 'react';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Brain className="text-[#138190] mr-2" size={32} />
          <h1 className="text-2xl font-bold">Apogee Intelligence</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#services" className="hover:text-[#138190]">Services</a></li>
            <li><a href="#about" className="hover:text-[#138190]">About</a></li>
            <li><a href="#contact" className="hover:text-[#138190]">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;