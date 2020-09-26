import React from "react";
import cn from "classnames";
import "./MenuButton.scss";

type Props = {
    isActiveMenu: boolean;
    toggleIsActiveMenu: (arg: boolean) => void;
};

const MenuButton: React.FC<Props> = ({ isActiveMenu, toggleIsActiveMenu }) => {
    return (
        <div className="menu">
            <button
                className="menu__button"
                onClick={() => toggleIsActiveMenu(!isActiveMenu)}
            >
                <div
                    className={cn(
                        "menu__hamburger",
                        {
                            "menu__hamburger--active": isActiveMenu,
                        }
                    )}
                ></div>
            </button>
        </div>
    ); 
}

export default MenuButton;