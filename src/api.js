import Prismic from 'prismic-javascript'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
export const apiEndpoint = 'https://my-react-portfolio.prismic.io/api/v2'


// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint)