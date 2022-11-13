import React, { FC, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "./style.module.scss";
import Carousel from "nuka-carousel";
import { useMediaQuery } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { PostDocument } from "@customtypes/rest";
import { isFilled } from "@prismicio/helpers";
interface BlogListProps {
    posts: PostDocument[];
    title: string;
}
const BLogList: FC<BlogListProps> = ({ posts, title }: BlogListProps) => {
    const [isLargerThan1025] = useMediaQuery("(min-width: 1025px)");
    return (
        <Fragment>
            {posts.length === 0 ? null : (
                <section
                    id={"blog"}
                    className={` ${Style.blogWrapper}`}
                    style={{ backgroundColor: "#e6e6e6" }}
                >
                    <h2>{title}</h2>

                    <div className={`${Style.cardWrapper}`}>
                        <Carousel
                            slidesToShow={isLargerThan1025 ? 3 : 1}
                            cellSpacing={33}
                            wrapAround={true}
                            style={
                                isLargerThan1025
                                    ? { maxWidth: "1025px", margin: "auto" }
                                    : { maxWidth: "380px", margin: "auto" }
                            }
                            renderCenterLeftControls={({
                                previousDisabled,
                                previousSlide,
                            }) => (
                                <Fragment>
                                    {isLargerThan1025 ? null : (
                                        <button
                                            className={`${Style.leftArrow}`}
                                            onClick={previousSlide}
                                            disabled={previousDisabled}
                                        >
                                            <BsChevronLeft size={40} />
                                        </button>
                                    )}
                                </Fragment>
                            )}
                            renderCenterRightControls={({
                                nextDisabled,
                                nextSlide,
                            }) => (
                                <Fragment>
                                    {isLargerThan1025 ? null : (
                                        <button
                                            className={`${Style.rightArrow}`}
                                            onClick={nextSlide}
                                            disabled={nextDisabled}
                                        >
                                            <BsChevronRight size={40} />
                                        </button>
                                    )}
                                </Fragment>
                            )}
                            renderBottomCenterControls={() => null}
                        >
                            {posts.map((post, i: number) => {
                                return (
                                    <div key={i} className={`${Style.card}`}>
                                        <Link href={"/blog/" + post.uid ?? ""}>
                                            <a>
                                                <div
                                                    className={`${Style.image}`}
                                                >
                                                    {isFilled.image(
                                                        post.data
                                                            .featured_image,
                                                    ) && (
                                                        <Image
                                                            src={
                                                                post.data
                                                                    .featured_image
                                                                    .url
                                                            }
                                                            alt={
                                                                post.data
                                                                    .featured_image
                                                                    .alt ??
                                                                "background image"
                                                            }
                                                            layout="fill"
                                                            objectFit="cover"
                                                            quality={70}
                                                        />
                                                    )}
                                                </div>
                                                <div
                                                    className={`${Style.content}`}
                                                >
                                                    <span>
                                                        {new Date(
                                                            post.first_publication_date,
                                                        ).toDateString()}
                                                    </span>
                                                    <h3>
                                                        {post.data.meta_title}
                                                    </h3>
                                                    <div
                                                        className={`${Style.contentText}`}
                                                    >
                                                        <p>
                                                            {
                                                                post.data
                                                                    .meta_description
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </section>
            )}
        </Fragment>
    );
};

export default BLogList;
