import React, { FC, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "./style.module.scss";
import Carousel from "nuka-carousel";
import { useMediaQuery } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { PostDocument } from "@customtypes/rest";
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
                    className={` ${Style.BlogWrapper}`}
                    style={{ backgroundColor: "#e6e6e6" }}
                >
                    <h2>{title}</h2>

                    <div className={`${Style.CardWrapper}`}>
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
                                            className={`${Style.LeftArrow}`}
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
                                            className={`${Style.RightArrow}`}
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
                            {posts.map((post: any, i: number) => {
                                return (
                                    <div key={i} className={`${Style.Card}`}>
                                        <Link href={"/blog/" + post.uid ?? "/"}>
                                            <a>
                                                <div
                                                    className={`${Style.Image}`}
                                                >
                                                    <Image
                                                        src={
                                                            post.data
                                                                .featured_image
                                                                .url!
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
                                                </div>
                                                <div
                                                    className={`${Style.Content}`}
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
                                                        className={`${Style.Text}`}
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
