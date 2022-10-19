import React, { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { HeroSlice } from "@customtypes/rest";
import Style from "./style.module.scss";
import { MyButton } from "@components/button";
import { css } from "@emotion/css";
import { Background, BackgroundPrismic } from "@components/Images/Background";
import { isFilled } from "@prismicio/helpers";

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
            {isFilled.image(slice.primary.background_image) &&
            slice.variation === "default" ? (
                <BackgroundPrismic field={slice.primary.background_image} />
            ) : (
                <Background
                    url={slice.primary.background_image.url!}
                    alt={slice.primary.background_image.alt!}
                />
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
