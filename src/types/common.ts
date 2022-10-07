import {
    Maybe,
    Navigation,
    NavigationLinks,
    _Document,
    _ExternalLink,
    _Linkable,
} from "@customtypes/graphql";
import { PageDocument as _PageDocument } from "@customtypes/rest";
import { ImageField } from "@prismicio/types";

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
    social_media: any;
    twitterHandle?: string;
}

export interface CustomNavigationLink extends Omit<NavigationLinks, "link"> {
    link?: Maybe<(_Linkable & _Document) | _ExternalLink>;
}
export interface CustomNavigation extends Omit<Navigation, "links"> {
    links?: Maybe<CustomNavigationLink[]>;
}
