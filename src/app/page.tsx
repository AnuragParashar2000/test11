import NewsContainer from '../components/NewsContainer';
import newsData from '../data/news.json';

export default function Home() {
  const validCategories = ["exam", "admission", "college", "all"];
  const filteredNews = newsData.news.filter((item) =>
    validCategories.includes(item.category)
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: NewsContainer */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-8 mt-8 text-center">
            Education News Portal
          </h1>
          <NewsContainer initialNews={filteredNews} />
        </div>

        {/* Right Section: Sidebar */}
        <aside className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold border-b pb-2 mb-4">The Big Stories</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                What is the latest program that you are offering in your institute...
              </a>
              <p className="text-gray-400 text-sm">27 Dec 2020</p>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                NMIMS LAT, MST and CET 2024 Registration to Close on March 10
              </a>
              <p className="text-gray-400 text-sm">27 Dec 2020</p>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                What is the latest program that you are offering in your institute...
              </a>
              <p className="text-gray-400 text-sm">27 Dec 2020</p>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Dr. R. Kamboj on Improving Physical Engineering and India
              </a>
              <p className="text-gray-400 text-sm">27 Dec 2020</p>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
