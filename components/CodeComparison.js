import CodeBlock from './CodeBlock'

export default function CodeComparison({ vulnerable, secure }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 my-6">
      <div>
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          Vulnerable Code
        </h3>
        <CodeBlock
          code={vulnerable.code}
          language={vulnerable.language}
          isVulnerable={true}
          filename={vulnerable.filename}
          showLineNumbers={vulnerable.showLineNumbers}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Secure Code
        </h3>
        <CodeBlock
          code={secure.code}
          language={secure.language}
          isVulnerable={false}
          filename={secure.filename}
          showLineNumbers={secure.showLineNumbers}
        />
      </div>
    </div>
  )
}
