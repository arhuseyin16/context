import ThemeContext from "../context/themeContext";
import {useContext} from "react";

function Button() {
    const data = useContext(ThemeContext);
    return (
        <div>
            Button ({data})
        </div>
    )
}
export default Button;
