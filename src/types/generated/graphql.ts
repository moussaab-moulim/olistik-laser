import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
    Json: any;
    Long: any;
};

export type Meta = {
    __typename?: "Meta";
    /** Alternate languages the document. */
    alternateLanguages: Array<RelatedDocument>;
    /** The first publication date of the document. */
    firstPublicationDate?: Maybe<Scalars["DateTime"]>;
    /** The id of the document. */
    id: Scalars["String"];
    /** The language of the document. */
    lang: Scalars["String"];
    /** The last publication date of the document. */
    lastPublicationDate?: Maybe<Scalars["DateTime"]>;
    /** The tags of the document. */
    tags: Array<Scalars["String"]>;
    /** The type of the document. */
    type: Scalars["String"];
    /** The uid of the document. */
    uid?: Maybe<Scalars["String"]>;
};

export type Navigation = _Document &
    _Linkable & {
        __typename?: "Navigation";
        _linkType?: Maybe<Scalars["String"]>;
        _meta: Meta;
        links?: Maybe<Array<NavigationLinks>>;
    };

/** A connection to a list of items. */
export type NavigationConnectionConnection = {
    __typename?: "NavigationConnectionConnection";
    /** A list of edges. */
    edges?: Maybe<Array<Maybe<NavigationConnectionEdge>>>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    totalCount: Scalars["Long"];
};

/** An edge in a connection. */
export type NavigationConnectionEdge = {
    __typename?: "NavigationConnectionEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Navigation;
};

export type NavigationLinks = {
    __typename?: "NavigationLinks";
    label?: Maybe<Scalars["Json"]>;
    link?: Maybe<_Linkable>;
    parent?: Maybe<Scalars["String"]>;
};

export type Page = _Document &
    _Linkable & {
        __typename?: "Page";
        _linkType?: Maybe<Scalars["String"]>;
        _meta: Meta;
        featured_image?: Maybe<Scalars["Json"]>;
        keywords?: Maybe<Scalars["String"]>;
        meta_description?: Maybe<Scalars["String"]>;
        meta_title?: Maybe<Scalars["String"]>;
    };

/** A connection to a list of items. */
export type PageConnectionConnection = {
    __typename?: "PageConnectionConnection";
    /** A list of edges. */
    edges?: Maybe<Array<Maybe<PageConnectionEdge>>>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    totalCount: Scalars["Long"];
};

/** An edge in a connection. */
export type PageConnectionEdge = {
    __typename?: "PageConnectionEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
    __typename?: "PageInfo";
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars["String"]>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars["Boolean"];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars["Boolean"];
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars["String"]>;
};

export type Post = _Document &
    _Linkable & {
        __typename?: "Post";
        _linkType?: Maybe<Scalars["String"]>;
        _meta: Meta;
    };

/** A connection to a list of items. */
export type PostConnectionConnection = {
    __typename?: "PostConnectionConnection";
    /** A list of edges. */
    edges?: Maybe<Array<Maybe<PostConnectionEdge>>>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    totalCount: Scalars["Long"];
};

/** An edge in a connection. */
export type PostConnectionEdge = {
    __typename?: "PostConnectionEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Post;
};

export type Query = {
    __typename?: "Query";
    _allDocuments: _DocumentConnection;
    allNavigations: NavigationConnectionConnection;
    allPages: PageConnectionConnection;
    allPosts: PostConnectionConnection;
    allSettingss: SettingsConnectionConnection;
    page?: Maybe<Page>;
};

export type Query_AllDocumentsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    firstPublicationDate?: InputMaybe<Scalars["DateTime"]>;
    firstPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
    firstPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
    fulltext?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["String"]>;
    id_in?: InputMaybe<Array<Scalars["String"]>>;
    lang?: InputMaybe<Scalars["String"]>;
    last?: InputMaybe<Scalars["Int"]>;
    lastPublicationDate?: InputMaybe<Scalars["DateTime"]>;
    lastPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
    lastPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
    similar?: InputMaybe<Similar>;
    sortBy?: InputMaybe<SortDocumentsBy>;
    tags?: InputMaybe<Array<Scalars["String"]>>;
    tags_in?: InputMaybe<Array<Scalars["String"]>>;
    type?: InputMaybe<Scalars["String"]>;
    type_in?: InputMaybe<Array<Scalars["String"]>>;
};

export type QueryAllNavigationsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    firstPublicationDate?: InputMaybe<Scalars["DateTime"]>;
    firstPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
    firstPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
    fulltext?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["String"]>;
    id_in?: InputMaybe<Array<Scalars["String"]>>;
    lang?: InputMaybe<Scalars["String"]>;
    last?: InputMaybe<Scalars["Int"]>;
    lastPublicationDate?: InputMaybe<Scalars["DateTime"]>;
    lastPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
    lastPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
    similar?: InputMaybe<Similar>;
    sortBy?: InputMaybe<SortNavigationy>;
    tags?: InputMaybe<Array<Scalars["String"]>>;
    tags_in?: InputMaybe<Array<Scalars["String"]>>;
    uid?: InputMaybe<Scalars["String"]>;
    uid_in?: InputMaybe<Array<Scalars["String"]>>;
    where?: InputMaybe<WhereNavigation>;
};

export type QueryAllPagesArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    firstPublicationDate?: InputMaybe<Scalars["DateTime"]>;
    firstPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
    firstPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
    fulltext?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["String"]>;
    id_in?: InputMaybe<Array<Scalars["String"]>>;
    lang?: InputMaybe<Scalars["String"]>;
    last?: InputMaybe<Scalars["Int"]>;
    lastPublicationDate?: InputMaybe<Scalars["DateTime"]>;
    lastPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
    lastPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
    similar?: InputMaybe<Similar>;
    sortBy?: InputMaybe<SortPagey>;
    tags?: InputMaybe<Array<Scalars["String"]>>;
    tags_in?: InputMaybe<Array<Scalars["String"]>>;
    uid?: InputMaybe<Scalars["String"]>;
    uid_in?: InputMaybe<Array<Scalars["String"]>>;
    where?: InputMaybe<WherePage>;
};

export type QueryAllPostsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    firstPublicationDate?: InputMaybe<Scalars["DateTime"]>;
    firstPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
    firstPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
    fulltext?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["String"]>;
    id_in?: InputMaybe<Array<Scalars["String"]>>;
    lang?: InputMaybe<Scalars["String"]>;
    last?: InputMaybe<Scalars["Int"]>;
    lastPublicationDate?: InputMaybe<Scalars["DateTime"]>;
    lastPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
    lastPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
    similar?: InputMaybe<Similar>;
    sortBy?: InputMaybe<SortPosty>;
    tags?: InputMaybe<Array<Scalars["String"]>>;
    tags_in?: InputMaybe<Array<Scalars["String"]>>;
    uid?: InputMaybe<Scalars["String"]>;
    uid_in?: InputMaybe<Array<Scalars["String"]>>;
};

export type QueryAllSettingssArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    firstPublicationDate?: InputMaybe<Scalars["DateTime"]>;
    firstPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
    firstPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
    fulltext?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["String"]>;
    id_in?: InputMaybe<Array<Scalars["String"]>>;
    lang?: InputMaybe<Scalars["String"]>;
    last?: InputMaybe<Scalars["Int"]>;
    lastPublicationDate?: InputMaybe<Scalars["DateTime"]>;
    lastPublicationDate_after?: InputMaybe<Scalars["DateTime"]>;
    lastPublicationDate_before?: InputMaybe<Scalars["DateTime"]>;
    similar?: InputMaybe<Similar>;
    sortBy?: InputMaybe<SortSettingsy>;
    tags?: InputMaybe<Array<Scalars["String"]>>;
    tags_in?: InputMaybe<Array<Scalars["String"]>>;
    uid?: InputMaybe<Scalars["String"]>;
    uid_in?: InputMaybe<Array<Scalars["String"]>>;
    where?: InputMaybe<WhereSettings>;
};

export type QueryPageArgs = {
    lang: Scalars["String"];
    uid: Scalars["String"];
};

export type RelatedDocument = {
    __typename?: "RelatedDocument";
    /** The id of the document. */
    id: Scalars["String"];
    /** The language of the document. */
    lang: Scalars["String"];
    /** The type of the document. */
    type: Scalars["String"];
    /** The uid of the document. */
    uid?: Maybe<Scalars["String"]>;
};

export type Settings = _Document &
    _Linkable & {
        __typename?: "Settings";
        _linkType?: Maybe<Scalars["String"]>;
        _meta: Meta;
        domain?: Maybe<Scalars["String"]>;
        favico?: Maybe<Scalars["Json"]>;
        logo?: Maybe<Scalars["Json"]>;
        logo_invert?: Maybe<Scalars["Json"]>;
        search_console_key?: Maybe<Scalars["String"]>;
        site_name?: Maybe<Scalars["String"]>;
        social_media?: Maybe<Array<SettingsSocial_Media>>;
        theme_color?: Maybe<Scalars["String"]>;
    };

/** A connection to a list of items. */
export type SettingsConnectionConnection = {
    __typename?: "SettingsConnectionConnection";
    /** A list of edges. */
    edges?: Maybe<Array<Maybe<SettingsConnectionEdge>>>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    totalCount: Scalars["Long"];
};

/** An edge in a connection. */
export type SettingsConnectionEdge = {
    __typename?: "SettingsConnectionEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Settings;
};

export type SettingsSocial_Media = {
    __typename?: "SettingsSocial_media";
    icon?: Maybe<Scalars["String"]>;
    link?: Maybe<_Linkable>;
};

export enum SortDocumentsBy {
    MetaFirstPublicationDateAsc = "meta_firstPublicationDate_ASC",
    MetaFirstPublicationDateDesc = "meta_firstPublicationDate_DESC",
    MetaLastPublicationDateAsc = "meta_lastPublicationDate_ASC",
    MetaLastPublicationDateDesc = "meta_lastPublicationDate_DESC",
}

export enum SortNavigationy {
    MetaFirstPublicationDateAsc = "meta_firstPublicationDate_ASC",
    MetaFirstPublicationDateDesc = "meta_firstPublicationDate_DESC",
    MetaLastPublicationDateAsc = "meta_lastPublicationDate_ASC",
    MetaLastPublicationDateDesc = "meta_lastPublicationDate_DESC",
}

export enum SortPagey {
    KeywordsAsc = "keywords_ASC",
    KeywordsDesc = "keywords_DESC",
    MetaDescriptionAsc = "meta_description_ASC",
    MetaDescriptionDesc = "meta_description_DESC",
    MetaFirstPublicationDateAsc = "meta_firstPublicationDate_ASC",
    MetaFirstPublicationDateDesc = "meta_firstPublicationDate_DESC",
    MetaLastPublicationDateAsc = "meta_lastPublicationDate_ASC",
    MetaLastPublicationDateDesc = "meta_lastPublicationDate_DESC",
    MetaTitleAsc = "meta_title_ASC",
    MetaTitleDesc = "meta_title_DESC",
}

export enum SortPosty {
    MetaFirstPublicationDateAsc = "meta_firstPublicationDate_ASC",
    MetaFirstPublicationDateDesc = "meta_firstPublicationDate_DESC",
    MetaLastPublicationDateAsc = "meta_lastPublicationDate_ASC",
    MetaLastPublicationDateDesc = "meta_lastPublicationDate_DESC",
}

export enum SortSettingsy {
    DomainAsc = "domain_ASC",
    DomainDesc = "domain_DESC",
    MetaFirstPublicationDateAsc = "meta_firstPublicationDate_ASC",
    MetaFirstPublicationDateDesc = "meta_firstPublicationDate_DESC",
    MetaLastPublicationDateAsc = "meta_lastPublicationDate_ASC",
    MetaLastPublicationDateDesc = "meta_lastPublicationDate_DESC",
    SearchConsoleKeyAsc = "search_console_key_ASC",
    SearchConsoleKeyDesc = "search_console_key_DESC",
    SiteNameAsc = "site_name_ASC",
    SiteNameDesc = "site_name_DESC",
}

export type WhereNavigation = {
    links?: InputMaybe<WhereNavigationLinks>;
};

export type WhereNavigationLinks = {
    /** label */
    label_fulltext?: InputMaybe<Scalars["String"]>;
    /** link */
    link?: InputMaybe<Scalars["String"]>;
    parent?: InputMaybe<Scalars["String"]>;
    parent_fulltext?: InputMaybe<Scalars["String"]>;
};

export type WherePage = {
    keywords?: InputMaybe<Scalars["String"]>;
    keywords_fulltext?: InputMaybe<Scalars["String"]>;
    meta_description?: InputMaybe<Scalars["String"]>;
    meta_description_fulltext?: InputMaybe<Scalars["String"]>;
    meta_title?: InputMaybe<Scalars["String"]>;
    meta_title_fulltext?: InputMaybe<Scalars["String"]>;
};

export type WhereSettings = {
    domain?: InputMaybe<Scalars["String"]>;
    domain_fulltext?: InputMaybe<Scalars["String"]>;
    search_console_key?: InputMaybe<Scalars["String"]>;
    search_console_key_fulltext?: InputMaybe<Scalars["String"]>;
    site_name?: InputMaybe<Scalars["String"]>;
    site_name_fulltext?: InputMaybe<Scalars["String"]>;
    social_media?: InputMaybe<WhereSettingsSocial_Media>;
};

export type WhereSettingsSocial_Media = {
    icon?: InputMaybe<Scalars["String"]>;
    icon_fulltext?: InputMaybe<Scalars["String"]>;
    /** link */
    link?: InputMaybe<Scalars["String"]>;
};

/** A prismic document */
export type _Document = {
    _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
    __typename?: "_DocumentConnection";
    /** A list of edges. */
    edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
    totalCount: Scalars["Long"];
};

/** An edge in a connection. */
export type _DocumentEdge = {
    __typename?: "_DocumentEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: _Document;
};

/** An external link */
export type _ExternalLink = _Linkable & {
    __typename?: "_ExternalLink";
    _linkType?: Maybe<Scalars["String"]>;
    target?: Maybe<Scalars["String"]>;
    url: Scalars["String"];
};

/** A linked file */
export type _FileLink = _Linkable & {
    __typename?: "_FileLink";
    _linkType?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    size: Scalars["Long"];
    url: Scalars["String"];
};

/** A linked image */
export type _ImageLink = _Linkable & {
    __typename?: "_ImageLink";
    _linkType?: Maybe<Scalars["String"]>;
    height: Scalars["Int"];
    name: Scalars["String"];
    size: Scalars["Long"];
    url: Scalars["String"];
    width: Scalars["Int"];
};

/** A prismic link */
export type _Linkable = {
    _linkType?: Maybe<Scalars["String"]>;
};

export type Similar = {
    documentId: Scalars["String"];
    max: Scalars["Int"];
};
