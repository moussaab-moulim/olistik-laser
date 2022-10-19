import React, { FC, Fragment, useEffect, useState } from "react";
import Style from "./GoTop.style.module.scss";
import { BsChevronUp } from "react-icons/bs";

const GoTop: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <Fragment>
            {isVisible && (
                <button onClick={goToTop} className={`${Style.GoTopButton}`}>
                    <BsChevronUp size={16} color={"white"} />
                </button>
            )}
        </Fragment>
    );
};

export default GoTop;
