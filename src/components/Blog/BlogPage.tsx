import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "./style.module.scss";
import { useMediaQuery } from "@chakra-ui/react";
import { PostDocument } from "@customtypes/rest";
interface BlogListProps {
    posts: PostDocument[];
}
const BlogPage: FC<BlogListProps> = ({ posts }: BlogListProps) => {
    const [isLargerThan786] = useMediaQuery("(min-width: 768px)");
    return (
        <section
            id={"blog"}
            className={` ${Style.BLogPageWrapper}`}
            style={{ backgroundColor: "#e6e6e6" }}
        >
            {isLargerThan786 && (
                <div className={`${Style.Paths}`}>
                    <Link href={"/"}>
                        <a>Home</a>
                    </Link>
                    {" > "}
                    <Link href={"/blog"}>
                        <a>Blog</a>
                    </Link>
                </div>
            )}
            <div className={`container ${Style.CardWrapper}`}>
                {posts.map((post: any, i: number) => {
                    return (
                        <div key={i} className={`${Style.Card}`}>
                            <Link href={"/blog/" + post.uid ?? "/"}>
                                <a>
                                    <div className={`${Style.Image}`}>
                                        <Image
                                            src={post.data.featured_image.url!}
                                            alt={
                                                post.data.featured_image.alt ??
                                                "background image"
                                            }
                                            layout="fill"
                                            objectFit="cover"
                                            quality={70}
                                        />
                                    </div>
                                    <div className={`${Style.Content}`}>
                                        <span>
                                            {new Date(
                                                post.first_publication_date,
                                            ).toDateString()}
                                        </span>
                                        <h3>{post.data.meta_title}</h3>
                                        <div className={`${Style.Text}`}>
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
