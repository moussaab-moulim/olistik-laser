import React, { Fragment, ReactNode } from "react";
import { Box, Button, ButtonProps } from "@chakra-ui/react";
import Style from "./style.module.scss";
import { PrismicLink } from "@prismicio/react";

export type IButton = ButtonProps;

interface myButtonProps {
    // variant: String;
    // coloring: String;
    link: any;
    children: ReactNode;
}
export const MyButton = ({
    // variant,
    // coloring,
    link,
    children,
}: myButtonProps) => {
    return (
        <PrismicLink field={link} className={`${Style.ButtonPink}`}>
            {children}
        </PrismicLink>
    );
};
