import React, { Fragment } from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { background, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import Style from "./style.module.scss";
import { MyButton } from "@components/button";

const TextWithImage = ({ slice }) => {
    return (
        <Fragment>
            <section
                className={`${
                    slice.variation === "default"
                        ? Style.LeftSliceWrapper
                        : Style.RightSliceWrapper
                }`}
                style={{
                    backgroundColor: `${slice.primary.background_color}`,
                }}
            >
                <div className={`${Style.textWrapper}`}>
                    <PrismicRichText field={slice.primary.title} />
                    <PrismicRichText field={slice.primary.text} />
                    {slice?.items?.map((item, i) => (
                        <MyButton variant={true} link={item.button_url}>
                            {item.button_label}
                        </MyButton>
                    ))}
                </div>
                <div className={`${Style.imageWrapper}`}>
                    <Image
                        src={slice.primary.image.url}
                        alt={slice.primary.image.alt}
                    />
                </div>
            </section>
        </Fragment>
    );
};

export default TextWithImage;
