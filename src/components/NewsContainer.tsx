'use client'

import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import TabFilter from './TabFilter'
import NewsList from './NewsList'
import { NewsItem } from '../lib/types'

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
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />
      
      <NewsList news={filteredNews} />
    </div>
  )
}
