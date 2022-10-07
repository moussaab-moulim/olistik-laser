import { Meta } from "@customtypes/graphql";
import {
    Client,
    createClient as prismicClient,
    getRepositoryName,
} from "@prismicio/client";
import { createPrismicLink } from "apollo-link-prismic";
import * as prismic from "@prismicio/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { LinkResolverFunction } from "@prismicio/helpers";

import { CreateClientConfig, enableAutoPreviews } from "@prismicio/next";
import { FilledLinkToDocumentField } from "@prismicio/types";
import sm from "./sm.json";
import { PageDocument } from "@customtypes/rest";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = getRepositoryName(sm.apiEndpoint);
const accessToken = process.env.PRISMIC_REPOSITORY_TOKEN;

export const linkResolver = (
    doc: FilledLinkToDocumentField | Omit<PageDocument, "data">,
): string => {
    const langPrefix = doc.lang === "fr" ? "/" : "/en";
    if (doc.uid === "home") {
        return `${langPrefix}`;
    }
    if (doc.type === "post") {
        return `${langPrefix}/blog/${doc.uid}`;
    }

    if (doc.type === "page") {
        // TODO add blog en version
        return `${langPrefix}/${doc.uid}`;
    }

    return "/";
};

export const webLinkResolver: LinkResolverFunction = (doc) => {
    if (doc?.url?.includes("https://action:")) return "";
    if (doc?.url?.includes("https://#")) return doc.url.replace("https://", "");
    return doc.url ?? "";
};

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
    { type: "page", path: "/:uid" },
    { type: "settings", path: "/" },
    { type: "navigation", path: "/" },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createRestClient = (config?: CreateClientConfig): Client => {
    const client = prismicClient(sm.apiEndpoint, {
        routes,
        accessToken,
        ...config,
    });
    return client;
};

export const graphqlClient = new ApolloClient({
    link: createPrismicLink({
        uri: prismic.getGraphQLEndpoint(repositoryName),
        accessToken,
    }),
    cache: new InMemoryCache(),
});
