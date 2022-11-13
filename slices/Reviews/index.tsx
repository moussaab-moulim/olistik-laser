import React, { FC, useEffect, useState } from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Style from "./style.module.scss";
import Carousel from "nuka-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ReviewsSlice } from "@customtypes/rest";

interface ReviewsProps {
    slice: ReviewsSlice;
}

const Reviews: FC<ReviewsProps> = ({ slice }: ReviewsProps) => {
    return (
        <section
            className={`container ${Style.reviewsWrapper}`}
            style={{
                backgroundColor: `${"#F8E0DE"}`,
            }}
        >
            <div className={` ${Style.container}`}>
                <PrismicRichText field={slice.primary.title} />
                <PrismicRichText field={slice.primary.description} />
                <Carousel
                    className={`${Style.carousel}`}
                    wrapAround={true}
                    renderCenterLeftControls={({
                        previousDisabled,
                        previousSlide,
                    }) => (
                        <button
                            className={`${Style.leftArrow}`}
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
                            className={`${Style.rightArrow}`}
                            onClick={nextSlide}
                            disabled={nextDisabled}
                        >
                            <BsChevronRight size={40} />
                        </button>
                    )}
                    defaultControlsConfig={{
                        pagingDotsClassName: `${Style.sideDots}`,
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
