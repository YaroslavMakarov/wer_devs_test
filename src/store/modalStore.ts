import { Action } from "redux";

const ADD_DATE = "ADD_DATE";
const CLEAR_DATE = "CLEAR_DATE";
const SET_SHOW_MODAL = "SET_SHOW_MODAL";

type AddDate = Action<typeof ADD_DATE> & {
    date: Date;
};

type ClearDate = Action<typeof CLEAR_DATE>;

type SetShowModal = Action<typeof SET_SHOW_MODAL> & {
    isShowModal: boolean;
};

export const addDate = (date: Date): AddDate => ({
    type: ADD_DATE,
    date,
});

export const clearDate = (): ClearDate => ({
    type: CLEAR_DATE,
});

export const setShowModal = (isShowModal: boolean): SetShowModal => ({
    type: SET_SHOW_MODAL,
    isShowModal,
});

export type AllModalActions = AddDate | ClearDate | SetShowModal;

export type InitialModalState = {
    date: Date | null;
    isShowModal: boolean;
};

const initialModalState: InitialModalState = {
    date: null,
    isShowModal: false,
};

const modalReducer = (state = initialModalState, action: AllModalActions) => {
    switch(action.type) {
        case ADD_DATE: return {
            ...state,
            date: action.date,
        };
        case CLEAR_DATE: return {
            ...state,
            date: null,
        };
        case SET_SHOW_MODAL: return {
            ...state,
            isShowModal: action.isShowModal,
        }

        default: return state;
    }
};

export default modalReducer;
