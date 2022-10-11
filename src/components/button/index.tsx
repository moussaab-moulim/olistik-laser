import React, { FC, ReactNode } from "react";
import Style from "./style.module.scss";
import { PrismicLink } from "@prismicio/react";
import { LinkField } from "@prismicio/types";

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
            className={variant ? `${Style.ButtonPink}` : `${Style.ButtonPink}`}
        >
            {children}
        </PrismicLink>
    );
};
