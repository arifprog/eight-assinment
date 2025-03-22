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
        <div className='w-full h-[709px] bg-emerald-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 lg:px-16 '>
            {data.map((item, index) => (
                <div key={index} className='shadow-md w-[306px] h-[337px]'>
                    <img src={item.imageUrl} alt='card' className='w-[306px] h-[253px] object-cover rounded-lg'/>
                    <div className='p-'>
                        <h1 className='text-xl font-semibold'>{item.title}</h1>
                        <p className='text-sm text-gray-500'>{item.location}</p>
                        <p className='text-lg font-semibold mt-2'>{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Card