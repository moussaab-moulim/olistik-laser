import React from "react";
import { ImageField } from "@prismicio/types";
import Image from "next/image";
import Style from "./style.module.scss";
import Link from "next/link";
import { isFilled } from "@prismicio/helpers";

interface FooterProps {
    logo: ImageField;
}

const Footer: React.FC<FooterProps> = ({ logo }) => {
    return (
        <footer className={` ${Style.footerWrapper}`}>
            <div className={` ${Style.container}`}>
                <div className={`${Style.LinkArea}`}>
                    {isFilled.image(logo) && (
                        <Link href="/" passHref>
                            <a>
                                <Image
                                    src={logo.url}
                                    alt={logo.alt ?? ""}
                                    height={28}
                                    width={120}
                                />
                            </a>
                        </Link>
                    )}
                </div>
                <div className={`${Style.copyrightArea}`}>
                    <p>© 2022 OLISTIK. All rights reserved</p>
                    <div className={`${Style.design}`}>
                        <p>
                            developed by{" "}
                            <Link href={"https://uchihadigital.com/"} passHref>
                                <a target={"_blank"}>Uchiha Digital.</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
