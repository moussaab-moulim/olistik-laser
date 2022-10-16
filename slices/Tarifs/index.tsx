import React, { FC } from "react";

import { MyButton } from "@components/button";
import { TarifsSlice } from "@customtypes/rest";
import { PrismicRichText, PrismicText } from "@prismicio/react";

import Style from "./style.module.scss";

interface TarifsProps {
    slice: TarifsSlice;
}

const Tarifs: FC<TarifsProps> = ({ slice }: TarifsProps) => {
    return (
        <section
            id={slice.primary.slice_id ?? ""}
            className={`container ${Style.TarifsWrapper}`}
        >
            <div className={`${Style.Container}`}>
                <PrismicRichText field={slice.primary.title} />
                <PrismicRichText field={slice.primary.description} />

                <div className={`${Style.priceWrapper}`}>
                    {slice?.items?.map((item, i) => {
                        const price = item.price?.split("/");
                        return (
                            <div key={i} className={`${Style.priceItem}`}>
                                <div className={`${Style.priceItemCircle}`}>
                                    {price?.[0] ?? ""}
                                    {price?.[1] && <span>{price[1]}</span>}
                                </div>
                                <div className={`${Style.priceItemTitle}`}>
                                    <PrismicRichText field={item.price_title} />
                                </div>
                                <div className={`${Style.priceItemContent}`}>
                                    <PrismicText
                                        field={item.price_description}
                                    />
                                </div>
                                <div className={`${Style.priceItemButton}`}>
                                    <MyButton
                                        variant={true}
                                        link={item.button_link}
                                    >
                                        {item.button_label}
                                    </MyButton>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Tarifs;
