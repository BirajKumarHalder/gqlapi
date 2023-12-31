const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        products: [Product!],
        product(id: ID!): Product!,
        categories: [Category!],
        category(id: ID!): Category!,
    }
    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }
    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
        category: Category!
        reviews: [Review!]!
    }
    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }
`;
