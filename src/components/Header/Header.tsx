import React, { useState } from "react";
import { Container } from "react-bootstrap";
import cn from "classnames";
import Logo from "../Logo/Logo";
import MenuButton from "../MenuButton/MenuButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

const Header = () => {
    const [isActiveMenu, toggleIsActiveMenu] = useState<boolean>(false);

    return (
        <Container
            fluid
            className="header"
        >
            <Logo />
            <div className="header__navigation">
                <Navigation />
            </div>
            <div className="header__button">
                <MenuButton
                    isActiveMenu={isActiveMenu}
                    toggleIsActiveMenu={toggleIsActiveMenu}
                 />
            </div>
            <div className={cn(
                "header__mobile-menu",
                {
                    "header__mobile-menu--active": isActiveMenu,
                }
            )}>
                <MobileMenu />
            </div> 
        </Container>
    );
}

export default Header;
