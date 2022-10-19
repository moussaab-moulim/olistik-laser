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
    SettingsDocument,
} from "@customtypes/rest";
import { createRestClient } from "@services/client";

interface IProps {
    navigation: NavigationDocument;
    settings: SettingsDocument;
    home: PageDocument;
}
const Home: NextPage<IProps> = ({ navigation, settings, home }: IProps) => {
    return (
        <Layout navigation={navigation} settings={mapPageSeo(home, settings)}>
            <SliceZone slices={home.data.slices} components={components} />
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

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            navigation,
            settings,
            home,
        },
    };
};
