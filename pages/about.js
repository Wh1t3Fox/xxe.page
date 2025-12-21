import Layout from '../components/Layout'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <Layout
      title="About XXE.page | XXE Vulnerability Guide"
      description="Learn about the XXE.page project - a comprehensive educational resource for understanding and preventing XML External Entity vulnerabilities."
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About XXE.page
        </h1>

        <div className="prose dark:prose-dark max-w-none">
          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-600 dark:border-primary-400 p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">
              XXE.page is a comprehensive educational resource dedicated to understanding,
              identifying, and preventing XML External Entity (XXE) injection vulnerabilities
              in web applications.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our mission is to provide security professionals, developers, and researchers with
            authoritative, actionable guidance on XXE vulnerabilities. By offering clear
            explanations, real-world examples, and language-specific secure configurations,
            we aim to reduce the prevalence of XXE vulnerabilities in production systems.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            What We Cover
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Fundamentals:</strong> XML, DTD, and entity processing mechanisms</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Vulnerability Types:</strong> Classic XXE, Blind XXE, Parameter Entities, File Upload XXE</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Attack Vectors:</strong> File Disclosure, SSRF, DoS, RCE Escalation</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Language-Specific Prevention:</strong> Java, .NET, PHP, Python, Node.js, Ruby, Go</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Application Contexts:</strong> SOAP, SAML, JSON-to-XML, SVG, Document Parsers</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Testing & Remediation:</strong> Methodologies, payload design, secure patterns</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Responsible Disclosure
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            All content on this site is provided for <strong>educational and defensive purposes only</strong>.
            The attack techniques and payloads described should only be used for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-3">
            <li>Authorized penetration testing with explicit permission</li>
            <li>Security research in controlled environments</li>
            <li>Defensive security and vulnerability remediation</li>
            <li>CTF competitions and security training exercises</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 p-6 rounded-r-lg my-6">
            <p className="text-yellow-800 dark:text-yellow-300 font-semibold">
              ⚠️ Unauthorized testing of systems you do not own or have explicit permission
              to test is illegal and unethical.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Technology Stack
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            XXE.page is built with modern web technologies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-3">
            <li><strong>Next.js 16</strong> - React framework with static site generation</li>
            <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
            <li><strong>React Syntax Highlighter</strong> - Code syntax highlighting</li>
            <li><strong>Dark Mode Support</strong> - Comfortable reading in any lighting</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Contributing
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We welcome contributions from the security community! If you've discovered
            errors, have suggestions for improvements, or want to contribute new content,
            please visit our GitHub repository.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Acknowledgments
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This project builds upon the foundational work of the security community,
            including OWASP, PortSwigger, and countless security researchers who have
            documented and shared their knowledge about XXE vulnerabilities.
          </p>

          <div className="mt-10 p-6 bg-primary-600 dark:bg-primary-700 rounded-lg text-white text-center">
            <p className="text-lg mb-4">
              Ready to learn about XXE vulnerabilities?
            </p>
            <Link
              href="/guide/xml/basics"
              className="inline-block px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
