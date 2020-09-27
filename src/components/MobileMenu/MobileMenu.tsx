import React from "react";
import Navigation from "../Navigation/Navigation";
import "./MobileMenu.scss";

type Props = {
    isActiveMenu: boolean;
    toggleIsActiveMenu: (arg: boolean) => void;
}

const MobileMenu:React.FC<Props> = ({ isActiveMenu, toggleIsActiveMenu }) => {
    return (
        <div className="menu">
            <Navigation
                isActiveMenu={isActiveMenu}
                toggleIsActiveMenu={toggleIsActiveMenu}
             />
        </div>
    );
};

export default MobileMenu;