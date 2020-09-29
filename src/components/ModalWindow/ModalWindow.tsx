import React, { Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import cross from "../../assets/img/cross.svg";
import { AllModalActions, clearDate, setShowModal } from "../../store/modalStore";
import { dateSelector } from "../../store/rootStore";
import { month, fullDaysName } from "../../helpers/helpers";
import "./ModalWindow.scss";

const ModalWindow = () => {
    const modalDispatch = useDispatch<Dispatch<AllModalActions>>();
    const modalDate = useSelector(dateSelector);
    const monthValue = modalDate ? month[modalDate.getMonth()] : "";
    const dayValue = modalDate ? `${modalDate.getDate()}th ${fullDaysName[modalDate.getDay()]}` : "";
    

    const clickCloseButton = () => {
        modalDispatch(clearDate());
        modalDispatch(setShowModal(false));
    };

    return (
        <div className="modal">
            <div className="modal__content">
                <button
                    type="button"
                    className="modal__button"
                    onClick={() => clickCloseButton()}
                >
                    <img
                        src={cross}
                        alt="cross"
                        className="modal__button-img"
                    />
                </button>
                <div className="modal__input-wrapper">
                    <span className="modal__input-description">
                        Month
                    </span>
                    <input
                        type="text"
                        className="modal__input"
                        value={monthValue}
                        disabled
                    />
                </div>
                <div className="modal__input-wrapper">
                    <span className="modal__input-description">
                        Day
                    </span>
                    <input
                        type="text"
                        className="modal__input"
                        value={dayValue}
                        disabled
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
