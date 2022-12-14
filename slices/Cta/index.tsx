import React, { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { CtaSlice } from "@customtypes/rest";

import Style from "./style.module.scss";
import { MyButton } from "@components/button";

interface CtaProps {
    slice: CtaSlice;
}
const Cta: FC<CtaProps> = ({ slice }: CtaProps) => {
    return (
        <section
            id={slice.primary.slice_id ?? ""}
            className={`container ${Style.ctaWrapper}`}
            style={{
                backgroundColor: `${slice.primary.background_color ?? "#000"}`,
            }}
        >
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.text} />
            {slice?.items?.map((item, i) => (
                <MyButton key={i} variant={false} link={item.button_url}>
                    {item.button_label}
                </MyButton>
            ))}
        </section>
    );
};

export default Cta;
