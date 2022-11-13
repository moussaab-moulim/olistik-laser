import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Style from "./style.module.scss";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";
/**
 * @typedef {import("@prismicio/client").Content.TextSlice} TextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSlice>} TextProps
 * @param { TextProps }
 */
const Text = (slice) => {
    const [isLargerThan786] = useMediaQuery("(min-width: 768px)");
    return (
        <section
            id={slice.slice.primary.slice_id ?? ""}
            className={`${Style.PostSection}`}
            style={{
                backgroundColor: "#fff",
            }}
        >
            {/* {isLargerThan786 && (
                <div className={`${Style.Paths}`}>
                    <Link href={"/"}>
                        <a>Home</a>
                    </Link>
                    {" > "}
                    <Link href={"/blog"}>
                        <a>Blog</a>
                    </Link>
                    {" > "}
                    <span>{slice.slices[0].primary.title[0].text}</span>
                </div>
            )} */}

            <div className={`container ${Style.PostWrapper}`}>
                <PrismicRichText field={slice.slice.primary.text} />
            </div>
        </section>
    );
};

export default Text;
