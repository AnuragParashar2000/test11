'use client';

import { NewsItem } from '@/lib/types';
import { format } from 'date-fns';

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      {/* Dynamically render the image */}
      <img 
        src={news.image} // Use the `image` field from the news data
        alt={news.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {news.title}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {news.category}
      </p>
      <time className="text-sm text-gray-500" suppressHydrationWarning>
        {format(new Date(news.date), 'dd MMM yyyy, h:mma')}
      </time>
    </article>
  );
}
