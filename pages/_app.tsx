import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, Link } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.css";
import { appWithTranslation } from "next-i18next";
import NextLink from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { ExternalLinkIcon } from "@chakra-ui/icons";
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
            <PrismicProvider
                internalLinkComponent={({ href, ...props }) => (
                    <NextLink href={href} passHref>
                        <Link {...props}>{props.children}</Link>
                    </NextLink>
                )}
                externalLinkComponent={({ href, target, ...props }) => (
                    <NextLink href={href} passHref target={target}>
                        <Link>
                            {props.children}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </NextLink>
                )}
            >
                <PrismicPreview repositoryName={repositoryName}>
                    <Component {...pageProps} />
                </PrismicPreview>
            </PrismicProvider>
        </ChakraProvider>
    );
}

export default appWithTranslation(MyApp);
