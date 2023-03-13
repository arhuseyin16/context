import ThemeContext from "../context/themeContext";
import {useContext} from "react";

function Header() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div>
            ActiveTheme: {theme}
        </div>
    )
}
export default Header;
