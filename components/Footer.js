import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              XXE.page
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              A comprehensive guide to understanding, identifying, and preventing XML External Entity injection vulnerabilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guide/xml-basics" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/guide/classic-xxe" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  XXE Vulnerabilities
                </Link>
              </li>
              <li>
                <Link href="/guide/java-prevention" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Prevention Guides
                </Link>
              </li>
              <li>
                <Link href="/references" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  References
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  OWASP XXE
                </a>
              </li>
              <li>
                <a
                  href="https://cwe.mitre.org/data/definitions/611.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  CWE-611
                </a>
              </li>
              <li>
                <a
                  href="https://portswigger.net/web-security/xxe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  PortSwigger Academy
                </a>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About This Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <p>
              © {currentYear} XXE.page. Educational content for security professionals.
            </p>
            <p className="mt-2 md:mt-0">
              For authorized security testing and defensive purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
