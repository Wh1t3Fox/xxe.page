import Layout from '../components/Layout'

export default function ReferencesPage() {
  const resources = [
    {
      category: 'Official Standards & Organizations',
      items: [
        {
          title: 'OWASP XXE Processing',
          url: 'https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing',
          description: 'OWASP community page on XXE vulnerabilities'
        },
        {
          title: 'OWASP XXE Prevention Cheat Sheet',
          url: 'https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html',
          description: 'Comprehensive prevention guide from OWASP'
        },
        {
          title: 'CWE-611: Improper Restriction of XML External Entity Reference',
          url: 'https://cwe.mitre.org/data/definitions/611.html',
          description: 'Official CWE database entry for XXE'
        },
        {
          title: 'OWASP Top 10:2021 - A05: Security Misconfiguration',
          url: 'https://owasp.org/Top10/A05_2021-Security_Misconfiguration/',
          description: 'XXE is categorized under security misconfiguration'
        },
      ]
    },
    {
      category: 'Educational Resources',
      items: [
        {
          title: 'PortSwigger Web Security Academy - XXE',
          url: 'https://portswigger.net/web-security/xxe',
          description: 'Comprehensive tutorial with interactive labs'
        },
        {
          title: 'PortSwigger XXE Labs',
          url: 'https://portswigger.net/web-security/all-labs#xml-external-entity-xxe-injection',
          description: 'Hands-on practice labs for XXE exploitation'
        },
        {
          title: 'Acunetix XXE Guide',
          url: 'https://www.acunetix.com/blog/articles/xml-external-entity-xxe-vulnerabilities/',
          description: 'Detailed explanation of XXE vulnerabilities'
        },
        {
          title: 'Snyk Learn - XXE',
          url: 'https://learn.snyk.io/lesson/xxe/',
          description: 'Interactive XXE lessons and examples'
        },
      ]
    },
    {
      category: 'Research Papers & Articles',
      items: [
        {
          title: 'XML External Entity (XXE) Injection',
          url: 'https://portswigger.net/web-security/xxe/xml-entities',
          description: 'Deep dive into XML entities and exploitation'
        },
        {
          title: 'Exploiting XXE Vulnerabilities in ICS/SCADA Systems',
          url: 'https://www.blackhat.com/docs/us-15/materials/us-15-Wang-FileCry-The-New-Age-Of-XXE-java-wp.pdf',
          description: 'Advanced XXE exploitation techniques (PDF)'
        },
      ]
    },
    {
      category: 'Language-Specific Documentation',
      items: [
        {
          title: 'Java XML Processing Security',
          url: 'https://docs.oracle.com/javase/tutorial/jaxp/properties/properties.html',
          description: 'Official Oracle documentation on secure XML processing'
        },
        {
          title: 'Python defusedxml Library',
          url: 'https://github.com/tiran/defusedxml',
          description: 'Secure XML processing library for Python'
        },
        {
          title: 'PHP libxml Security',
          url: 'https://www.php.net/manual/en/function.libxml-disable-entity-loader.php',
          description: 'PHP documentation on disabling entity loading'
        },
        {
          title: 'Node.js XML Parser Security',
          url: 'https://github.com/libxmljs/libxmljs',
          description: 'Secure XML parsing for Node.js'
        },
      ]
    },
    {
      category: 'Tools & Scanners',
      items: [
        {
          title: 'Burp Suite',
          url: 'https://portswigger.net/burp',
          description: 'Web security testing tool with XXE detection'
        },
        {
          title: 'OWASP ZAP',
          url: 'https://www.zaproxy.org/',
          description: 'Free security scanner with XXE checks'
        },
        {
          title: 'XXEinjector',
          url: 'https://github.com/enjoiz/XXEinjector',
          description: 'Automated XXE exploitation tool'
        },
      ]
    },
    {
      category: 'CVE Databases',
      items: [
        {
          title: 'NIST NVD - XXE Vulnerabilities',
          url: 'https://nvd.nist.gov/vuln/search/results?form_type=Basic&results_type=overview&query=XXE&search_type=all',
          description: 'National Vulnerability Database XXE CVEs'
        },
        {
          title: 'CVE Details - CWE-611',
          url: 'https://www.cvedetails.com/cwe-details/611/Improper-Restriction-of-XML-External-Entity-Reference.html',
          description: 'Historical XXE vulnerability data'
        },
      ]
    },
  ]

  return (
    <Layout
      title="References & Resources | XXE.page"
      description="Comprehensive list of authoritative resources, tools, standards, and documentation for learning about XXE vulnerabilities."
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          References & Resources
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
          Authoritative resources, standards, tools, and documentation for understanding
          and preventing XXE vulnerabilities.
        </p>

        <div className="space-y-12">
          {resources.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-primary-600 dark:border-primary-400 pb-2">
                {section.category}
              </h2>

              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="card hover:shadow-lg transition-shadow"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 mb-2 flex items-center">
                        {item.title}
                        <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 font-mono truncate">
                        {item.url}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 rounded-r-lg">
          <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
            Missing a Resource?
          </h3>
          <p className="text-blue-800 dark:text-blue-400 text-sm">
            If you know of an authoritative resource that should be included on this page,
            please consider contributing to the project or reaching out with suggestions.
          </p>
        </div>
      </div>
    </Layout>
  )
}
