import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.scss";
import { appWithTranslation } from "next-i18next";
import { JSXMapSerializer, PrismicProvider } from "@prismicio/react";
import { linkResolver } from "../prismicio";
import {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Paragraph,
} from "../src/components/Heading";
import Link from "next/link";
import { FilledLink } from "@customtypes/common";

const richTextComponents: JSXMapSerializer = {
    heading1: ({ children }) => <Heading1>{children}</Heading1>,
    heading2: ({ children }) => <Heading2>{children}</Heading2>,
    heading3: ({ children }) => <Heading3>{children}</Heading3>,
    heading4: ({ children }) => <Heading4>{children}</Heading4>,
    heading5: ({ children }) => <Heading5>{children}</Heading5>,
    heading6: ({ children }) => <Heading6>{children}</Heading6>,
    paragraph: ({ children }) => <Paragraph>{children}</Paragraph>,
    hyperlink: ({ children, node }) => (
        <Link
            href={linkResolver(node.data as FilledLink)}
            passHref
            prefetch={false}
        >
            <a>{children}</a>
        </Link>
    ),
    // listItem: <listItem></listItem> ,
    // oListItem: <oListItem></oListItem> ,
    // list: <UList></UList> ,
    // oList: <OList></OList> ,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
            <PrismicProvider
                linkResolver={linkResolver}
                richTextComponents={richTextComponents}
            >
                <Component {...pageProps} />
            </PrismicProvider>
        </ChakraProvider>
    );
}

export default appWithTranslation(MyApp);
