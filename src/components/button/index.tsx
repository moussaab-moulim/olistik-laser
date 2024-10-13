import React, { FC, ReactNode } from "react";
import Style from "./style.module.scss";
import { PrismicLink } from "@prismicio/react";
import { LinkField } from "@prismicio/types";
import { asLink } from "@prismicio/helpers";

interface MyButtonProps {
    variant: boolean;
    // coloring: String;
    link: LinkField;
    children: ReactNode;
}
export const MyButton: FC<MyButtonProps> = ({
    variant,
    // coloring,
    link,
    children,
}) => {
    const flatLink = asLink(link);
    console.log(flatLink);
    if (flatLink?.startsWith("//popup:")) {
        const popupParams = flatLink
            .replace("//popup:", "")
            .split("&")
            .reduce((acc, param) => {
                const [key, value] = param.split("=");
                acc[key] =
                    value !== "" && isNaN(Number(value))
                        ? value
                        : Number(value);
                return acc;
            }, {} as Record<string, string | number>);
        return (
            <button
                className={
                    variant
                        ? `${Style.ButtonPink}`
                        : `${Style.ButtonTransparent}`
                }
                onClick={() => {
                    AgendaCH.show(popupParams);
                    return false;
                }}
            >
                {children}
            </button>
        );
    }
    return (
        <PrismicLink
            field={link}
            className={
                variant ? `${Style.ButtonPink}` : `${Style.ButtonTransparent}`
            }
        >
            {children}
        </PrismicLink>
    );
};
