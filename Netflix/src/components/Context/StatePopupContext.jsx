import React from "react";

export const StatePopupContext = React.createContext({
    popupOpen: false,
    setPopupOpen: () => { }
});