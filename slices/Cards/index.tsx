import React, { FC, useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { CardsSlice } from "@customtypes/rest";
import Style from "./style.module.scss";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    useMediaQuery,
} from "@chakra-ui/react";
import { MyButton } from "@components/button";
import { BsChevronRight } from "react-icons/bs";
import { asText } from "@prismicio/helpers";
import { RichTextField } from "@prismicio/types";

interface CardsProps {
    slice: CardsSlice;
}
const Cards: FC<CardsProps> = ({ slice }: CardsProps) => {
    const [isLargerThan1025] = useMediaQuery("(min-width: 1025px)");
    const initialText = asText(slice.items[0].title);
    const [contentTitle, setContentTitle] = useState(initialText);

    const displayText = (textField: RichTextField) => {
        const ButtonText = asText(textField);
        setContentTitle(ButtonText);
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

                {/* MOBILE DROP DOWN SELECTION */}
                {!isLargerThan1025 && (
                    <Accordion
                        allowToggle
                        colorScheme="brand"
                        className={`${Style.LeftMenu}`}
                    >
                        {slice?.items?.map((item, i) => (
                            <AccordionItem key={i}>
                                <AccordionButton>
                                    {asText(item.title)}
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel
                                    pb={4}
                                    className={`${Style.Content}`}
                                >
                                    <PrismicRichText field={item.title} />
                                    <PrismicRichText field={item.description} />
                                    <div>
                                        <MyButton
                                            link={item.button_url}
                                            variant={true}
                                        >
                                            {item.button_label}
                                        </MyButton>
                                    </div>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                )}
                {/* DESKTOP DROP DOWN SELECTION */}
                {isLargerThan1025 && (
                    <div className={` ${Style.LeftMenu}`}>
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
                )}
            </div>
            {/* DESKTOP DROP DOWN CONTENT */}
            {isLargerThan1025 && (
                <div className={`container ${Style.RightSide}`}>
                    {slice?.items?.map(
                        (item, i) =>
                            // problem here
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
