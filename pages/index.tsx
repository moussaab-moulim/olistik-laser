import React from "react";
import { Spacer, Flex } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header, Main, Cards, Footer } from "@components";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

const Home: React.FC = () => {
    const router = useRouter();
    console.log("lcoales", router.locales);
    return (
        <Flex direction="column" minH="100vh">
            <Header />
            <Main />
            <Cards />
            <Spacer />
            <Footer />
        </Flex>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale, locales }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "fr", ["common"])),
        },
    };
};
