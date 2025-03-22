import React from 'react'

function Card() {

  const data = [
    {
      imageUrl: 'image/card1.png',
      title: 'Whitechapel Rd.',
      location: 'Tulare County, Los Angles, CA 23415',
      price: '$1,456,654.00',
    },
    {
      imageUrl: 'image/card2.png',
      title: 'Whitechapel Rd.',
      location: 'Tulare County, Los Angles, CA 23415',
      price: '$1,456,654.00',
    },
    {
      imageUrl: 'image/card3.png',
      title: 'Tulare County',
      location: 'Tulare County, Los Angles, CA 23415',
      price: '$1,456,654.00',
    },
    {
      imageUrl: 'image/card4.png',
      title: 'Tulare County',
      location: 'Tulare County, Los Angles, CA 23415',
      price: '$1,456,654.00',
    },
    {
      imageUrl: 'image/card5.png',
      title: 'Tulare County',
      location: 'Tulare County, Los Angles, CA 23415',
      price: '$1,456,654.00',
    },
    {
      imageUrl: 'image/card6.png',
      title: 'Tulare County',
      location: 'Tulare County, Los Angles, CA 23415',
      price: '$1,456,654.00',
    },
  ];

  return (
    <div className='w-full h-[709px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-x-11 ml-2 md:ml-0 '>
      {data.map((item, index) => (
        <div key={index} className='shadow-md w-[306px] h-[337px]'>
          <div className='relative'>

            <img src={item.imageUrl} alt='card' className='w-[306px] h-[253px] object-cover rounded-lg' />
            <div className='absolute top-[10px] right-[10px] bg-[#FAFAFA] p-[10px] rounded-[40px] flex items-center w-[87px] h-[36px] gap-[5px]'>
              <img src='image/thunder.png' alt='' />
              <span className=' font-[700] text-[12px] leading-[30px] text-[#18181B]'> Blizzard</span>

            </div>
          </div>
          <div className='p-'>
            <h1 className='font-[700] text-[16px] leading-[30px] text-[#09090B]'>{item.title}</h1>
            <p className='font-[400] text-[14px] leading-[30px] text-[#71717A]'>{item.location}</p>
            <p className='font-[700] text-[16px] leading-[30px] text-[#09090B]'>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}


export default Card