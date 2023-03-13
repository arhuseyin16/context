import ThemeContext from "../context/themeContext";
import {useContext} from "react";

function Button() {
    // const data = useContext(ThemeContext);
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div>
            {/*ActiveTheme: {data.theme}*/}
            ActiveTheme: {theme}
            <br/>
            <button onClick={() => setTheme(theme === 'light' ? 'dark': 'light')}>Change Theme</button>
        </div>
    )
}
export default Button;
