'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-900 font-semibold">
              University
            </Link>
            <Link href="/colleges" className="text-gray-600 hover:text-gray-900">
              Colleges
            </Link>
            <Link href="/exams" className="text-gray-600 hover:text-gray-900">
              Exams
            </Link>
            <Link href="/courses" className="text-gray-600 hover:text-gray-900">
              Courses
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-gray-900">
              News
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}