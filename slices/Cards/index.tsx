import React, { useState } from "react";
import { PrismicProvider, PrismicRichText } from "@prismicio/react";
import { CardsSlice } from "@customtypes/rest";
import Style from "./style.module.scss";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Fade,
    Slide,
    useDisclosure,
    useMediaQuery,
} from "@chakra-ui/react";
import { MyButton } from "@components/button";
import { ChevronRightIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface CardsProps {
    slice: CardsSlice;
}
const Cards = ({ slice }: CardsProps) => {
    const [isLargerThan1025] = useMediaQuery("(min-width: 1025px)");
    const initialText = slice.items[0].title[0].text;
    const [contentTitle, setContentTitle] = useState(initialText);

    const displayText = (e: any) => {
        const ButtonText = e.target.innerHTML;
        setContentTitle(ButtonText);
    };

    return (
        <section className={`${Style.CardsWrapper}`}>
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
                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        <PrismicRichText field={item.title} />
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel
                                    pb={4}
                                    className={`${Style.Content}`}
                                >
                                    <PrismicRichText field={item.description} />
                                    <MyButton
                                        link={item.button_url}
                                        variant={true}
                                    >
                                        {item.button_label}
                                    </MyButton>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                )}
                {/* DESKTOP DROP DOWN SELECTION */}
                {isLargerThan1025 && (
                    <div className={` ${Style.LeftMenu}`}>
                        {slice?.items?.map((item, i) => (
                            <PrismicRichText
                                field={item.title}
                                components={{
                                    heading3: ({ children }) => (
                                        <Button
                                            onClick={displayText}
                                            variant="unstyled"
                                            rightIcon={<ChevronRightIcon />}
                                        >
                                            <h3>{children}</h3>
                                        </Button>
                                    ),
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
            {/* DESKTOP DROP DOWN SELECTION */}
            {isLargerThan1025 && (
                <div className={`container ${Style.RightSide}`}>
                    {slice?.items?.map(
                        (item, i) =>
                            // problem here
                            contentTitle === item.title[0].text && (
                                <div>
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
