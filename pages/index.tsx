import React from "react";
import { Spacer, Flex } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header, Main, Cards, Footer } from "@components";
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";
import { Layout } from "@components/layout";
import { mapPageSeo } from "@services/mappers/pageMappers";
import { fetchNavigation, fetchSettings } from "@services/graphql/common";
import { Page, Settings } from "@customtypes/graphql";
import { fetchPage } from "@services/graphql/page";
import { CustomNavigation } from "@customtypes/common";
import { createRestClient } from "prismicio";
import { PageDocument } from "@customtypes/rest";

interface IProps {
    navigation: CustomNavigation;
    settings: Settings;
    home: PageDocument;
}
const Home: NextPage<IProps> = ({ navigation, settings, home }: IProps) => {
    const router = useRouter();

    console.log("home", home);

    return (
        <Layout navigation={navigation} settings={mapPageSeo(home, settings)}>
            hello
        </Layout>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<IProps> = async ({
    locale: serverLocale,
}) => {
    const client = createRestClient();

    const locale = serverLocale ?? "fr";

    const settings: Settings = await fetchSettings(locale);
    const navigation: CustomNavigation = await fetchNavigation(locale);
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
