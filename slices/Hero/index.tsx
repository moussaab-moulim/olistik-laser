import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { HeroSlice } from "@customtypes/rest";
import Link from "next/link";
import { css, cx } from "@emotion/css";
import Style from "./style.module.scss";

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
                    <Link href={item.button_url}>
                        <a className="ButtonPink">{item.button_label} </a>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Hero;
