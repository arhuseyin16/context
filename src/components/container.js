import Header from "./header";
import Button from "./Button";
import {useContext} from "react";
import ThemeContext from "../context/themeContext";


function Container() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`app ${theme === 'dark' ? theme : ''}`}>
            <Header/>
            <hr/>
            <Button/>
        </div>
    );
}

export default Container;