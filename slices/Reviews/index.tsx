import React, { FC, useEffect, useState } from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { css } from "@emotion/css";
import Style from "./style.module.scss";

import Carousel from "nuka-carousel";
import { useMediaQuery } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { PrismicNextImage } from "@prismicio/next";
import { ReviewsSlice } from "@customtypes/rest";

interface ReviewsProps {
    slice: ReviewsSlice;
}

const Reviews: FC<ReviewsProps> = ({ slice }: ReviewsProps) => {
    const useResponsive = () => {
        const isMobile = useMediaQuery("(min-width: 1025px)");
        const isDesktop = !isMobile;

        return { isMobile, isDesktop };
    };
    const { isMobile } = useResponsive();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState(
        slice.items.length > 4 ? 4 : slice.items.length,
    );
    const handleSlideChange = (nextIndex: any) => {
        setCurrentSlide(nextIndex);
    };

    useEffect(() => {
        if (isMobile) {
            setSlides(1);
        } else {
            setSlides(slice.items.length > 4 ? 4 : slice.items.length);
        }
    }, [isMobile]);
    return (
        <section
            className={`container ${Style.ReviewsWrapper}`}
            style={{
                backgroundColor: `${"#F8E0DE"}`,
            }}
        >
            <div className={` ${Style.Container}`}>
                <PrismicRichText field={slice.primary.title} />
                <PrismicRichText field={slice.primary.description} />
                <Carousel
                    className={`${Style.Carousel}`}
                    wrapAround={true}
                    renderCenterLeftControls={({
                        previousDisabled,
                        previousSlide,
                    }) => (
                        <button
                            className={`${Style.LeftArrow}`}
                            onClick={previousSlide}
                            disabled={previousDisabled}
                        >
                            <BsChevronLeft size={40} />
                        </button>
                    )}
                    renderCenterRightControls={({
                        nextDisabled,
                        nextSlide,
                    }) => (
                        <button
                            className={`${Style.RightArrow}`}
                            onClick={nextSlide}
                            disabled={nextDisabled}
                        >
                            <BsChevronRight size={40} />
                        </button>
                    )}
                    defaultControlsConfig={{
                        pagingDotsClassName: `${Style.SideDots}`,
                    }}
                >
                    {slice.items.map((_item, key) => (
                        <div key={key}>
                            <PrismicRichText field={_item.review} />
                            <p>
                                {_item.name}
                                {" - "}
                                <PrismicLink field={_item.social_media_link}>
                                    {_item.social_media_label}
                                </PrismicLink>
                            </p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default Reviews;
