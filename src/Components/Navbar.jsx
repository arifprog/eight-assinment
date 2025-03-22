import React from 'react'
import { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import Card from './Card';



function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

  };


  return (
    <div className="w-full md:h-[191px] bg-[#E4E4E7] absolute">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center justify-between md:mx-20 md:h-[41px] relative mt-4">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center ml-2 md:ml-0">
            <img src="image/logo.png" alt="Logo" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 0 1 1.414-1.414l4.828 4.829 4.829-4.829a1 1 0 0 1 1.414 1.414l-4.829 4.828 4.829 4.828z" />
                ) : (
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav
  className={`flex flex-col md:flex-row md:items-center md:space-x-[35px] ${
    isMobileMenuOpen ? 'block' : 'hidden md:flex'
  } w-full md:w-auto mt-2 md:mt-0 text-[14px] ml-4 md:ml-0`}
>
  <a
    href="#"
    className="relative hover:font-bold text-[#71717A] hover:text-[#09090B] group"
  >
    Dashboard
    <span className="absolute bottom-[-30px] left-0 w-[80px] h-[3px] bg-[#09090B] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </a>
  <a
    href="#"
    className="relative hover:font-bold text-[#71717A] hover:text-[#09090B] group"
  >
    Incidents
    <span className="absolute bottom-[-30px] left-0 w-[80px] h-[3px] bg-[#09090B] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </a>
  <a
    href="#"
    className="relative hover:font-bold text-[#71717A] hover:text-[#09090B] group"
  >
    Locations
    <span className="absolute bottom-[-30px] left-0 w-[80px] h-[3px] bg-[#09090B] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </a>
  <a
    href="#"
    className="relative hover:font-bold text-[#71717A] hover:text-[#09090B] group"
  >
    Activities
    <span className="absolute bottom-[-30px] left-0 w-[80px] h-[3px] bg-[#09090B] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </a>
  <a
    href="#"
    className="relative hover:font-bold text-[#71717A] hover:text-[#09090B] group"
  >
    Documents
    <span className="absolute bottom-[-30px] left-0 w-[80px] h-[3px] bg-[#09090B] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </a>
  <a
    href="#"
    className="relative hover:font-bold text-[#71717A] hover:text-[#09090B] group"
  >
    Cypher AI
    <span className="absolute bottom-[-30px] left-0 w-[80px] h-[3px] bg-[#09090B] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </a>
</nav>

        {/* User Profile */}
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <button className="w-[40px] h-[40px] rounded-full">
            <img src="image/notification.png" alt="" />
            {/* Notification Icon */}
          </button>
          <div className="flex items-center space-x-4">
            <img src="image/avatar.png" alt="Avatar" className="w-[40px] h-[40px] rounded-full" />
            <div>
              <p className="text-[16px] font-[600] text-[#71717A]">Usman Zafar</p>
              <p className="text-[14px] font-[400] text-[#71717A]">usmanzafar@gmail.com</p>
            </div>
          </div>
        </div>
      </header>

      {/* Horizontal Line */}
      <hr className="border-[1px] border-[#71717A60] my-[18px]" />

      {/* Main Content */}
      <main className=" md:mx-20  py-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <p className="text-[12px] text-[#71717A] font-[400]">Welcome back</p>
            <h1 className="text-[26px] text-[#09090B] font-[700]">Dashboard</h1>
          </div>
          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
            <div className="flex items-center relative w-full md:w-auto ">
              <div className="absolute  flex items-center w-[18px] h-[18px] py-[20px] left-2">
                <IoIosSearch />
              </div>
              <input
                type="text"
                placeholder="Search incident"
                className="bg-[#FAFAFA] rounded-[6px] md:w-[190px] h-[42px] px-8 pr-10 text-[12px] text-[#71717] font-[400] "
              />

            </div>
            <div className="bg-[#FAFAFA] rounded-[6px] md:w-[148px] h-[42px] text-[12px] text-[#71717] font-[400] py-3 px-4 w-full">
              Sort By: Date modified 
            </div>
            <button className="bg-[#F26922] py-2 px-6 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-300 w-full md:w-[108px] h-[42px] text-[12px] text-[#FAFAFA] font-[700]">
              Cypher AI
            </button>
          </div>
        </div>
        
      </main>
    </div>
  );
}
export default Navbar;
