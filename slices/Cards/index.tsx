import React, { FC, Fragment, useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { CardsSlice } from "@customtypes/rest";
import Style from "./style.module.scss";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { MyButton } from "@components/button";
import { BsChevronRight } from "react-icons/bs";
import { asText } from "@prismicio/helpers";
import { RichTextField } from "@prismicio/types";

interface CardsProps {
    slice: CardsSlice;
}
const Cards: FC<CardsProps> = ({ slice }: CardsProps) => {
    // BreakPoint
    const isLargerThan1025 = useMediaQuery({
        query: "(min-width: 1025px)",
    });
    // Desktop Accordion State
    const initialText = asText(slice.items[0].title);
    const [contentTitle, setContentTitle] = useState(initialText);

    const displayText = (textField: RichTextField) => {
        const ButtonText = asText(textField);
        setContentTitle(ButtonText);
    };
    // Mobile Accordion State
    const [isSelected, setSelected] = useState(null);
    const toggle = (i: any) => {
        if (isSelected === i) {
            //if clicked an accordion. the others close it
            return setSelected(null);
        }
        setSelected(i);
    };
    return (
        <section
            id={slice.primary.slice_id ?? ""}
            className={`${Style.CardsWrapper}`}
        >
            <div className={` ${Style.LeftSide}`}>
                <div className={`container ${Style.LeftHead}`}>
                    <PrismicRichText field={slice.primary.title} />
                    <PrismicRichText field={slice.primary.description} />
                </div>

                {isLargerThan1025 ? (
                    <div className={` ${Style.LeftMenu}`}>
                        {/* DESKTOP DROP DOWN SELECTION */}
                        {slice?.items?.map((item, i) => (
                            <div
                                key={i}
                                className={`${Style.listButton}`}
                                onClick={() => displayText(item.title)}
                            >
                                {asText(item.title)}
                                <BsChevronRight />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={`${Style.AccordionMobile}`}>
                        {/* MOBILE DROP DOWN SELECTION */}
                        <div className={`${Style.AccordionContainer}`}>
                            {slice?.items?.map((item, i) => (
                                <div key={i}>
                                    <div
                                        className={`${Style.AccordionButton}`}
                                        onClick={() => toggle(i)}
                                    >
                                        <PrismicRichText field={item.title} />
                                        {isSelected === i ? (
                                            <BsChevronUp size={14} />
                                        ) : (
                                            <BsChevronDown size={14} />
                                        )}
                                    </div>
                                    {/* MOBILE DROP DOWN CONTENT */}
                                    <div
                                        className={`${Style.AccordionContent} ${
                                            isSelected === i &&
                                            Style.ShowAccordion
                                        } `}
                                    >
                                        <div className={`${Style.inside}`}>
                                            <PrismicRichText
                                                field={item.title}
                                            />
                                            <PrismicRichText
                                                field={item.description}
                                            />
                                            <div>
                                                <MyButton
                                                    link={item.button_url}
                                                    variant={true}
                                                >
                                                    {item.button_label}
                                                </MyButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {/* DESKTOP DROP DOWN CONTENT */}
            {isLargerThan1025 && (
                <div className={`container ${Style.RightSide}`}>
                    {slice?.items?.map(
                        (item, i) =>
                            contentTitle === asText(item.title) && (
                                <div key={i}>
                                    <PrismicRichText field={item.title} />
                                    <PrismicRichText field={item.description} />
                                    <MyButton
                                        link={item.button_url}
                                        variant={true}
                                    >
                                        {item.button_label}
                                    </MyButton>
                                </div>
                            ),
                    )}
                </div>
            )}
        </section>
    );
};

export default Cards;
