import { Meta } from "@customtypes/graphql";
import {
    Client,
    createClient as prismicClient,
    getRepositoryName,
} from "@prismicio/client";

import { LinkResolverFunction } from "@prismicio/helpers";

import { CreateClientConfig, enableAutoPreviews } from "@prismicio/next";
import { FilledLinkToDocumentField } from "@prismicio/types";
import sm from "./sm.json";

/**
 * The project's Prismic repository name.
 */
export const linkResolver = (doc: FilledLinkToDocumentField | Meta): string => {
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
    if (doc?.url?.includes("#")) return doc.url.replace("https://", "");
    return doc.url ?? "";
};

export const repositoryName = getRepositoryName(sm.apiEndpoint);

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
export const createClient = (config: CreateClientConfig): Client => {
    const client = prismicClient(sm.apiEndpoint, {
        routes,
        ...config,
    });

    enableAutoPreviews({
        client,
        previewData: config.previewData,
        req: config.req,
    });

    return client;
};
