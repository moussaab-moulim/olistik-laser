import {
    Maybe,
    Navigation,
    NavigationLinks,
    Page,
    _Document,
    _ExternalLink,
    _Linkable,
} from "@customtypes/graphql";
import { ImageField, RichTextField } from "@prismicio/types";

export interface PageSeo {
    featured_image: ImageField;
    keywords: string;
    meta_description: string;
    meta_title: string;
    logo: ImageField;
    logo_invert: ImageField;
    favico: ImageField<"lg" | "md">;
    domain: string;
    search_console_key: string;
    site_name: string;
    theme_color: string;
    path: string;
    locale: string;
    type: string;
    twitterHandle?: string;
    contact_title: RichTextField;
    contact_description: RichTextField;
}

export interface CustomNavigationLink extends Omit<NavigationLinks, "link"> {
    link?: Maybe<(_Linkable & _Document) | _ExternalLink>;
}
export interface CustomNavigation extends Omit<Navigation, "links"> {
    links?: Maybe<CustomNavigationLink[]>;
}
export type CustomPage = Omit<Page, "_meta">;
