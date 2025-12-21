import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'
import CodeBlock from '../../components/CodeBlock'
import SeverityBadge from '../../components/SeverityBadge'
import { getAllGuideIds, getGuideData, getNavigation } from '../../lib/guideLoader'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function GuidePage({ guide, navigation }) {
  if (!guide) {
    return (
      <Layout title="Guide Not Found">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Guide Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The requested guide could not be found.
          </p>
          <Link href="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </Layout>
    )
  }

  // Convert plain text format to markdown
  const formatTextAsMarkdown = (text) => {
    if (!text) return ''

    // Convert • bullet points to markdown lists
    let formatted = text.replace(/^• (.+)$/gm, '- $1')

    // Convert **text** to markdown bold (if not already)
    // This preserves existing markdown formatting

    return formatted
  }

  const renderSection = (section) => {
    switch (section.type) {
      case 'text':
        return (
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-ul:text-gray-700 dark:prose-ul:text-gray-300">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {formatTextAsMarkdown(section.content)}
            </ReactMarkdown>
          </div>
        )

      case 'code':
        if (section.code) {
          return (
            <CodeBlock
              code={section.code.code}
              language={section.code.language || 'xml'}
              isVulnerable={section.code.isVulnerable}
              filename={section.code.filename}
            />
          )
        }
        return null

      default:
        return (
          <div className="prose dark:prose-dark max-w-none">
            <p className="text-gray-700 dark:text-gray-300">{section.content}</p>
          </div>
        )
    }
  }

  return (
    <Layout
      title={`${guide.title} | XXE.page`}
      description={guide.description}
      showSidebar={true}
      sidebar={<Sidebar navigation={navigation} currentPath={guide.slug} />}
    >
      {/* Guide Header */}
      <article className="max-w-4xl">
        <header className="mb-8">
          <div className="mb-4">
            <SeverityBadge
              severity={guide.severity}
              cvssScore={guide.cvssScore}
              size="lg"
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {guide.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {guide.description}
          </p>

          {guide.cwe && (
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {guide.cwe && (
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg font-medium">
                  {guide.cwe}
                </span>
              )}
              {guide.owasp && (
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-lg font-medium">
                  {guide.owasp}
                </span>
              )}
            </div>
          )}
        </header>

        {/* Guide Sections */}
        <div className="space-y-8">
          {guide.sections?.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              {section.title && (
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-primary-600 dark:border-primary-400 pb-2">
                  {section.title}
                </h2>
              )}
              {renderSection(section)}
            </section>
          ))}
        </div>

        {/* Related Topics */}
        {guide.relatedTopics && guide.relatedTopics.length > 0 && (
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Related Topics
            </h2>
            <div className="flex flex-wrap gap-2">
              {guide.relatedTopics.map((slug) => (
                <Link
                  key={slug}
                  href={`/guide/${slug}`}
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-600 transition-colors border border-primary-200 dark:border-primary-700"
                >
                  {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* References */}
        {guide.references && guide.references.length > 0 && (
          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              References
            </h2>
            <ul className="space-y-2">
              {guide.references.map((ref, index) => (
                <li key={index}>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {ref.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </Layout>
  )
}

// Generate static paths for all guides
export async function getStaticPaths() {
  const paths = getAllGuideIds()
  return {
    paths,
    fallback: false,
  }
}

// Fetch guide data at build time
export async function getStaticProps({ params }) {
  const guide = getGuideData(params.slug)
  const navigation = getNavigation()

  return {
    props: {
      guide,
      navigation,
    },
  }
}
