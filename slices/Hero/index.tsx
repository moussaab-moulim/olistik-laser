import React, { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { HeroSlice } from "@customtypes/rest";
import Style from "./style.module.scss";
import { MyButton } from "@components/button";

interface HeroProps {
    slice: HeroSlice;
}

const Hero: FC<HeroProps> = ({ slice }: HeroProps) => {
    return (
        <section
            className={`${
                slice.variation === "default"
                    ? Style.HeroWrapper
                    : Style.HeroBreak
            }`}
            style={{
                backgroundImage: `url(${slice.primary.background_image.url})`,
                backgroundSize: `cover`,
            }}
        >
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
