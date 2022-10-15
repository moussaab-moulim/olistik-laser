// Code generated by prismic-ts-codegen. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Links field in *Navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
    /**
     * action group field in *Navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.action_group[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    action_group: prismicT.GroupField<Simplify<NavigationDocumentDataActionGroupItem>>;
    /**
     * Slice Zone field in *Navigation*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<NavigationDocumentDataSlicesSlice>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
    /**
     * label field in *Navigation → Links*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Link field in *Navigation → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Link for navigation item
     * - **API ID Path**: navigation.links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Parent field in *Navigation → Links*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Parent label
     * - **API ID Path**: navigation.links[].parent
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    parent: prismicT.KeyTextField;
}
/**
 * Item in Navigation → action group
 *
 */
export interface NavigationDocumentDataActionGroupItem {
    /**
     * button label field in *Navigation → action group*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.action_group[].button_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_label: prismicT.KeyTextField;
    /**
     * button url field in *Navigation → action group*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.action_group[].button_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    button_url: prismicT.LinkField;
    /**
     * button shape field in *Navigation → action group*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: true
     * - **API ID Path**: navigation.action_group[].button_shape
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    button_shape: prismicT.BooleanField;
}
/**
 * Slice for *Navigation → Slice Zone*
 *
 */
type NavigationDocumentDataSlicesSlice = never;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * meta title field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.meta_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * meta description field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.meta_description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
    /**
     * featured image field in *Page*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: page.featured_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    featured_image: prismicT.ImageField<never>;
    /**
     * keywords field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.keywords
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    keywords: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = HeroSlice | CtaSlice | CardsSlice | TextWithImageSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Post documents */
type PostDocumentData = Record<string, never>;
/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<PostDocumentData>, "post", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * site name field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.site_name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    site_name: prismicT.KeyTextField;
    /**
     * search console key field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.search_console_key
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    search_console_key: prismicT.KeyTextField;
    /**
     * theme color field in *Settings*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.theme_color
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    theme_color: prismicT.ColorField;
    /**
     * logo field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * logo invert field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.logo_invert
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo_invert: prismicT.ImageField<never>;
    /**
     * favico field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.favico
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    favico: prismicT.ImageField<"md" | "lg">;
    /**
     * domain field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.domain
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    domain: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Settings*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<SettingsDocumentDataSlicesSlice>;
    /**
     * contact title field in *Settings*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.contact_title
     * - **Tab**: Contact
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    contact_title: prismicT.RichTextField;
    /**
     * contact description field in *Settings*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.contact_description
     * - **Tab**: Contact
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    contact_description: prismicT.RichTextField;
    /**
     * Slice Zone field in *Settings*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.slices1[]
     * - **Tab**: Contact
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices1: prismicT.SliceZone<SettingsDocumentDataSlices1Slice>;
}
/**
 * Slice for *Settings → Slice Zone*
 *
 */
type SettingsDocumentDataSlicesSlice = never;
/**
 * Slice for *Settings → Slice Zone*
 *
 */
type SettingsDocumentDataSlices1Slice = never;
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
export type AllDocumentTypes = NavigationDocument | PageDocument | PostDocument | SettingsDocument;
/**
 * Primary content in Cards → Primary
 *
 */
interface CardsSliceDefaultPrimary {
    /**
     * slice id field in *Cards → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cards.primary.slice_id
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    slice_id: prismicT.KeyTextField;
    /**
     * Title field in *Cards → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: cards.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *Cards → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: cards.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in Cards → Items
 *
 */
export interface CardsSliceDefaultItem {
    /**
     * Title field in *Cards → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cards.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *Cards → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cards.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * button label field in *Cards → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cards.items[].button_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_label: prismicT.KeyTextField;
    /**
     * button url field in *Cards → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: cards.items[].button_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    button_url: prismicT.LinkField;
}
/**
 * Default variation for Cards Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Cards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CardsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CardsSliceDefaultPrimary>, Simplify<CardsSliceDefaultItem>>;
/**
 * Slice variation for *Cards*
 *
 */
type CardsSliceVariation = CardsSliceDefault;
/**
 * Cards Shared Slice
 *
 * - **API ID**: `cards`
 * - **Description**: `Cards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CardsSlice = prismicT.SharedSlice<"cards", CardsSliceVariation>;
/**
 * Primary content in Cta → Primary
 *
 */
interface CtaSliceDefaultPrimary {
    /**
     * slice id field in *Cta → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cta.primary.slice_id
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    slice_id: prismicT.KeyTextField;
    /**
     * title field in *Cta → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cta.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Text field in *Cta → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cta.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Sub text field in *Cta → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cta.primary.sub_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    sub_text: prismicT.KeyTextField;
    /**
     * background color field in *Cta → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: cta.primary.background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
}
/**
 * Item in Cta → Items
 *
 */
export interface CtaSliceDefaultItem {
    /**
     * button label field in *Cta → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cta.items[].button_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_label: prismicT.KeyTextField;
    /**
     * button url field in *Cta → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: cta.items[].button_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    button_url: prismicT.LinkField;
}
/**
 * Default variation for Cta Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Cta`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CtaSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CtaSliceDefaultPrimary>, Simplify<CtaSliceDefaultItem>>;
/**
 * Slice variation for *Cta*
 *
 */
type CtaSliceVariation = CtaSliceDefault;
/**
 * Cta Shared Slice
 *
 * - **API ID**: `cta`
 * - **Description**: `Cta`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CtaSlice = prismicT.SharedSlice<"cta", CtaSliceVariation>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
    /**
     * slice id field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.slice_id
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    slice_id: prismicT.KeyTextField;
    /**
     * Title field in *Hero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Text field in *Hero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Background Image field in *Hero → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.background_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    background_image: prismicT.ImageField<never>;
    /**
     * background color field in *Hero → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
}
/**
 * Item in Hero → Items
 *
 */
export interface HeroSliceDefaultItem {
    /**
     * button label field in *Hero → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.items[].button_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_label: prismicT.KeyTextField;
    /**
     * button url field in *Hero → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.items[].button_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    button_url: prismicT.LinkField;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, Simplify<HeroSliceDefaultItem>>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceNoActionHeroPrimary {
    /**
     * slice id field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.slice_id
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    slice_id: prismicT.KeyTextField;
    /**
     * Title field in *Hero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * text field in *Hero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Background Image field in *Hero → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.background_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    background_image: prismicT.ImageField<never>;
    /**
     * background color field in *Hero → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
}
/**
 * No Action Hero variation for Hero Slice
 *
 * - **API ID**: `noActionHero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceNoActionHero = prismicT.SharedSliceVariation<"noActionHero", Simplify<HeroSliceNoActionHeroPrimary>, never>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceNoActionHero;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismicT.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in TextWithImage → Primary
 *
 */
interface TextWithImageSliceDefaultPrimary {
    /**
     * slice id field in *TextWithImage → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.slice_id
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    slice_id: prismicT.KeyTextField;
    /**
     * title field in *TextWithImage → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Text field in *TextWithImage → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Image field in *TextWithImage → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * background color field in *TextWithImage → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
}
/**
 * Item in TextWithImage → Items
 *
 */
export interface TextWithImageSliceDefaultItem {
    /**
     * button label field in *TextWithImage → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.items[].button_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_label: prismicT.KeyTextField;
    /**
     * button url field in *TextWithImage → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.items[].button_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    button_url: prismicT.LinkField;
}
/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextWithImageSliceDefaultPrimary>, Simplify<TextWithImageSliceDefaultItem>>;
/**
 * Primary content in TextWithImage → Primary
 *
 */
interface TextWithImageSliceRightTextPrimary {
    /**
     * slice id field in *TextWithImage → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.slice_id
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    slice_id: prismicT.KeyTextField;
    /**
     * title field in *TextWithImage → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Text field in *TextWithImage → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Image field in *TextWithImage → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * background color field in *TextWithImage → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
}
/**
 * Item in TextWithImage → Items
 *
 */
export interface TextWithImageSliceRightTextItem {
    /**
     * button label field in *TextWithImage → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.items[].button_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_label: prismicT.KeyTextField;
    /**
     * button url field in *TextWithImage → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.items[].button_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    button_url: prismicT.LinkField;
}
/**
 * Right text variation for TextWithImage Slice
 *
 * - **API ID**: `rightText`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSliceRightText = prismicT.SharedSliceVariation<"rightText", Simplify<TextWithImageSliceRightTextPrimary>, Simplify<TextWithImageSliceRightTextItem>>;
/**
 * Slice variation for *TextWithImage*
 *
 */
type TextWithImageSliceVariation = TextWithImageSliceDefault | TextWithImageSliceRightText;
/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSlice = prismicT.SharedSlice<"text_with_image", TextWithImageSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { NavigationDocumentData, NavigationDocumentDataLinksItem, NavigationDocumentDataActionGroupItem, NavigationDocumentDataSlicesSlice, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, PostDocumentData, PostDocument, SettingsDocumentData, SettingsDocumentDataSlicesSlice, SettingsDocumentDataSlices1Slice, SettingsDocument, AllDocumentTypes, CardsSliceDefaultPrimary, CardsSliceDefaultItem, CardsSliceDefault, CardsSliceVariation, CardsSlice, CtaSliceDefaultPrimary, CtaSliceDefaultItem, CtaSliceDefault, CtaSliceVariation, CtaSlice, HeroSliceDefaultPrimary, HeroSliceDefaultItem, HeroSliceDefault, HeroSliceNoActionHeroPrimary, HeroSliceNoActionHero, HeroSliceVariation, HeroSlice, TextWithImageSliceDefaultPrimary, TextWithImageSliceDefaultItem, TextWithImageSliceDefault, TextWithImageSliceRightTextPrimary, TextWithImageSliceRightTextItem, TextWithImageSliceRightText, TextWithImageSliceVariation, TextWithImageSlice };
    }
}
