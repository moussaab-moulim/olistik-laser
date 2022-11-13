import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices/";
import { GetStaticProps, NextPage } from "next";
import { Layout } from "@components/layout";
import { mapPageSeo } from "@services/mappers/pageMappers";
import {
    NavigationDocument,
    PageDocument,
    PostDocument,
    SettingsDocument,
} from "@customtypes/rest";
import { createRestClient } from "@services/client";
import BlogPage from "@components/Blog/BlogPage";
import { Query } from "@prismicio/types";

interface IProps {
    navigation: NavigationDocument;
    settings: SettingsDocument;
    page: PageDocument;
    posts: Query<PostDocument>; // need typing
}

const Blog: NextPage<IProps> = ({
    navigation,
    settings,
    page,
    posts,
}: IProps) => {
    return (
        <Layout navigation={navigation} settings={mapPageSeo(page, settings)}>
            <SliceZone slices={page.data.slices} components={components} />
            <BlogPage posts={posts.results} />
        </Layout>
    );
};

export default Blog;

export const getStaticProps: GetStaticProps<IProps> = async ({
    locale: serverLocale,
}) => {
    const client = createRestClient();

    const locale = serverLocale ?? "fr";

    const settings = await client.getSingle<SettingsDocument>("settings", {
        lang: locale,
    });
    const navigation = await client.getSingle<NavigationDocument>(
        "navigation",
        {
            lang: locale,
        },
    );
    const page = await client.getByUID<PageDocument>("page", "blog", {
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
        pageSize: 5,
        orderings: {
            field: "document.first_publication_date",
            direction: "desc",
        },
    });

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            page,
            navigation,
            settings,
            posts,
        },
    };
};
