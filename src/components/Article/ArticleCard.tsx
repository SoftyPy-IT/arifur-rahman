import { TArticle } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';


const ArticleCard = ({article}:{article:TArticle}) => {
  return (

<div
key={article._id}
className="bg-white backdrop-blur-md rounded-lg overflow-hidden shadow-md hover:shadow-xl transition md:w-96"
>
<div className="relative h-48 w-full overflow-hidden">
	<Image
		src={article.imageUrl}
		alt={article.title}
		fill
		className="object-cover hover:scale-105 transition"
	/>
</div>
<div className="p-5">
<div className='flex items-center gap-2'>
	<span><FaCalendar/></span>
<p className="text-sm text-gray-600 mb-1">{new Date(article.publishedDate).toLocaleDateString()}</p>
</div>
	<h3 className="text-md font-semibold mb-2 text-blue-950">{article.title.substring(0, 70)}...</h3>
	<Link href={`/articles/${article._id}`} className="text-orange-600 hover:underline">
		Read More →
	</Link>
</div>
</div>
  );
};

export default ArticleCard;