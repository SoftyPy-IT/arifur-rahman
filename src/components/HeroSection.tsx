import React from 'react';

const HeroSection = ({imageUrlMd,imageUrlSm,title,subTitle,category}:{imageUrlMd:string,
  imageUrlSm:string,title:string,subTitle:string,category:string}) => {
 
  return (
   <div>
                       {/* md screen  */}
     <div
    style={{backgroundImage:`url(${imageUrlMd})`}}
    className={`${category === 'About'?'h-[500px]':'h-[400px]'} hidden  bg-cover bg-center bg-fixed md:flex justify-center items-center relative py-8 px-24 lg:pb-14  `}>
     {/* Overlay */}
     <div className="absolute inset-0 bg-black bg-opacity-30"></div>

     {/* Content */}
     <div className="relative z-10 w-full lg:w-[500px] text-center space-y-3 border-4 border-white py-8">
     

       {/* Title */}
       <h3 className="text-5xl font-bold text-white px-3">
        {title}
       </h3>

       {/* Description */}
       <p className="text-gray-100 text-xl px-3">
      {subTitle}
       </p>

     </div>
   </div>

                    {/* sm screen  */}
    <div
    style={{backgroundImage:`url(${imageUrlSm})`}}
    className={`${title === 'About Me'?'h-[500px]':'h-[400px]'} md:hidden   bg-cover bg-center bg-fixed flex justify-center items-center relative py-8 px-10 lg:pb-14  `}>
     {/* Overlay */}
     <div className="absolute inset-0 bg-black bg-opacity-30"></div>

     {/* Content */}
     <div className="relative z-10 w-full lg:w-1/3 text-center space-y-3 border-4 border-white py-8 ">
     

       {/* Title */}
       <h3 className="text-5xl font-bold text-white px-2">
        {title}
       </h3>

       {/* Description */}
       <p className="text-gray-100 text-xl px-2">
      {subTitle}
       </p>

     </div>
   </div>
   </div>
  );
};

export default HeroSection;