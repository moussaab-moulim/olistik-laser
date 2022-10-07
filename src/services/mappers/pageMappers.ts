import { CustomPage, PageSeo } from "src/types/common";
import { linkResolver } from "prismicio";
import { Settings } from "@customtypes/graphql";
import { PageDocument } from "@customtypes/rest";

export const mapPageSeo = (
    page: PageDocument,
    settings: Settings,
): PageSeo => ({
    featured_image: page.data.featured_image,
    keywords: page.data.keywords ?? "",
    meta_description: page.data.meta_description ?? "",
    meta_title: page.data.meta_title ?? "",
    domain: settings.domain ?? "",
    logo: settings.logo,
    logo_invert: settings.logo_invert,
    favico: settings.favico,
    search_console_key: settings.search_console_key ?? "",
    site_name: settings.site_name ?? "",
    theme_color: settings.theme_color ?? "",
    path: linkResolver(page),
    type: page.type === "page" ? "website" : "article",
    locale: page.lang,
    social_media: settings.social_media,
});
