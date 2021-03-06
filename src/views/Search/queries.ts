import gql from "graphql-tag";

export const GET_SEARCH_PRODUCTS = gql`
  query SearchProducts(
    $query: String!
    $attributes: [AttributeScalar]
    $pageSize: Int
    $sortBy: String
    $after: String
  ) {
    products(
      query: $query
      attributes: $attributes
      first: $pageSize
      sortBy: $sortBy
      after: $after
    ) {
      totalCount
      edges {
        node {
          id
          name
          thumbnailUrl
          thumbnailUrl2x: thumbnailUrl(size: 510)
          category {
            id
            name
          }
          price {
            amount
            currency
            localized
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    attributes {
      edges {
        node {
          id
          name
          slug
          values {
            id
            name
            slug
          }
        }
      }
    }
  }
`;
