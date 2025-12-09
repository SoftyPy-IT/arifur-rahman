import Link from 'next/link';
import React from 'react';
import { GrGallery } from 'react-icons/gr';
import { MdEvent, MdPermMedia } from 'react-icons/md';

const quickLinks = [
  {
    title: 'Events',
    href: '/events',
    icon: <MdEvent />,
    buttonText: 'View Schedule',
    iconColor: 'text-orange-500',
    hoverBg: 'hover:bg-orange-100',
    hoverIconColor: 'group-hover:text-orange-600',
    hoverCircleBg: 'group-hover:bg-orange-200',
  },
  {
    title: 'Gallery',
    href: '/gallery',
    icon: <GrGallery />,
    buttonText: 'View Gallery',
    iconColor: 'text-blue-500',
    hoverBg: 'hover:bg-blue-100',
    hoverIconColor: 'group-hover:text-blue-600',
    hoverCircleBg: 'group-hover:bg-blue-200',
  },
  {
    title: 'Media',
    href: '/media',
    icon: <MdPermMedia />,
    buttonText: 'View Media',
    iconColor: 'text-green-500',
    hoverBg: 'hover:bg-green-100',
    hoverIconColor: 'group-hover:text-green-600',
    hoverCircleBg: 'group-hover:bg-green-200',
  },
];

const QuickLinksSection = () => {
  return (
    <div className='flex flex-col md:flex-row gap-6 lg:gap-10'>
      {quickLinks.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-duration="500"
          className={`group lg:w-[280px] rounded-lg p-5 space-y-6 text-center shadow-2xl flex flex-col justify-center items-center border bg-white transition-all duration-300 ease-in-out mb-4 md:mb-0 ${item.hoverBg}`}
        >
          {/* Icon with hover effect */}
          <div
            className={`-mt-[60px] rounded-full p-6 md:p-5 lg:p-6 bg-white transition-all duration-300 transform group-hover:scale-110 ${item.hoverCircleBg}`}
          >
            <span
              className={`text-4xl transition-colors duration-300 ${item.iconColor} ${item.hoverIconColor}`}
            >
              {item.icon}
            </span>
          </div>

          {/* Title */}
          <h3 className='text-3xl font-bold'>{item.title}</h3>

          {/* Link Button */}
          <Link href={item.href}>
            <button className='hover-border-button'>{item.buttonText}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default QuickLinksSection;
