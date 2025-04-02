import React from 'react'
import { useState } from 'react'

function IncidentStarted() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };
  return (
    <div className="w-full bg-[#E4E4E7] font-[primary] min-h-screen py-3 ">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center justify-between md:mx-20 md:h-[59px] ">
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
          className={`flex flex-col md:flex-row md:items-center md:space-x-[35px] ${isMobileMenuOpen ? 'block' : 'hidden md:flex'
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
      <hr className="border-[1px] border-[#71717A60] my-[10px] " />

      <div className="bg-[#FFFFFF] min-h-screen flex flex-col items-center justify-center">
        {/* Title and Subtitle */}
        <div className="text-center mb-12 md:w-[613px] md:h-[92px]">
          <h1 className="md:w-[613px] md:h-[41px] text-[32px] font-bold text-[#09090B]">Let's get started</h1>
          <p className="md:w-[468px] md:h-[37px] text-[16px] text-[#71717A]  leading-[26px] mx-auto px-4 ">
            Lorem ipsum dolor sit general sac mascho werhol, Lorem ipsum dolor sit general sac mascho werhol, Lorem ipsum dolor sit gene
          </p>
        </div>

        {/* Progress Bar */}
        <div className="relative w-[90%] max-w-[598px] h-[3px] mb-12 bg-[#E4E4E7] mx-auto">
          {/* Active Progress */}
          <div
            className="absolute top-0 left-0 h-full bg-[#F26922] transition-all duration-300"
            style={{ width: `${(activeStep - 1) * (100/2)}%` }}
        
          ></div>

          {/* Step 1 */}
          <div className="absolute top-[-13px] left-0 w-[29px] h-[29px] rounded-full cursor-pointer z-10"
            onClick={() => handleStepClick(1)}
            style={{ backgroundColor: activeStep >= 1 ? '#F26922' : '#D1D5DB' }}>
          </div>

          {/* Step 2 */}
          <div className="absolute top-[-13px] left-[50%] translate-x-[-50%] w-[29px] h-[29px] rounded-full cursor-pointer z-10"
            onClick={() => handleStepClick(2)}
            style={{ backgroundColor: activeStep >= 2 ? '#F26922' : '#D1D5DB' }}>
          </div>

          {/* Step 3 */}
          <div className="absolute top-[-13px] right-0 w-[29px] h-[29px] rounded-full cursor-pointer z-10"
            onClick={() => handleStepClick(3)}
            style={{ backgroundColor: activeStep >= 3 ? '#F26922' : '#D1D5DB' }}>
          </div>
        </div>


        {/* Steps */}
        <div className=" md:w-[815px] md:h-[270px] flex flex-col md:flex-row justify-center items-center space-x-4 space-y-8 md:space-y-0">
          {/* Step 1 */}
          <div className={`bg-[#E4E4E7] w-full h-[269px] rounded-[10px] ml-4 md:ml-0 p-6 cursor-pointer ${activeStep === 1 ? 'border-2 border-[#F26922]' : ''}`} onClick={() => handleStepClick(1)}>
            <div className="w-[54px] h-[54px] flex items-center justify-center">
              <img src="image/Frame1.png" alt="Icon 1" className="w-[54px] h-[54px]" />
            </div>
            <h2 className="w-[190px] h-[43px] text-[20px] font-[700] text-[#09090B] mt-10">What type of incident?</h2>
            <p className="mt-6 w-[195px] h-[32px] text-[14px] font-[400] text-[#71717A] pr-10">Choose the category that best describes the incident.</p>
          </div>

          {/* Step 2 */}
          <div className={`bg-[#E4E4E7] w-full h-[269px] rounded-[10px] ml-4 md:ml-0 p-6 cursor-pointer ${activeStep === 2 ? 'border-2 border-[#F26922]' : ''}`} onClick={() => handleStepClick(2)}>
            <div className="w-[54px] h-[54px] flex items-center justify-center">
              <img src="image/Frame2.png" alt="Icon 1" className="w-[54px] h-[54px]" />
            </div>
            <h2 className="w-[190px] h-[43px] text-[20px] font-[700] text-[#09090B] mt-10">Tell us about the incident?</h2>
            <p className="mt-6 w-[195px] h-[32px] text-[14px] font-[400] text-[#71717A] pr-10">Let’s connect the dots and see where to start.</p>
          </div>

          {/* Step 3 */}
          <div className={`bg-[#E4E4E7] w-full h-[269px] rounded-[10px] p-6 cursor-pointer ${activeStep === 3 ? 'border-2 border-[#F26922]' : ''}`} onClick={() => handleStepClick(3)}>
            <div className="w-[44px] h-[44px] flex items-center justify-center">
              <img src="image/Frame3.png" alt="Icon 1" className="w-[44px] h-[44px]" />
            </div>
            <h2 className="w-[190px] h-[43px] text-[20px] font-[700] text-[#09090B] mt-10">Where did the incident occur?</h2>
            <p className="mt-6 w-[195px] h-[32px] text-[14px] font-[400] text-[#71717A] pr-6">Lorem ipsum dolar sit general sac mascho werho</p>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="mt-12">
          <button className="bg-[#F26922] text-white px-6 py-2 rounded-md">Get started</button>
        </div>
      </div>

    </div>
  )
}


export default IncidentStarted;