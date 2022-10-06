import { Query, Scalars, Settings } from "@customtypes/graphql";
import { client } from "apollo-client";

import gql from "graphql-tag";
import { CustomNavigation } from "src/types/common";

export const metaQuery = `
_meta {
  type
  id
  uid
  lang
  alternateLanguages{
    lang
    uid
    type
    id
  }
}
`;

export const fetchSettings = async (
    lang: Scalars["String"],
): Promise<Settings> => {
    const { data, errors = null } = await client.query<{
        allSettingss: Query["allSettingss"];
    }>({
        query: gql`
            query allSettingss {
                allSettingss(lang: "${lang}") {
                    edges {
                        node {
                            site_name
                            search_console_key
                            theme_color
                            logo
                            logo_invert
                            favico
                            domain
                            social_media {
                            icon
                            }
                            
                        }
                    }
                }
            }
        `,
    });

    const settings = data.allSettingss.edges?.at(0)?.node;

    if (errors) {
        throw errors;
    }
    if (!settings) {
        throw "Settings is undefined";
    }

    return settings;
};

export const fetchNavigation = async (
    lang: Scalars["String"],
): Promise<CustomNavigation> => {
    const { data, errors = null } = await client.query<{
        allNavigations: Query["allNavigations"];
    }>({
        query: gql`
            query allNavigations {
                allNavigations(lang: "${lang}") {
                    edges {
                        node {
                            links {
                                label
                                link {
                                    _linkType
                                    ... on _ExternalLink {
                                        url
                                        target
                                    }
                                    ... on _Document {
                                        _meta {
                                            uid
                                            type
                                            lang
                                        }
                                    }
                                }
                                parent
                            }
                        }
                    }
                }
            }
        `,
    });

    const navigation = data.allNavigations.edges?.at(0)
        ?.node as CustomNavigation;

    if (errors) {
        throw errors;
    }
    if (!navigation) {
        throw "Navigation is undefined";
    }

    return navigation;
};
