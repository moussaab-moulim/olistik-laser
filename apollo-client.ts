import { createPrismicLink } from "apollo-link-prismic";
import * as prismic from "@prismicio/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
const repositoryName = process.env.PRISMIC_REPOSITORY_NAME ?? "";
console.log("repoName", process.env.PRISMIC_REPOSITORY_NAME);
console.log("tooken", process.env.PRISMIC_REPOSITORY_TOKEN);
console.log("graphurl", prismic.getGraphQLEndpoint(repositoryName));
export const client = new ApolloClient({
    link: createPrismicLink({
        uri: prismic.getGraphQLEndpoint(repositoryName),
        accessToken: process.env.PRISMIC_REPOSITORY_TOKEN,
    }),
    cache: new InMemoryCache(),
});
