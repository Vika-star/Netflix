import React from "react";

const PopupContext = React.createContext({
    popup: { popupOpen: false, movieId: '' },
    setPopup: () => {}
});

export default PopupContext;