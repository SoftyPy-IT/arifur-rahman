/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./style.css";


const PhotoFrame = () => {
  return (
    <>
    {/* <Image src={bgimg} alt="img"/> */}
    <div className=" container my-10">

      <div className="flex flex-col-reverse lg:flex-row justify-between items-center md:gap-12 px-3 lg:px-10">
        <div className="space-y-3 md:space-y-5 md:p-5 text-center lg:text-left lg:w-1/2">
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-orange-500 md:font-semibold"
          >
            A Leader for Progress and Unity
          </h3>
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="text-2xl md:text-4xl font-bold text-white"
          >
            A Voice for the Voiceless, A Leader for the Nation.
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" className=" text-sm md:text-base text-justify">
            Arifur Rahman, has played a pivotal role in the development and
            progress of his constituency. A dedicated member of the Bangladesh
            Nationalist Party (BNP), Arifur Rahman&apos;s leadership has been
            marked by his commitment to improving the infrastructure, education,
            and social welfare of the people in his region. From building vital
            bridges to enhancing local communication systems, his contributions
            have significantly impacted the lives of thousands. Arifur Rahman
            continues to advocate for sustainable development and the upliftment
            of his community.
          </p>
        </div>

        <div>
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className="gallery "
          >
            {/* 3 */}
            <img src="/Images/1.webp" alt="a house on a mountain" />

            {/* middle center image */}
            <img src="/Images/2.webp" alt="some pink flowers" />

            {/* 1 */}
            <img src="/Images/3.webp" alt="big rocks with some trees" />

            {/* 6 */}
            <img
              src="/Images/4.webp"
              alt="a waterfall, a lot of tree and a great view from the sky"
            />

            {/* 2 */}
            <img src="/Images/5.webp" alt="a cool landscape" />

            {/* 7 */}
            <img
              src="/Images/6.webp"
              alt="inside a town between two big buildings"
            />

            {/* 5 */}
            <img
              src="/Images/7.webp"
              alt="a great view of the sea above the mountain"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PhotoFrame;
