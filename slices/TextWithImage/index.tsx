import React, { FC, Fragment } from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Style from "./style.module.scss";
import { MyButton } from "@components/button";
import { TextWithImageSlice } from "@customtypes/rest";
import { isFilled } from "@prismicio/helpers";
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
                    ? Style.leftSliceWrapper
                    : Style.rightSliceWrapper
            }`}
            style={{
                backgroundColor: `${slice.primary.background_color ?? "#000"}`,
            }}
        >
            <div className={`${Style.textWrapper}`}>
                <PrismicRichText field={slice.primary.title} />
                <PrismicRichText field={slice.primary.text} />
                <div>
                    {slice?.items?.map((item, i) => (
                        <MyButton key={i} variant={true} link={item.button_url}>
                            {item.button_label}
                        </MyButton>
                    ))}
                </div>
            </div>
            <div className={`${Style.imageWrapper}`}>
                {slice.variation === "default" ? (
                    <Fragment>
                        {isFilled.image(slice.primary.image) && (
                            <Image
                                src={slice.primary.image.url}
                                alt={
                                    slice.primary.image.alt ??
                                    "background image"
                                }
                                layout="fill"
                                objectFit="contain"
                                quality={70}
                            />
                        )}
                    </Fragment>
                ) : (
                    <Fragment>
                        {isFilled.image(slice.primary.image) && (
                            <Image
                                src={slice.primary.image.url}
                                alt={
                                    slice.primary.image.alt ??
                                    "background image"
                                }
                                width={380}
                                height={380}
                            />
                        )}
                    </Fragment>
                )}
            </div>
        </section>
    );
};

export default TextWithImage;
