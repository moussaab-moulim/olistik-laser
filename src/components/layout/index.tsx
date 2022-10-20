import GoTop from "@components/GoTop/GoTop";
import { Header } from "@components/header";
import { PageSeo } from "@customtypes/common";
import { NavigationDocument } from "@customtypes/rest";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import React, { FC, ReactNode } from "react";

interface IProps {
    navigation: NavigationDocument;
    settings: PageSeo;
    children: ReactNode;
}

const DynamicFooter = dynamic(() => import("@components/footer"));
const DynamicContact = dynamic(() => import("@components/Contact"));

export const Layout: FC<IProps> = ({
    navigation,
    settings,
    children,
}: IProps) => {
    return (
        <div className="">
            <NextSeo
                title={settings.meta_title}
                titleTemplate={`%s | ${settings.site_name}`}
                description={settings.meta_description}
                openGraph={{
                    title: settings.meta_title,
                    description: settings.meta_description,
                    url: `${settings.domain}${
                        settings.path === "/" ? "" : settings.path
                    }`,
                    //TODO dynamic type
                    type: settings.type,
                    locale: settings.locale,
                    site_name: settings.site_name,
                    images: settings.featured_image
                        ? [
                              {
                                  url: (
                                      settings.featured_image.url ?? ""
                                  ).replace("auto=compress,format", ""),
                                  alt: settings.featured_image.alt ?? "",
                                  type: "image/jpeg",
                                  width: 1200,
                                  height: 630,
                              },
                          ]
                        : [],
                }}
                twitter={{
                    cardType: "summary_large_image",
                    handle: settings.twitterHandle,
                }}
                additionalMetaTags={[
                    {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                    },
                    {
                        httpEquiv: "x-ua-compatible",
                        content: "IE=edge",
                    },
                    {
                        name: "keywords",
                        content: settings.keywords,
                    },
                    {
                        name: "msapplication-TileColor",
                        content: settings.theme_color,
                    },
                    {
                        name: "theme-color",
                        content: settings.theme_color,
                    },
                    {
                        name: "google-site-verification",
                        content: settings.search_console_key,
                    },
                ]}
                additionalLinkTags={[
                    {
                        rel: "icon",
                        href: settings.favico?.md?.url ?? "",
                        sizes: "32x32",
                        type: "image/png",
                    },
                    {
                        rel: "icon",
                        href: settings.favico?.url ?? "",
                        sizes: "16x16",
                        type: "image/png",
                    },
                    {
                        rel: "apple-touch-icon",
                        href: settings.favico?.lg?.url ?? "",
                        sizes: "180x180",
                        type: "image/png",
                    },
                    {
                        rel: "mask-icon",
                        href: settings.logo?.url ?? "",
                        color: settings.theme_color,
                    },

                    ...[
                        "PlayfairDisplay-ExtraBold",
                        "PlayfairDisplay-Bold",
                        "PlayfairDisplay-BlackItalic",
                        "PlayfairDisplay-Italic",
                        "PlayfairDisplay-ExtraBoldItalic",
                        "PlayfairDisplay-BoldItalic",
                        "PlayfairDisplay-Black",
                        "PlayfairDisplay-SemiBoldItalic",
                        "PlayfairDisplay-Regular",
                        "PlayfairDisplay-Medium",
                        "PlayfairDisplay-MediumItalic",
                        "PlayfairDisplay-SemiBold",
                    ].map((font) => ({
                        rel: "preload",
                        href: `/assets/fonts/PlayfairDisplay/${font}.woff2`,
                        as: "font",
                        type: "font/woff2",
                        crossOrigin: "anonymous",
                    })),
                    ...[
                        "OpenSans-Bold",
                        "OpenSans-ExtraBold",
                        "OpenSans-BoldItalic",
                        "OpenSans-ExtraBoldItalic",
                        "OpenSans-Italic",
                        "OpenSans-Light",
                        "OpenSans-MediumItalic",
                        "OpenSans-Medium",
                        "OpenSans-LightItalic",
                        "OpenSans-Regular",
                        "OpenSans-SemiBoldItalic",
                        "OpenSans-SemiBold",
                    ].map((font) => ({
                        rel: "preload",
                        href: `/assets/fonts/OpenSans/${font}.woff2`,
                        as: "font",
                        type: "font/woff2",
                        crossOrigin: "anonymous",
                    })),
                    //TODO alternate languages
                ]}
            />
            <Header
                navigation={navigation}
                logo={settings.logo}
                // site_name={settings.site_name}
                // social_media={settings.social_media ?? []}
            />
            <main>
                {children}

                <DynamicContact
                    title={settings.contact_title}
                    description={settings.contact_description}
                />
            </main>
            <DynamicFooter logo={settings.logo} />
            <GoTop />
        </div>
    );
};
