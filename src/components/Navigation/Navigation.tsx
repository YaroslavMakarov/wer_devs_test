import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import "./Navigation.scss";

type Props = {
    isActiveMenu?: boolean;
    toggleIsActiveMenu?: (arg: boolean) => void;
}

const Navigation:React.FC<Props> = ({ isActiveMenu, toggleIsActiveMenu }) => {
    const location = useLocation();

    return (
        <div className="navigation">
            <NavLink
                to="/"
                exact
                className={cn(
                    "navigation__link",
                    {
                        "navigation__link--mobile": isActiveMenu,
                    }
                )}
                activeClassName={
                    location.pathname === "/"
                    ? "navigation__link--active"
                    : ""
                }
                onClick={
                    (typeof toggleIsActiveMenu === "function")
                    ? () => toggleIsActiveMenu(false)
                    : undefined
                }
            >
                home
            </NavLink>
            <NavLink
                to="/about"
                exact
                className={cn(
                    "navigation__link",
                    {
                        "navigation__link--mobile": isActiveMenu,
                    }
                )}
                activeClassName="navigation__link--active"
                onClick={
                    (typeof toggleIsActiveMenu === "function")
                    ? () => toggleIsActiveMenu(false)
                    : undefined
                }
            >
                about us
            </NavLink>
        </div>
    );
}

export default Navigation;