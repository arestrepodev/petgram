import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetSinglePhoto = id => {
  const { loading, data, error } = useQuery(GET_SINGLE_PHOTO, { variables: { id } })
  return { loading, data, error }
}