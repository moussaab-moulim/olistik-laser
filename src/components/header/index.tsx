import { MdCall } from "react-icons/md";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/Link";
import { Fade, IconButton, useDisclosure } from "@chakra-ui/react";
import { NavigationDocument } from "@customtypes/rest";
import { ImageField } from "@prismicio/types";
import { css, cx } from "@emotion/css";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import Style from "./style.module.scss";

interface HeaderProps {
    navigation: NavigationDocument;
    logo: ImageField;
}

export const Header: React.FC<HeaderProps> = ({
    navigation,
    logo,
}: HeaderProps) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <header className={`${Style.navWrapper}`}>
            <div className={`${Style.navMain}`}>
                <div className={`${Style.logo}`}>
                    <Link href={"/"}>
                        <a>
                            <Image
                                src={logo.url}
                                alt={logo.alt}
                                height={28}
                                width={120}
                            />
                        </a>
                    </Link>
                </div>

                {/* < -- DESKTOP NAV BAR -- > */}

                <nav className={`${Style.SideNav}`}>
                    <ul>
                        {navigation?.links.map((navItem: any, i: any) => (
                            <li className={`${Style.navItem}`} key={i}>
                                <Link href={navItem.link}>
                                    <a>{navItem.label}</a>
                                </Link>
                            </li>
                        ))}
                        {navigation?.action_group.map(
                            (navItem: any, i: any) => (
                                <li key={i} className={`${Style.navAction}`}>
                                    <Link href={navItem.button_url}>
                                        <a>{navItem.button_label}</a>
                                    </Link>
                                </li>
                            ),
                        )}
                    </ul>
                </nav>

                {/* < -- MOBILE NAV BAR -- > */}

                <div className={`${Style.navBurger}`}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon w={8} h={8} />
                            ) : (
                                <HamburgerIcon w={10} h={10} />
                            )
                        }
                        variant={"unstyled"}
                        aria-label={"Toggle Navigation"}
                    />
                </div>
                <Fade in={isOpen}>
                    <div className={`${Style.navCollapse}`}>
                        <ul>
                            {navigation?.links.map((navItem, i) => (
                                <li key={i}>
                                    <Link
                                        href={navItem.link}
                                        onClick={onToggle}
                                    >
                                        <a>{navItem.label}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Fade>
            </div>

            {/* < -- BOTTOM MOBILE NAV BAR -- > */}

            <div className={`${Style.navBottom}`}>
                <ul>
                    {navigation?.action_group.map((navItem: any, i: any) => (
                        <li key={i} className={`${Style.navAction}`}>
                            <Link href={navItem.button_url.url} passHref>
                                <a target="_blank" rel="noreferrer">
                                    {navItem.button_label}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};
