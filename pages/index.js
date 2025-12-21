import Layout from '../components/Layout'
import Link from 'next/link'
import { HiShieldExclamation, HiCode, HiBookOpen, HiLightningBolt } from 'react-icons/hi'

export default function HomePage() {
  const features = [
    {
      icon: HiShieldExclamation,
      title: 'Comprehensive Coverage',
      description: 'From fundamentals to advanced exploitation techniques, covering all aspects of XXE vulnerabilities.',
    },
    {
      icon: HiCode,
      title: 'Language-Specific Guides',
      description: 'Secure configuration examples for Java, Python, PHP, Node.js, .NET, Ruby, and Go.',
    },
    {
      icon: HiBookOpen,
      title: 'Real-World Examples',
      description: 'Practical attack payloads and defensive code patterns used in production environments.',
    },
    {
      icon: HiLightningBolt,
      title: 'Immediately Actionable',
      description: 'Copy-paste secure configurations and test payloads for security assessments.',
    },
  ]

  const quickStart = [
    {
      title: 'XML & DTD Basics',
      description: 'Understand the fundamentals of XML entity processing',
      href: '/guide/xml/basics',
      severity: 'info',
    },
    {
      title: 'Classic XXE',
      description: 'Direct entity expansion attacks with immediate output',
      href: '/guide/classic/xxe',
      severity: 'critical',
    },
    {
      title: 'Java Prevention',
      description: 'Secure XML parser configuration for Java applications',
      href: '/guide/java/prevention',
      severity: 'info',
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <div className="text-center py-12 md:py-20">
        <div className="inline-block mb-4 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm font-semibold">
          Critical Security Vulnerability
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Understanding & Preventing
          <br />
          <span className="text-primary-600 dark:text-primary-400">
            XXE Vulnerabilities
          </span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          A comprehensive guide to XML External Entity injection vulnerabilities.
          Learn how attackers exploit XXE, and how to defend your applications with
          secure XML parsing configurations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/guide/xml/basics" className="btn-primary text-lg px-8 py-3">
            Get Started
          </Link>
          <Link
            href="/guide/classic/xxe"
            className="btn-secondary text-lg px-8 py-3"
          >
            See Attack Examples
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="card hover:shadow-xl transition-shadow"
          >
            <feature.icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Start Section */}
      <div className="my-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Quick Start Guides
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Begin your journey with these essential guides covering fundamentals,
            attack techniques, and prevention strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quickStart.map((guide, index) => (
            <Link
              key={index}
              href={guide.href}
              className="card group hover:border-primary-300 dark:hover:border-primary-700 border-2 border-transparent transition-all"
            >
              <div className="mb-3">
                {guide.severity === 'critical' ? (
                  <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg text-sm font-semibold">
                    Critical
                  </span>
                ) : (
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm font-semibold">
                    Info
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {guide.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {guide.description}
              </p>
              <div className="mt-4 text-primary-600 dark:text-primary-400 font-medium flex items-center">
                Read Guide
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Topics Overview */}
      <div className="my-16 p-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          What You'll Learn
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                1
              </span>
              Understanding XXE
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                XML & DTD fundamentals
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Entity processing mechanisms
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Classic and blind XXE attacks
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Parameter entity exploitation
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                2
              </span>
              Securing Your Applications
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure parser configurations
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Language-specific best practices
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Defense-in-depth strategies
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Testing methodologies
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12 my-16 bg-primary-600 dark:bg-primary-700 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Secure Your Applications?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Start with the fundamentals or jump straight to prevention guides for your programming language.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/guide/xml/basics"
            className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Learning
          </Link>
          <Link
            href="/guide/java/prevention"
            className="inline-block px-8 py-3 bg-primary-700 dark:bg-primary-800 text-white rounded-lg font-semibold hover:bg-primary-800 dark:hover:bg-primary-900 transition-colors border-2 border-white"
          >
            View Prevention Guides
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-16 p-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 rounded">
        <div className="flex items-start">
          <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-1">
              Educational Content Only
            </h4>
            <p className="text-yellow-700 dark:text-yellow-400 text-sm">
              This guide is for authorized security testing, defensive security, and educational purposes only.
              Use this knowledge responsibly and only test systems you have explicit permission to assess.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
