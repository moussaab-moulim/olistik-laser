import React, { PropsWithChildren } from "react";
import { AppProps } from "next/app";
import { ChakraProvider, Link } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.scss";
import { appWithTranslation } from "next-i18next";
import NextLink from "next/link";
import { JSXMapSerializer, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Paragraph,
} from "../src/components/Heading";

const richTextComponents: JSXMapSerializer = {
    heading1: ({ children }) => <Heading1>{children}</Heading1>,
    heading2: ({ children }) => <Heading2>{children}</Heading2>,
    heading3: ({ children }) => <Heading3>{children}</Heading3>,
    heading4: ({ children }) => <Heading4>{children}</Heading4>,
    heading5: ({ children }) => <Heading5>{children}</Heading5>,
    heading6: ({ children }) => <Heading6>{children}</Heading6>,
    paragraph: ({ children }) => <Paragraph>{children}</Paragraph>,
    // listItem: <listItem></listItem> ,
    // oListItem: <oListItem></oListItem> ,
    // list: <UList></UList> ,
    // oList: <OList></OList> ,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
            <PrismicProvider
                richTextComponents={richTextComponents}
                internalLinkComponent={({ href, children, ...props }) => (
                    <NextLink href={href} passHref>
                        <a {...props}>{children}</a>
                    </NextLink>
                )}
                externalLinkComponent={({
                    href,
                    target,
                    children,
                    ...props
                }) => (
                    <NextLink href={href} passHref>
                        <a target={target} {...props}>
                            {children}
                        </a>
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
