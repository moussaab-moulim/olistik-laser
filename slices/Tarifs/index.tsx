import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { TarifsSlice } from "@customtypes/rest";
import Style from "./style.module.scss";
import { MyButton } from "@components/button";
interface TarifsProps {
    slice: TarifsSlice;
}

const Tarifs = ({ slice }: TarifsProps) => {
    return (
        <section
            id={slice.primary.slice_id ?? ""}
            className={`container ${Style.TarifsWrapper}`}
        >
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.description} />

            <div className={`${Style.priceWrapper}`}>
                {slice?.items?.map((item, i) => (
                    <div key={i} className={`${Style.priceItem}`}>
                        <div className={`${Style.priceItemCircle}`}>
                            <div>
                                {item.price}
                                <span>CHF</span>
                            </div>
                            <span>PER SESSION</span>
                        </div>
                        <div className={`${Style.priceItemTitle}`}>
                            <PrismicRichText field={item.price_title} />
                        </div>
                        <div className={`${Style.priceItemContent}`}>
                            <PrismicRichText field={item.price_description} />
                        </div>
                        <div className={`${Style.priceItemButton}`}>
                            <MyButton variant={true} link={item.button_link}>
                                {item.button_label}
                            </MyButton>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tarifs;
