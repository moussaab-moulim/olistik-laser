import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { Collapse, useMediaQuery } from "@chakra-ui/react";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { NavigationDocument } from "@customtypes/rest";
import { ImageField } from "@prismicio/types";
import Style from "./style.module.scss";
import { MyButton } from "@components/button";
import { Fragment } from "react";
import { isFilled } from "@prismicio/helpers";
import { linkResolver } from "prismicio";
import { FilledLink } from "@customtypes/common";

interface HeaderProps {
    navigation: NavigationDocument;
    logo: ImageField;
}

export const Header: React.FC<HeaderProps> = ({ navigation, logo }) => {
    const [isLargerThan1025] = useMediaQuery("(min-width: 1025px)");
    const { isOpen, onToggle } = useDisclosure();

    return (
        <header className={`${Style.navWrapper}`}>
            <div className={`${Style.navMain}`}>
                {/* < -- DESKTOP LOGO -- > */}
                <div className={`${Style.logo}`}>
                    {isFilled.image(logo) && (
                        <Link href="/" passHref>
                            <a>
                                <Image
                                    src={logo.url}
                                    alt={logo.alt ?? "logo"}
                                    height={28}
                                    width={120}
                                    layout="fixed"
                                />
                            </a>
                        </Link>
                    )}
                </div>

                {/* < -- DESKTOP NAV BAR -- > */}
                {isLargerThan1025 && (
                    <nav className={`${Style.SideNav}`}>
                        <ul>
                            {navigation?.data.links.map((navItem, i) => {
                                return (
                                    <li className={`${Style.navItem}`} key={i}>
                                        <Link
                                            href={linkResolver(
                                                navItem.link as FilledLink,
                                            )}
                                            passHref
                                            prefetch={false}
                                        >
                                            <a>{navItem.label}</a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        {/* < -- DESKTOP ACTION BUTTONS -- > */}
                        <div className={`${Style.navAction}`}>
                            {navigation?.data.action_group.map((navItem, i) =>
                                navItem.button_shape ? (
                                    <MyButton
                                        key={i}
                                        link={navItem.button_url}
                                        variant={navItem.button_shape}
                                    >
                                        {navItem.button_label}
                                    </MyButton>
                                ) : (
                                    <Link
                                        key={i}
                                        href={linkResolver(
                                            navItem.button_url as FilledLink,
                                        )}
                                        passHref
                                        prefetch={false}
                                    >
                                        <a>{navItem.button_label}</a>
                                    </Link>
                                ),
                            )}
                        </div>
                    </nav>
                )}
                {/* < -- MOBILE BURGER BUTTON -- > */}
                {!isLargerThan1025 && (
                    <div className={`${Style.navBurger}`}>
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? (
                                    <CloseIcon w={5} h={5} />
                                ) : (
                                    <HamburgerIcon w={10} h={10} />
                                )
                            }
                            variant={"unstyled"}
                            aria-label={"Toggle Navigation"}
                        />
                    </div>
                )}
            </div>

            {!isLargerThan1025 && (
                <Fragment>
                    {/* < -- MOBILE NAV BAR -- > */}
                    <Collapse in={isOpen}>
                        <div className={`${Style.navCollapse}`}>
                            <ul>
                                {navigation?.data.links.map((navItem, i) => (
                                    <li key={i}>
                                        <Link
                                            href={linkResolver(
                                                navItem.link as FilledLink,
                                            )}
                                            passHref
                                            prefetch={false}
                                        >
                                            <a>{navItem.label}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Collapse>
                    {/* < -- MOBILE BOTTOM NAV BAR -- > */}
                    <div className={`${Style.navBottom}`}>
                        {navigation?.data.action_group.map((navItem, i) => (
                            <Link
                                key={i}
                                href={linkResolver(
                                    navItem.button_url as FilledLink,
                                )}
                                className={`${Style.navAction}`}
                                passHref
                                prefetch={false}
                            >
                                <a>{navItem.button_label}</a>
                            </Link>
                        ))}
                    </div>
                </Fragment>
            )}
        </header>
    );
};
