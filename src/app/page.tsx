import NewsContainer from '../components/NewsContainer'
import newsData from '../data/news.json'

export default function Home() {
  const validCategories = ["exam", "admission", "college", "all"];
  const filteredNews = newsData.news.filter((item) =>
    validCategories.includes(item.category)
  );
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 mt-8">Education News Portal</h1>
        <NewsContainer initialNews={filteredNews} />
      </div>
    </div>
  )
}
