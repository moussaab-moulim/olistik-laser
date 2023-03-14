import { LinkResolverFunction } from "@prismicio/helpers";

import {
    FilledLinkToDocumentField,
    FilledLinkToWebField,
    LinkType,
    PrismicDocument,
} from "@prismicio/types";

export const linkResolver = (
    doc: FilledLinkToDocumentField | FilledLinkToWebField,
): string => {
    if (typeof doc.link_type === typeof LinkType.Web) {
        if (doc?.url?.includes("//#")) return doc.url.replace("https://", "");
        return doc.url ?? "";
    }
    if (typeof doc.link_type === typeof LinkType.Document) {
        const _doc = doc as FilledLinkToDocumentField;
        const langPrefix = _doc.lang === "fr" ? "/" : "/en";
        if (_doc.uid === "home") {
            return `${langPrefix}`;
        }
        if (_doc.type === "post") {
            return `${langPrefix}/blog/${_doc.uid}`;
        }

        if (_doc.type === "page") {
            // TODO add blog en version
            return `${langPrefix}/${_doc.uid}`;
        }

        return "/";
    }
    return "/";
};
export const pageResolver = (doc: PrismicDocument): string => {
    const langPrefix = doc.lang === "fr" ? "" : "/en";
    if (doc.uid === "home") {
        return `${langPrefix}`;
    }
    if (doc.type === "post") {
        return `${langPrefix}/blog/${doc.uid}`;
    }

    if (doc.type === "page") {
        // TODO add blog en version
        return `${langPrefix}/${doc.uid}`;
    }

    return "/";
};

export const webLinkResolver: LinkResolverFunction = (doc) => {
    if (doc?.url?.includes("https://action:")) return "";
    if (doc?.url?.includes("https://#")) return doc.url.replace("https://", "");
    return doc.url ?? "";
};

// Update the routes array to match your project's route structure
