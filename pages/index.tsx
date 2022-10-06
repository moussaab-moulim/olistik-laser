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

interface IProps {
    navigation: CustomNavigation;
    settings: Settings;
    home: Page;
}
const Home: NextPage<IProps> = ({ navigation, settings, home }: IProps) => {
    const router = useRouter();
    console.log("lcoales", router.locales);
    return (
        <Layout navigation={navigation} settings={mapPageSeo(home, settings)}>
            hello
        </Layout>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<IProps> = async ({
    locale,
    locales,
}) => {
    const settings: Settings = await fetchSettings(locale ?? "fr");
    const navigation: CustomNavigation = await fetchNavigation(locale ?? "fr");
    const home: Page = await fetchPage("home", locale ?? "fr");
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "fr", ["common"])),
            navigation,
            settings,
            home,
        },
    };
};
