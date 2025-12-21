import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { HiClipboard, HiClipboardCheck } from 'react-icons/hi'

export default function CodeBlock({
  code,
  language = 'xml',
  isVulnerable = null,
  filename = null,
  showLineNumbers = true,
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const getLanguageLabel = (lang) => {
    const labels = {
      xml: 'XML',
      java: 'Java',
      python: 'Python',
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      php: 'PHP',
      csharp: 'C#',
      ruby: 'Ruby',
      go: 'Go',
      bash: 'Bash',
      json: 'JSON',
    }
    return labels[lang] || lang.toUpperCase()
  }

  return (
    <div className="code-block-wrapper my-6">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          {/* Language Badge */}
          <span className="px-2 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded">
            {getLanguageLabel(language)}
          </span>

          {/* Filename */}
          {filename && (
            <span className="text-sm text-gray-400 font-mono">{filename}</span>
          )}

          {/* Vulnerability Indicator */}
          {isVulnerable !== null && (
            <span
              className={`px-2 py-1 text-xs font-medium rounded ${
                isVulnerable
                  ? 'bg-red-900/50 text-red-300 border border-red-700'
                  : 'bg-green-900/50 text-green-300 border border-green-700'
              }`}
            >
              {isVulnerable ? '⚠️ Vulnerable' : '✓ Secure'}
            </span>
          )}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <HiClipboardCheck className="w-4 h-4 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <HiClipboard className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Display */}
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: '1rem',
            fontSize: '0.875rem',
            lineHeight: '1.5',
            backgroundColor: '#1e293b',
          }}
          lineNumberStyle={{
            minWidth: '3em',
            paddingRight: '1em',
            color: '#64748b',
            textAlign: 'right',
            userSelect: 'none',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
