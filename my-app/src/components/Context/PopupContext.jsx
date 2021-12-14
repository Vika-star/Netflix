import React from "react";

const PopupContext = React.createContext({popup:{
    show: false, movieId: ''},
    setShowPopup: () => {}
});

export default PopupContext;