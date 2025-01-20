'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Image src="/images/logo.png" alt="KollegeApply Logo" width={100} height={100} />
        </div>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <ul>
            <li>
              <Link href="#">University <span>▼</span></Link>
            </li>
            <li>
              <Link href="#">Colleges <span>▼</span></Link>
            </li>
            <li>
              <Link href="#">Exams <span>▼</span></Link>
            </li>
            <li>
              <Link href="#">Courses <span>▼</span></Link>
            </li>
            <li>
              <Link href="#">News <span>▼</span></Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="navbar-search">
          <input type="text" placeholder="Search for Colleges, Exams, Courses & more..." />
          <button>
            <i className="search-icon">🔍</i>
          </button>
        </div>
      </div>
    </header>
  );
}
