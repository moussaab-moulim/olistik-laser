import { PageSeo } from "src/types/common";
import { linkResolver } from "prismicio";
import { Page, Settings } from "@customtypes/graphql";

export const mapPageSeo = (page: Page, settings: Settings): PageSeo => ({
    featured_image: page.featured_image,
    keywords: page.keywords ?? "",
    meta_description: page.meta_description ?? "",
    meta_title: page.meta_title ?? "",
    domain: settings.domain ?? "",
    logo: settings.logo,
    logo_invert: settings.logo_invert,
    favico: settings.favico,
    search_console_key: settings.search_console_key ?? "",
    site_name: settings.site_name ?? "",
    theme_color: settings.theme_color ?? "",
    path: linkResolver(page._meta),
    type: page._meta.type === "page" ? "website" : "article",
    locale: page._meta.lang,
    social_media: settings.social_media,
});
