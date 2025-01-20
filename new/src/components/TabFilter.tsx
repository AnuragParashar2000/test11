'use client'

interface TabFilterProps {
  selectedTab: string;
  onTabChange: (category: string) => void;
}

export default function TabFilter({ selectedTab, onTabChange }: TabFilterProps) {
  const tabs = [
    { id: 'all', name: 'All News' },
    { id: 'exam', name: 'Exam News' },
    { id: 'admission', name: 'Admission Alert' },
    { id: 'college', name: 'College News' },
    { id: 'latest', name: 'Latest News' },
  ]

  return (
    <div className="border-b border-gray-200">
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-4 px-1 relative ${
              selectedTab === tab.id
                ? 'text-blue-600 font-medium'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.name}
            {selectedTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}