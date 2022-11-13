import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "./style.module.scss";
// import { useMediaQuery } from "@chakra-ui/react";
import { PostDocument } from "@customtypes/rest";
import { isFilled } from "@prismicio/helpers";
interface BlogListProps {
    posts: PostDocument[];
}
const BlogPage: FC<BlogListProps> = ({ posts }: BlogListProps) => {
    // const [isLargerThan786] = useMediaQuery("(min-width: 768px)");
    return (
        <section
            id={"blog"}
            className={` ${Style.blogPageWrapper}`}
            style={{ backgroundColor: "#e6e6e6" }}
        >
            {/* {isLargerThan786 && (
                <div className={`${Style.paths}`}>
                    <Link href={"/"}>
                        <a>Home</a>
                    </Link>
                    {" > "}
                    <Link href={"/blog"}>
                        <a>Blog</a>
                    </Link>
                </div>
            )} */}
            <div className={`container ${Style.cardWrapper}`}>
                {posts.map((post, i: number) => {
                    return (
                        <div key={i} className={`${Style.card}`}>
                            <Link href={"/blog/" + post.uid ?? ""}>
                                <a>
                                    <div className={`${Style.image}`}>
                                        {isFilled.image(
                                            post.data.featured_image,
                                        ) && (
                                            <Image
                                                src={
                                                    post.data.featured_image.url
                                                }
                                                alt={
                                                    post.data.featured_image
                                                        .alt ??
                                                    "background image"
                                                }
                                                layout="fill"
                                                objectFit="cover"
                                                quality={70}
                                            />
                                        )}
                                    </div>
                                    <div className={`${Style.content}`}>
                                        <span>
                                            {new Date(
                                                post.first_publication_date,
                                            ).toDateString()}
                                        </span>
                                        <h3>{post.data.meta_title}</h3>
                                        <div className={`${Style.contentText}`}>
                                            <p>
                                                {post.data.meta_description +
                                                    "..."}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default BlogPage;
