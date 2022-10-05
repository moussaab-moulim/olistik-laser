import { createPrismicLink } from "apollo-link-prismic";
import * as prismic from "@prismicio/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
const repositoryName = process.env.PRISMIC_REPOSITORY_NAME ?? "";
export const client = new ApolloClient({
    link: createPrismicLink({
        uri: prismic.getGraphQLEndpoint(repositoryName),
        accessToken: process.env.PRISMIC_REPOSITORY_TOKEN,
    }),
    cache: new InMemoryCache(),
});
