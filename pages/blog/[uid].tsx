import React from "react";
import { SliceZone } from "@prismicio/react";

import { components } from "../../slices";
import { createRestClient } from "@services/client";
import { Layout } from "@components/layout";
import { mapPageSeo } from "@services/mappers/pageMappers";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
    NavigationDocument,
    PostDocument,
    SettingsDocument,
} from "@customtypes/rest";
import BLogList from "@components/Blog/BlogList";
import { Query } from "@prismicio/types";

interface IProps {
    post: PostDocument;
    navigation: NavigationDocument;
    settings: SettingsDocument;
    posts: Query<PostDocument>;
}

const Page: NextPage<IProps> = ({
    post,
    navigation,
    settings,
    posts,
}: IProps) => {
    return (
        <Layout navigation={navigation} settings={mapPageSeo(post, settings)}>
            <SliceZone slices={post.data.slices} components={components} />
            <BLogList posts={posts.results} title={"Latest Posts"} />
        </Layout>
    );
};

export default Page;

export const getStaticProps: GetStaticProps<IProps> = async ({
    locale: serverLocale,
    params,
}) => {
    const locale = serverLocale ?? "fr";
    const client = createRestClient();

    const post = await client.getByUID<PostDocument>(
        "post",
        params!.uid as string,
        {
            lang: locale,
        },
    );
    const navigation = await client.getSingle<NavigationDocument>(
        "navigation",
        { lang: locale },
    );
    const settings = await client.getSingle<SettingsDocument>("settings", {
        lang: locale,
    });
    const Query = `{
        post {
            meta_title
            meta_description
            featured_image
        }
    }`;
    const posts = await client.getByType<PostDocument>("post", {
        lang: locale,
        graphQuery: Query,
        pageSize: 3,
        orderings: {
            field: "document.first_publication_date",
            direction: "desc",
        },
    });
    return {
        props: {
            post,
            navigation,
            settings,
            posts,
        },
    };
};
// { locales: serverLocale }
export const getStaticPaths: GetStaticPaths = async () => {
    const locale = "fr";
    const client = createRestClient();

    const post = await client.getAllByType<PostDocument>("post", {
        lang: locale,
    });

    return {
        paths: post.map((post) => {
            return {
                params: { uid: post.uid },
                locale: post.lang,
            };
        }),
        fallback: false,
    };
};
