import { PageDocument, SettingsDocument } from "@customtypes/rest";
import { pageResolver } from "prismicio";
import { PageSeo } from "src/types/common";

export const mapPageSeo = (
    page: PageDocument,
    settings: SettingsDocument,
): PageSeo => ({
    featured_image: page.data.featured_image,
    keywords: page.data.keywords ?? "",
    meta_description: page.data.meta_description ?? "",
    meta_title: page.data.meta_title ?? "",
    domain: settings.data.domain ?? "",
    logo: settings.data.logo,
    logo_invert: settings.data.logo_invert,
    favico: settings.data.favico,
    search_console_key: settings.data.search_console_key ?? "",
    site_name: settings.data.site_name ?? "",
    theme_color: settings.data.theme_color ?? "",
    path: pageResolver({ ...page }),
    type: page.type === "page" ? "website" : "article",
    locale: page.lang,
    contact_title: settings.data.contact_title,
    contact_description: settings.data.contact_description,
});
