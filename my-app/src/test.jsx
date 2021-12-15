import { useState } from "react";
import { StatePopupContext } from "./components/Context/StatePopupContext";

const Test = () => {
    return (
        <StatePopupContext.Consumer>
            {
                ({ popupOpen, setPopupValue }) => {
                    console.log(popupOpen);
                    return <button onClick={setPopupValue}>clcik me</button>
                }
            }
        </StatePopupContext.Consumer>
    );
}

const TestApp = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    const setPopupValue = () => {
        setPopupOpen(!popupOpen);
    };

    return (
        <StatePopupContext.Provider value={{popupOpen, setPopupValue}}>
            <Test></Test>
        </StatePopupContext.Provider>
    )
};

export default TestApp;