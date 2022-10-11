import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { CtaSlice } from "@customtypes/rest";

import Style from "./style.module.scss";
import { MyButton } from "@components/button";

interface CtaProps {
    slice: CtaSlice;
}
const Cta = ({ slice }: CtaProps) => {
    return (
        <section
            className={`container ${Style.CtaWrapper}`}
            style={{ backgroundColor: `${slice.primary.background_color}` }}
        >
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.text} />
            {slice?.items?.map((item, i) => (
                <MyButton variant={false} link={item.button_url}>
                    {item.button_label}
                </MyButton>
            ))}
        </section>
    );
};

export default Cta;
