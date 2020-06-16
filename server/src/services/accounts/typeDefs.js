import { gql } from 'apollo-server'

const typeDefs = gql`
    extend type Query {
        viewer: Account
    }

    type Account @key(fields: "id") {
        id: ID!
        email: String!
    }
`

export default typeDefs
