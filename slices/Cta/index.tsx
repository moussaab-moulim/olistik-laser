import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { CtaSlice } from "@customtypes/rest";

import Style from "./style.module.scss";

interface CtaProps {
    slice: CtaSlice;
}
const Cta = ({ slice }: CtaProps) => {
    return (
        <section
            className={`${Style.CtaWrapper}`}
            style={{ backgroundColor: `${slice.primary.background_color}` }}
        >
            {/* <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.text} />
            <PrismicLink href="/">
                <a className="ButtonTransparent">
                    {slice?.items?.map((item, i) => (
                        <span>{item.button_label}</span>
                    ))}
                </a>
            </PrismicLink> */}
        </section>
    );
};

export default Cta;
