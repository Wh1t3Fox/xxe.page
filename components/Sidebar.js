import { useState } from 'react'
import Link from 'next/link'
import { HiChevronDown, HiChevronRight } from 'react-icons/hi'

export default function Sidebar({ navigation, currentPath }) {
  const [expandedSections, setExpandedSections] = useState(() => {
    // Automatically expand the section containing the current page
    const expanded = {}
    navigation?.sections?.forEach((section) => {
      const isActive = section.items?.some((item) =>
        currentPath?.includes(item.slug)
      )
      if (isActive) {
        expanded[section.slug] = true
      }
    })
    return expanded
  })

  const toggleSection = (slug) => {
    setExpandedSections((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }))
  }

  const isItemActive = (itemSlug) => {
    return currentPath?.includes(itemSlug)
  }

  const getSeverityColor = (severity) => {
    const colors = {
      critical: 'text-severity-critical dark:text-red-400',
      high: 'text-severity-high dark:text-amber-400',
      medium: 'text-severity-medium dark:text-yellow-400',
      low: 'text-severity-low dark:text-green-400',
    }
    return colors[severity] || ''
  }

  if (!navigation) {
    return null
  }

  return (
    <nav className="space-y-2" aria-label="Guide navigation">
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
          Table of Contents
        </h2>
      </div>

      {navigation.sections?.map((section) => {
        const isExpanded = expandedSections[section.slug]

        return (
          <div key={section.slug} className="space-y-1">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.slug)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-expanded={isExpanded}
            >
              <span>{section.title}</span>
              {isExpanded ? (
                <HiChevronDown className="w-4 h-4" />
              ) : (
                <HiChevronRight className="w-4 h-4" />
              )}
            </button>

            {/* Section Items */}
            {isExpanded && (
              <div className="ml-3 pl-3 border-l-2 border-gray-200 dark:border-gray-700 space-y-1">
                {section.items?.map((item) => {
                  const isActive = isItemActive(item.slug)

                  return (
                    <Link
                      key={item.slug}
                      href={`/guide/${item.slug.replace(/-/g, '/')}`}
                      className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 font-medium'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        <span>{item.title}</span>
                        {item.severity && (
                          <span
                            className={`ml-2 text-xs font-medium ${getSeverityColor(
                              item.severity
                            )}`}
                          >
                            {item.severity.charAt(0).toUpperCase() + item.severity.slice(1)}
                          </span>
                        )}
                      </span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
