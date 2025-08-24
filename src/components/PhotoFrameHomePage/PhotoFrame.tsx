/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./style.css";

const PhotoFrame = () => {
  return (
    <div className="container">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:px-10">

        <div className='space-y-5 p-5 text-center lg:text-left lg:w-1/2'>
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className='text-orange-500 font-semibold'>
            A Leader for Progress and Unity
          </h3>
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className='text-4xl font-bold text-blue-900'>
            A Voice for the Voiceless, A Leader for the Nation.
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Mojumder Arifur Rahman, has played a pivotal role in the development and progress of his constituency. A dedicated member of the Bangladesh Nationalist Party (BNP), Arifur Rahman&apos;s leadership has been marked by his commitment to improving the infrastructure, education, and social welfare of the people in his region. From building vital bridges to enhancing local communication systems, his contributions have significantly impacted the lives of thousands. Arifur Rahman continues to advocate for sustainable development and the upliftment of his community.
          </p>          
        </div>

        <div>
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className="gallery "
            >

            <img
              src="/Images/mr-21.jpg"
              alt="a house on a mountain"

            />

            <img
              src="/Images/mr-8.jpg"
              alt="some pink flowers"
            />

            <img
              src="/Images/mr-15.jpg"
              alt="big rocks with some trees"
            />

            <img
              src="/Images/WhatsApp Image 2025-01-01 at 20.55.21.jpeg"
              alt="a waterfall, a lot of tree and a great view from the sky"
            />

            <img
              src="/Images/mr-23.jpg"
              alt="a cool landscape"
            />

            <img
              src="/Images/electionCampaign2.jpg"
              alt="inside a town between two big buildings"
            />

            <img
              src="/Images/mr-3.jpg"
              alt="a great view of the sea above the mountain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoFrame;

