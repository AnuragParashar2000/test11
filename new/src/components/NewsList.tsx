import { NewsItem } from '@/lib/types'
import NewsCard from './NewsCard'

interface NewsListProps {
  news: NewsItem[];
}

export default function NewsList({ news }: NewsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  )
}