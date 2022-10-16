import React, { FC, ReactNode } from "react";

import { PrismicLink } from "@prismicio/react";
import { LinkField } from "@prismicio/types";

import Style from "./style.module.scss";

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
