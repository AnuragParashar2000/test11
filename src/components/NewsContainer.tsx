'use client'

import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import TabFilter from './TabFilter'
import NewsList from './NewsList'
import { NewsItem, Tab } from '../lib/types'

const tabs: Tab[] = [
  { id: '1', name: 'All News', category: 'all' },
  { id: '2', name: 'Exam News', category: 'exam' },
  { id: '3', name: 'Admission', category: 'admission' },
  { id: '4', name: 'College News', category: 'college' },
]

interface NewsContainerProps {
  initialNews: NewsItem[];
}

export default function NewsContainer({ initialNews }: NewsContainerProps) {
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(initialNews)
  const [selectedTab, setSelectedTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    filterNews(searchQuery, selectedTab)
  }, [searchQuery, selectedTab, initialNews])

  const filterNews = (query: string, category: string) => {
    let filtered = initialNews

    // Apply category filter
    if (category !== 'all') {
      filtered = filtered.filter(item => item.category === category)
    }

    // Apply search filter
    if (query) {
      const searchLower = query.toLowerCase()
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchLower) ||
        item.institution.toLowerCase().includes(searchLower)
      )
    }

    setFilteredNews(filtered)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleTabChange = (category: string) => {
    setSelectedTab(category)
  }

  return (
    <div className="space-y-8">
      <SearchBar onSearch={handleSearch} />
      
      <TabFilter 
        tabs={tabs}
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />
      
      <NewsList news={filteredNews} />
    </div>
  )
}