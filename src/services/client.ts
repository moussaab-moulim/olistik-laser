import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Client, createClient as prismicClient } from "@prismicio/client";
import { CreateClientConfig } from "@prismicio/next";
import { createPrismicLink } from "apollo-link-prismic";

/**
 * The project's Prismic repository name.
 */

// -- Prismic Repo Name
const repositoryName = "olistik-laser";

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
const apiEndpoint = `https://${repositoryName}.cdn.prismic.io/api/v2`;
const apiGraphqlEndpoint = `https://${repositoryName}.cdn.prismic.io/graphql`;

const routes = [
    { type: "page", path: "/:uid" },
    { type: "settings", path: "/" },
    { type: "navigation", path: "/" },
];
const accessToken = process.env.PRISMIC_REPOSITORY_TOKEN;

export const createRestClient = (config?: CreateClientConfig): Client => {
    const client = prismicClient(apiEndpoint, {
        routes,
        accessToken,
        ...config,
    });
    return client;
};

export const graphqlClient = new ApolloClient({
    link: createPrismicLink({
        uri: apiGraphqlEndpoint,
        accessToken,
    }),
    cache: new InMemoryCache(),
});
