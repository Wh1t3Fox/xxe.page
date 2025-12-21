import { useState } from 'react'
import CodeBlock from './CodeBlock'

export default function TabbedCode({ examples, title }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="my-6">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
      )}

      {/* Tab Headers */}
      <div className="flex flex-wrap gap-2 mb-0 border-b border-gray-200 dark:border-gray-700">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 font-medium text-sm transition-all border-b-2 ${
              activeTab === index
                ? 'border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            {example.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-0">
        <CodeBlock
          code={examples[activeTab].code}
          language={examples[activeTab].language}
          isVulnerable={examples[activeTab].isVulnerable}
          filename={examples[activeTab].filename}
          showLineNumbers={examples[activeTab].showLineNumbers}
        />
      </div>
    </div>
  )
}
