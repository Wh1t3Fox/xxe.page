import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({
  children,
  title = 'XXE.page - Comprehensive XXE Vulnerability Guide',
  description = 'A comprehensive guide to understanding, identifying, and preventing XML External Entity injection vulnerabilities in web applications.',
  showSidebar = false,
  sidebar = null
}) {
  const [darkMode, setDarkMode] = useState(false)

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode === 'true') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="skip-to-content focus:outline-none focus:ring-2 focus:ring-primary-600"
        >
          Skip to content
        </a>

        {/* Navigation */}
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Main Content Area */}
        <main id="main-content" className="flex-grow">
          {showSidebar ? (
            <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Sidebar */}
              <aside className="hidden lg:block w-64 flex-shrink-0 pr-8">
                <div className="sticky top-20 custom-scrollbar overflow-y-auto max-h-[calc(100vh-6rem)]">
                  {sidebar}
                </div>
              </aside>

              {/* Page Content */}
              <div className="flex-1 min-w-0">
                {children}
              </div>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          )}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
