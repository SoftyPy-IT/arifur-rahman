'use client'
import { IoMenuSharp } from 'react-icons/io5';
import './navbar.css';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useFeatures from '@/hooks/useFeatures';
import { TFeatures } from '@/types/types';

type Route={
  navItem:string;
  route:string
}

const routes:Route[] = [
  {navItem:"Home",route:"/"},
  {navItem:"About",route:"/about"},
  {navItem:"Events",route:"/events"},
  {navItem:"Gallery",route:"/gallery"},
  {navItem:"Articles",route:"/articles"},
  {navItem:"Voice  on  Media",route:"/media"},
  {navItem:"Contact",route:"/contact"}
                        ]


const Navbar = () => {
  const [scrolling,setScrolling] = useState<boolean>(false);
  const features:TFeatures = useFeatures();
  const pathName = usePathname();
  const [openSidebar,setOpenSideBar] = useState<boolean>(false);

useEffect(() => {
  if (typeof window !== 'undefined') {
    AOS.init();
  }
}, []);


  useEffect(()=>{
    if (typeof window === 'undefined') return;
    let scrollTimeout : NodeJS.Timeout
    const handleScroll =()=>{
    if(window.scrollY>0){
      setScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout= setTimeout(() => {
          setScrolling(false);
      }, 1000);
    }else{
      setScrolling(false);
    }
  }

 window.addEventListener('scroll',handleScroll);
 return ()=>{
  clearTimeout(scrollTimeout);
  window.removeEventListener('scroll',handleScroll);
 } 

  },[])


  return (
    <div className={`fixed z-20 w-full bg-white shadow-lg transition-all duration-1000 top-0 ${scrolling?'border-b-4 bg-cover bg-no-repeat  border-blue-700 py-2 ': ''} `}>

    <nav className='container mx-auto px-10 flex justify-between py-2 lg:py-0  items-center h-[50px]'>

         {/* nav start  */}
    <div  data-aos="fade-down"
         
          data-aos-duration="500" >
    
      <Image src={features?.logo||""} alt='logo' width={150} height={75} className={`w-[100px] h-[50px] md:w-[150px] md:h-[60px] relative  z-30 border border-blue-700 pr-2 bg-white border-l-2 border-b-2 transition-all duration-500
        ${scrolling?'top-0':'top-5'}
        `}></Image>
   
    </div>

           {/* nav items  */}
     <div 
         data-aos="fade-down"
         data-aos-duration="500"
     className={`lg:flex hidden gap-5 transition-all duration-1000 relative text-black `}>

      {
        routes.map((item,idx)=>  <Link className='hover-button hover:text-orange-500'  key={idx} href={item.route}>
        <button      
        className={`hover:text-orange-500 ${scrolling?'text-black':''}
          ${pathName === item.route  ?'text-orange-500 ':''} ${pathName === item.route && scrolling ?'text-orange-500 font-bold':''}`}>{item.navItem}
         <span className="border top-left"></span>
         <span className="border top-right"></span>
         <span className="border bottom-right"></span>
         <span className="border bottom-left"></span>
        </button>
        </Link>)
      }
     
      </div> 

      <div>

   
 </div>          



           {/* nav item for small device  */}
<div className='block lg:hidden '>
{/* Overlay */}
<div className={`  ${openSidebar?'fixed inset-0 bg-black bg-opacity-50 ':' '}`}></div>

{
!openSidebar&& <IoMenuSharp onClick={()=>setOpenSideBar(!openSidebar)} className='text-3xl text-gray-600 relative z-10' />
}

<div onClick={()=>setOpenSideBar(!openSidebar)}  className={`bg-white shadow-2xl fixed transition-all duration-1000 z-50 top-0   flex flex-col   py-2  w-[200px]  pt-10 ${openSidebar?'right-0 ':'-right-[300px]'} h-screen`}>
<AiOutlineClose className='text-2xl text-rose-500 absolute left-4 top-2' />

{
routes?.map((item,idx)=><Link href={item.route} key={idx}> <p  className={`py-2 hover:bg-blue-900 hover:text-orange-500 px-6 border-b   ${pathName === item.route  ?'text-orange-500 ':''} `}>{item.navItem}</p></Link>)
}

  
</div>


</div>  

    </nav>
  </div>
   
  );
};

export default Navbar;