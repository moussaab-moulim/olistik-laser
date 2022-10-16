import React, { FC } from "react";

import { MyButton } from "@components/button";
import { BackgroundPrismic } from "@components/Images/Background";
import { HeroSlice } from "@customtypes/rest";
import { css } from "@emotion/css";
import { isFilled } from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

import Style from "./style.module.scss";

interface HeroProps {
    slice: HeroSlice;
}

const Hero: FC<HeroProps> = ({ slice }: HeroProps) => {
    return (
        <section
            id={slice.primary.slice_id ?? ""}
            className={`${
                slice.variation === "default"
                    ? Style.HeroWrapper
                    : Style.HeroBreak
            } ${css`
                background-color: ${slice.primary.background_color ?? "#000"};
            `}`}
        >
            {isFilled.image(slice.primary.background_image) && (
                <BackgroundPrismic field={slice.primary.background_image} />
            )}
            <div className={`${Style.contentWrapper}`}>
                <PrismicRichText field={slice.primary.title} />
                <PrismicRichText field={slice.primary.text} />

                {slice?.items?.map((item, i) => (
                    <MyButton key={i} link={item.button_url} variant={true}>
                        {item.button_label}
                    </MyButton>
                ))}
            </div>
        </section>
    );
};

export default Hero;
