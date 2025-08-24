/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useFeatures from '@/hooks/useFeatures';
import { TContact } from '@/types/types';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';

type TContactData ={
	contact:TContact;
	isLoading:any;
}

const Contact = () => {
	const {contact,isLoading}:TContactData = useFeatures();
  return (
   <div>
		{
			!isLoading && 
			<div
			className='flex justify-center items-center  min-h-screen  my-auto'>
      <section
	    data-aos="zoom-in"
		  data-aos-duration="2500"	
			style={{backgroundImage:`url(${contact?.bgImageUrl as string})`}}
			className="py-6 shadow-2xl  text-white  bg-center bg-cover  md:h-[400px]">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
	<div
	className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x relative z-10 ">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Contact Us</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>{contact?.address}</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>{contact?.phone}</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>{contact?.email}</span>
				</p>
			</div>
                     {/* social media  */}
	<div className="flex justify-center mt-8 space-x-3">
					<Link rel="noopener noreferrer" href={contact?.facebookUrl as string} target='_blank' title="Facebook" className="flex items-center p-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
							<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
						</svg>
					</Link>
					<a rel="noopener noreferrer" href={contact?.LinkedInUrl as string} title="Linkedin" className="flex items-center p-1">
           <FaLinkedin className='text-2xl'/>
					</a>
					<a rel="noopener noreferrer" href={contact?.youTubeUrl as string} title="YouTube" className="flex items-center p-1">
			  <FaYoutube className='text-2xl'/>
					</a>
  </div>
		</div>


		<form  className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-2">Full name</span>
				<input type="text" placeholder="Your Name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600  py-1 pl-3 bg-white text-gray-600" />
			</label>
			<label className="block">
				<span className="mb-2">Email address</span>
				<input type="email" placeholder="Your Email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600  pl-3 py-1 bg-white text-gray-600" />
			</label>
			<label className="block">
				<span className="mb-2">Message</span>
				<textarea rows={3} className="block w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-600 focus:dark:ring-violet-600  py-1 pl-3 bg-white"></textarea> 
			</label>
			<button type="button" className=" hover-border-button ">Submit</button>
		</form>
	</div>
</section>
    </div>
		}
	 </div>
  );
};

export default Contact;