import styled from "@emotion/styled";
import { ImageField } from "@prismicio/types";
import Image from "next/image";
import React, { FC, Fragment } from "react";

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
const NoActionBackgroundWrapper = styled.div`
    position: absolute;
    height: 50vh;
    width: 100%;
    overflow: hidden;
    z-index: -1;
    @media only screen and (max-width: 576px) {
        img {
            object-position: 30% 50%;
        }
    }
`;

// interface IBackgroundProps {
//     url: string;
//     alt: string;
// }
// export const Background: FC<IBackgroundProps> = ({
//     url,
//     alt,
// }: IBackgroundProps) => {
//     return (
//         <BackgroundWrapper>
//             <Image
//                 alt={alt ?? "background image"}
//                 src={url}
//                 layout="fill"
//                 objectFit="cover"
//                 quality={70}
//             />
//         </BackgroundWrapper>
//     );
// };

interface IBackgroundPrismicProps {
    field: ImageField;
    variation: string;
}
export const BackgroundPrismic: FC<IBackgroundPrismicProps> = ({
    field,
    variation,
}: IBackgroundPrismicProps) => {
    return (
        <Fragment>
            {variation === "default" ? (
                <BackgroundWrapper>
                    <Image
                        src={field.url!}
                        alt={field.alt ?? ""}
                        layout="fill"
                        objectFit="cover"
                        quality={70}
                    />
                </BackgroundWrapper>
            ) : (
                <NoActionBackgroundWrapper>
                    <Image
                        src={field.url!}
                        alt={field.alt ?? ""}
                        layout="fill"
                        objectFit="cover"
                        quality={70}
                    />
                </NoActionBackgroundWrapper>
            )}
        </Fragment>
    );
};
