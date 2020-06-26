import Prismic from 'prismic-javascript'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
export const apiEndpoint = 'https://my-react-portfolio.prismic.io/api/v2'

	
export const linkResolver = (doc) => {
    // URL for a category type
    if (doc.type === 'category') {
      return `/category/${doc.uid}`
    }
    // URL for a product type
    if (doc.type === 'product') {
      return `/product/${doc.uid}`
    }
    // URL for a page type
    if (doc.type === 'page') {
      return `/${doc.uid}`
    }
    // Backup for all other types
    return '/'
  }

// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint)