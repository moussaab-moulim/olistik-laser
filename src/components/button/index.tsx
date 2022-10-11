import React, { FC, ReactNode } from "react";
import Style from "./style.module.scss";
import { PrismicLink } from "@prismicio/react";
import { LinkField } from "@prismicio/types";

interface MyButtonProps {
    // variant: String;
    // coloring: String;
    link: LinkField;
    children: ReactNode;
}
export const MyButton: FC<MyButtonProps> = ({
    // variant,
    // coloring,
    link,
    children,
}: MyButtonProps) => {
    return (
        <PrismicLink field={link} className={`${Style.ButtonPink}`}>
            {children}
        </PrismicLink>
    );
};
