import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices/";
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
import BLogList from "@components/Blog/BlogList";
import { Query } from "@prismicio/types";
import Script from "next/script";

interface IProps {
    navigation: NavigationDocument;
    settings: SettingsDocument;
    home: PageDocument;
    posts: Query<PostDocument>;
}
const Home: NextPage<IProps> = ({
    navigation,
    settings,
    home,
    posts,
}: IProps) => {
    return (
        <Layout navigation={navigation} settings={mapPageSeo(home, settings)}>
            <Script
                src="https://widget.agenda.ch/javascripts/widget_over_2.js"
                strategy="afterInteractive"
            />
            <SliceZone slices={home.data.slices} components={components} />
            <BLogList posts={posts.results} title={"Blog"} />
        </Layout>
    );
};

export default Home;

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
    const home = await client.getByUID<PageDocument>("page", "home", {
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
            ...(await serverSideTranslations(locale, ["common"])),
            navigation,
            settings,
            home,
            posts,
        },
    };
};
