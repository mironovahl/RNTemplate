import { gql } from '@apollo/client'

const GET_ALL_CHARACTERS = gql`
  query Characters {
    characters {
      results {
        name
        status
        image
      }
    }
  }
`
export { GET_ALL_CHARACTERS }
