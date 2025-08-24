// 'use client'
import Biography from '@/components/Biography';
import Company from '@/components/Company/Company';
import JourneyToPolitics from '@/components/JourneyToPolitics/JourneyToPolitics';
import Mission from '@/components/Mission';
import Vision from '@/components/Vision';
import HeroAboutBanner from './HeroAboutBanner';




// import useFeatures from '@/hooks/useFeatures';




const About = () => {

  return (
    <div className='bg-white'>

     {/* banner section  */}
   <HeroAboutBanner/>

        {/* biography section  */}
     <Biography/>


                {/* Journey to politics  */}
  <section>
    <JourneyToPolitics/>
    
    </section>              
 


          {/* mission and vission section  */}
  <section className='flex flex-col items-center justify-center  md:gap-0 bg-[url(/Images/bg-1.gif)] bg-cover bg-center py-20'>

                   {/* mission  */}
  
<Mission/>


                       {/* vission  */}
<Vision/>
 
  </section>


                         {/* Company  */}

   <div>
  <Company/>
   </div>






    </div>
  );
};

export default About;