import styled from "@emotion/styled";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicImage } from "@prismicio/react";
import { ImageField } from "@prismicio/types";
import Image from "next/image";
import React, { FC } from "react";

const BackgroundWrapper = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    z-index: -1;
    @media only screen and (max-width: 576px) {
        img {
            object-position: 30% 50%;
        }
    }
`;

interface IBackgroundProps {
    url: string;
    alt: string;
}
export const Background: FC<IBackgroundProps> = ({
    url,
    alt,
}: IBackgroundProps) => {
    return (
        <BackgroundWrapper>
            <Image
                alt={alt ?? "background image"}
                src={url}
                layout="fill"
                objectFit="cover"
                quality={70}
            />
        </BackgroundWrapper>
    );
};

interface IBackgroundPrismicProps {
    field: ImageField;
}
export const BackgroundPrismic: FC<IBackgroundPrismicProps> = ({
    field,
}: IBackgroundPrismicProps) => {
    return (
        <BackgroundWrapper>
            <PrismicNextImage
                field={field}
                layout="fill"
                objectFit="cover"
                quality={70}
            />
        </BackgroundWrapper>
    );
};
