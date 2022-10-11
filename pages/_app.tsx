import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, Link } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.scss";
import { appWithTranslation } from "next-i18next";
import NextLink from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { Heading1 } from "../src/components/Heading";

// const richTextComponents = {
//     heading1: ({ children }: any) => <Heading1>{children}</Heading1>,
//     // heading2: <Heading2></Heading2> ,
//     // heading3: <Heading3></Heading3> ,
//     // heading4: <Heading4></Heading4> ,
//     // heading5: <Heading5></Heading5> ,
//     // heading6: <Heading6></Heading6> ,
//     // paragraph: <Paragraph></Paragraph> ,
//     // listItem: <listItem></listItem> ,
//     // oListItem: <oListItem></oListItem> ,
//     // list: <UList></UList> ,
//     // oList: <OList></OList> ,
// };

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
            <PrismicProvider
                // richTextComponents={richTextComponents}
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
