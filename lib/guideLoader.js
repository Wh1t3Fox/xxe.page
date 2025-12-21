import fs from 'fs'
import path from 'path'

const guidesDirectory = path.join(process.cwd(), 'data/guides')
const dataDirectory = path.join(process.cwd(), 'data')

/**
 * Get all guide IDs for static path generation
 * Returns array of params for getStaticPaths
 */
export function getAllGuideIds() {
  try {
    const fileNames = fs.readdirSync(guidesDirectory)
    return fileNames
      .filter((fileName) => fileName.endsWith('.json'))
      .map((fileName) => {
        const slug = fileName.replace(/\.json$/, '')
        return {
          params: {
            slug: slug.split('-'), // Split slug into array for catch-all route
          },
        }
      })
  } catch (error) {
    console.error('Error reading guides directory:', error)
    return []
  }
}

/**
 * Get guide data by slug
 * @param {string|string[]} slug - The guide slug (can be array or string)
 * @returns {object} Guide data
 */
export function getGuideData(slug) {
  try {
    // Convert array slug to string if needed
    const slugString = Array.isArray(slug) ? slug.join('-') : slug
    const fullPath = path.join(guidesDirectory, `${slugString}.json`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const guideData = JSON.parse(fileContents)

    return {
      slug: slugString,
      ...guideData,
    }
  } catch (error) {
    console.error(`Error loading guide ${slug}:`, error)
    return null
  }
}

/**
 * Get all guides (for listing pages, search indexing, etc.)
 * @returns {array} Array of all guide objects
 */
export function getAllGuides() {
  try {
    const fileNames = fs.readdirSync(guidesDirectory)
    const allGuides = fileNames
      .filter((fileName) => fileName.endsWith('.json'))
      .map((fileName) => {
        const slug = fileName.replace(/\.json$/, '')
        return getGuideData(slug)
      })
      .filter(Boolean) // Remove any null values

    // Sort by category and title
    return allGuides.sort((a, b) => {
      if (a.category !== b.category) {
        return a.category.localeCompare(b.category)
      }
      return a.title.localeCompare(b.title)
    })
  } catch (error) {
    console.error('Error getting all guides:', error)
    return []
  }
}

/**
 * Get navigation structure
 * @returns {object} Navigation data
 */
export function getNavigation() {
  try {
    const navPath = path.join(dataDirectory, 'navigation.json')

    if (!fs.existsSync(navPath)) {
      return { sections: [] }
    }

    const fileContents = fs.readFileSync(navPath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error loading navigation:', error)
    return { sections: [] }
  }
}

/**
 * Get guides by category
 * @param {string} category - The category to filter by
 * @returns {array} Array of guides in the category
 */
export function getGuidesByCategory(category) {
  const allGuides = getAllGuides()
  return allGuides.filter((guide) => guide.category === category)
}

/**
 * Get related guides based on topics
 * @param {array} relatedTopics - Array of related topic slugs
 * @param {number} limit - Maximum number of related guides to return
 * @returns {array} Array of related guide objects
 */
export function getRelatedGuides(relatedTopics, limit = 5) {
  if (!relatedTopics || relatedTopics.length === 0) {
    return []
  }

  const relatedGuides = relatedTopics
    .map((slug) => getGuideData(slug))
    .filter(Boolean)
    .slice(0, limit)

  return relatedGuides
}

/**
 * Search guides by query
 * @param {string} query - Search query
 * @returns {array} Array of matching guides
 */
export function searchGuides(query) {
  const allGuides = getAllGuides()
  const lowerQuery = query.toLowerCase()

  return allGuides.filter((guide) => {
    return (
      guide.title.toLowerCase().includes(lowerQuery) ||
      guide.description?.toLowerCase().includes(lowerQuery) ||
      guide.category.toLowerCase().includes(lowerQuery)
    )
  })
}
