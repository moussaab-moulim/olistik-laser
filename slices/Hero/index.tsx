import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { HeroSlice } from "@customtypes/rest";
import Link from "next/link";
import Style from "./style.module.scss";
import { MyButton } from "@components/button";

interface HeroProps {
    slice: HeroSlice;
}

const Hero = ({ slice }: HeroProps) => {
    return (
        <section
            className={`${Style.HeroWrapper}`}
            style={{
                backgroundImage: `url(${slice.primary.background_image.url})`,
                backgroundSize: `cover`,
            }}
        >
            <div className={`${Style.contentWrapper}`}>
                <PrismicRichText field={slice.primary.title} />
                <PrismicRichText field={slice.primary.text} />

                {slice?.items?.map((item, i) => (
                    <MyButton key={i} link={item.button_url}>
                        {item.button_label}
                    </MyButton>
                ))}
            </div>
        </section>
    );
};

export default Hero;
