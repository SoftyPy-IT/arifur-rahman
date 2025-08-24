"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import useFeatures from '@/hooks/useFeatures';
import { TBanner, TCompany, TContact } from '@/types/types';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';


type TFooterInfo ={
	     banner: TBanner;
			 company:TCompany;
			 contact:TContact;
			 isLoading:any
}

const Footer = () => {
	const {contact,banner,company,isLoading}:TFooterInfo = useFeatures();
  return (
<footer className="px-4 divide-y  bg-blue-950 text-gray-100">
	{
		!isLoading&&
		<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3  ">
			<a rel="noopener noreferrer" href="#" className="flex flex-col justify-center space-x-3 lg:justify-start">
				
				<div className='max-w-[300px]' >
				<p className=" text-2xl font-semibold">{banner?.name}</p>
				<p className='text-sm'>{banner?.designation}</p>
				</div>
			</a>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-900 font-semibold">Visit</h3>
				<ul className="space-y-1">
				<li>
						<a rel="noopener noreferrer" href="/about">About</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="/articles">Articles</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="/events">Events</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="gallery">Gallery</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="/media">Voice on Media</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-900 font-semibold">Company</h3>
				<ul className="space-y-1">	
          <li>
						<a rel="noopener noreferrer" href={company?.websiteUrl} target='_blank'>{company?.companyName}</a>
					</li>
				
					<li>
						<a rel="noopener noreferrer" href="https://www.shouravgroup-bd.com/privacy-policy/" target='_blank'>Privacy & Policy</a>
					</li>
				
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase dark:text-gray-900 font-semibold">Contact</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Phone No. <span>{contact?.phone}</span></a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Email: {contact?.email}</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Office Location: {contact?.address}</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase dark:text-gray-900 font-semibold">Social media</div>
				<div className="flex justify-start space-x-3">
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
		</div>
	</div>
	}
	<div className="py-6 text-sm text-center dark:text-gray-600">© {new Date().getFullYear()} Mojumder Arifur Rahman. All rights reserved.</div>
</footer>
  );
};

export default Footer;