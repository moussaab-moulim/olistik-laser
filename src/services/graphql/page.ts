import { Page, Query, Scalars } from "@customtypes/graphql";
import { client } from "apollo-client";
import gql from "graphql-tag";
import { metaQuery } from "./common";

export const fetchPage = async (
    uid: Scalars["ID"],
    lang: Scalars["String"],
): Promise<Page> => {
    const { data, errors = null } = await client.query<{
        page: Query["page"];
    }>({
        query: gql`
            query page {
                page(uid:"${uid}",lang: "${lang}") {
                    ${metaQuery}
                    meta_title
                    meta_description
                    featured_image
                    keywords
                }
            }
        `,
    });

    const page = data.page;

    if (errors) {
        throw errors;
    }
    if (!page) {
        throw "Page data is undefined";
    }

    return page;
};