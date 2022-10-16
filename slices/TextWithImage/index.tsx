import React, { FC } from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Style from "./style.module.scss";
import { MyButton } from "@components/button";
import { TextWithImageSlice } from "@customtypes/rest";
interface TextWithImageProps {
    slice: TextWithImageSlice;
}

const TextWithImage: FC<TextWithImageProps> = ({
    slice,
}: TextWithImageProps) => {
    return (
        <section
            id={slice.primary.slice_id ?? ""}
            className={`${
                slice.variation === "default"
                    ? Style.LeftSliceWrapper
                    : Style.RightSliceWrapper
            }`}
            style={{
                backgroundColor: `${slice.primary.background_color ?? "#000"}`,
            }}
        >
            <div className={`${Style.textWrapper}`}>
                <PrismicRichText field={slice.primary.title} />
                <PrismicRichText field={slice.primary.text} />
                {slice?.items?.map((item, i) => (
                    <MyButton key={i} variant={true} link={item.button_url}>
                        {item.button_label}
                    </MyButton>
                ))}
            </div>
            <div className={`${Style.imageWrapper}`}>
                <PrismicNextImage field={slice.primary.image} />
            </div>
        </section>
    );
};

export default TextWithImage;
