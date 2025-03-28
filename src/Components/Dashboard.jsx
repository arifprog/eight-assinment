import React, { useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import { IoMdClose } from 'react-icons/io';
import { CiCamera } from "react-icons/ci";
import { PiFolderSimpleThin } from "react-icons/pi";
import { GoPaperclip } from "react-icons/go";

function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatButton, setShowChatButton] = useState(true);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setShowChatButton(!showChatButton);
  };

  return (
    <div className=" flex flex-col relative">
      <div className="relative min-h-screen">
        <Navbar />
      </div>
      <div className="md:ml-[80px] top-[34rem] md:top-[15rem] absolute">
        <Card />
      </div>
      {/* Chat Box */}
      <div
        className={`
          w-[90%] md:w-[331px] h-[475px] bg-[#F4F4F5] ml-1 md:ml-0 mr- md:mr-16 flex-col rounded-[12px] shadow-md
          fixed bottom-20 right-4 z-50 md:top-160
          md:absolute md:bottom-5 md:right-5
          transition-all duration-300
          ${isChatOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}
        `}
      >
        <div className="flex justify-between items-center p-4 bg-[#F26922] text-white rounded-t-lg">
          <h1 className="font-bold text-[18px] text-[#FAFAFA] font-[primary]">Chat with Cypher</h1>
        </div>
        <div className="mx-auto my-4 w-[301px] h-[370px] space-y-3">
          <div className="w-[213px] h-[57px] rounded-[7px] bg-[#3F3F46] text-[#FFFFFF] text-[12px] font-[400] flex justify-self-end items-center px-4 font-primary mr-5 md:mr-0">Lorem ipsum dolar sit general sac mascho werho</div>
          <div className="w-[213px] h-[57px] rounded-[7px] bg-[#F4F4F5] text-zinc-600 text-[12px] font-[400] flex justify-self-start items-center px-4 font-primary border-1 border-zinc-200">Lorem ipsum dolar sit general sac mascho werho</div>
          <div className="w-[213px] h-[57px] rounded-[7px] bg-[#F4F4F5] text-zinc-600 text-[12px] font-[400] flex justify-self-start items-center px-4 font-primary border-1 border-zinc-200">Lorem ipsum dolar sit general sac mascho werho</div>
          <div className="w-[213px] h-[57px] rounded-[7px] bg-[#3F3F46] text-[#FFFFFF] text-[12px] font-[400] flex justify-self-end items-center px-4 font-primary mr-5 md:mr-0">Lorem ipsum dolar sit general sac mascho werho</div>


          <div className="w-[301px] h-[42px] rounded-[6px] bg-[#F4F4F5] text-zinc-500 text-[12px] font-[400] flex justify-self-start items-center px-4 font-primary border-1 border-zinc-200">Enter your question...</div>
          <div className="w-[301px] h-[30px]  bg-[#F4F4F5] text-zinc-500 text-[12px] font-[400]  px-4 font-primary border-1 border-zinc-200 flex justify-between items-center">
            <span className='flex justify-between items-center w-[86px] h-[24px]'>
              <CiCamera className='w-[24px] h-[24px] text-zinc-500' />
              <PiFolderSimpleThin className='w-[24px] h-[24px] text-zinc-500' />
              <GoPaperclip className='w-[20px] h-[20px] text-zinc-500' />
            </span>
            <span className='w-[80px] h-[30px] text-[#FFFFFF] text-[12px] font-[400] bg-[#F26922] rounded-[15.5px] font-primary flex justify-center items-center'>
              Send
            </span>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-5 right-4 z-50 md:bottom-5 md:right-5 md:static md:ml-[85rem] md:mt-[25rem]">
        <button
          onClick={toggleChat}
          className="w-[45px] h-[45px] md:w-[77px] md:h-[77px] bg-[#F26922] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
          aria-label={isChatOpen ? "Close Chat" : "Open Chat"}
        >
          {isChatOpen ? (
            <div className="bg-white w-[45px] h-[45px] md:w-[77px] md:h-[77px] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 ">
              <IoMdClose className="text-black text-2xl md:text-4xl" />
            </div>
          ) : (
            <span className="text-[#FFFFFF] text-[30px] md:text-[55.2px]  font-[400] leading-[37px] font-[secondary]">C</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default Dashboard;